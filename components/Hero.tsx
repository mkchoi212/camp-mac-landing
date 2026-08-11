"use client";

import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
  type Transition,
} from "motion/react";

type Sticker = {
  src: string;
  /** Intrinsic PNG size, so the browser can reserve the right aspect ratio. */
  naturalWidth: number;
  naturalHeight: number;
  /** Final rotation in degrees, as rendered on the live site. */
  rotate: number;
  /** Absolute position + box size, per breakpoint. */
  className: string;
  /** Scroll drift, in px of translation per px of page scroll. */
  dx?: number;
  dy?: number;
  /** Scroll spin, in degrees per px of page scroll. */
  drot?: number;
};

/**
 * As the hero scrolls away the tags fly up and out, each on its own vector and
 * spinning at its own rate. Sampled off the live site at 1512x950 by reading the
 * composed matrix at scrollY 0/100/200/300/450/600/800 — every channel is linear
 * in scrollY, so a single rate per axis reproduces it exactly.
 *
 * Every measured rate is a clean multiple of one base unit, which is almost
 * certainly a single Framer scroll transform driving all five:
 */
const U = 0.274952; // px of drift per px of scroll

const MARKETING = {
  src: "/assets/JZEcGhGR9P1RCI4J0agL3LGI7Xk-512.png",
  naturalWidth: 512,
  naturalHeight: 113,
};
const PLACES = {
  src: "/assets/IS4NjPCnzPLxBoheyiKIzUPt9z4.png",
  naturalWidth: 467,
  naturalHeight: 137,
};
const DESIGN = {
  src: "/assets/mV3LfHKnnG4owTAInLxZhiRRYU.png",
  naturalWidth: 493,
  naturalHeight: 137,
};
const CODING = {
  src: "/assets/WkNY6rNQ0BCzuCmCLzy0j3VOgo.png",
  naturalWidth: 471,
  naturalHeight: 137,
};
const INSPIRATIONS = {
  src: "/assets/74VcATH3UYu45OkrlrxgC7ciLY.png",
  naturalWidth: 663,
  naturalHeight: 137,
};

/**
 * Tablet + desktop "Tags" layer. Boxes come straight off the Framer
 * stylesheet (container = the hero card):
 *   marketing    left 421 / top 716         (tablet: left 354 / top 777)   256x115  -40deg
 *   places       left 452 / bottom 66                                      195x60   +26deg
 *   design       left calc(48.326% - 100px) / bottom 62 (tablet 293 / 65)  200x100  -16deg
 *   coding       left 437 / bottom 147      (tablet: left 306 / bottom 54) 211x54     0deg
 *   inspirations left 393 / bottom 134      (tablet: left 268 / bottom 91) 262x85   -30deg
 * Array order is paint order — "inspirations" ends up on top of the pile.
 */
const TAGS: Sticker[] = [
  {
    ...MARKETING,
    rotate: -40,
    dx: U,
    dy: -7 * U,
    drot: -0.0055,
    className:
      "h-[115px] w-[256px] md:top-[777px] md:left-[354px] lg:top-[716px] lg:left-[421px]",
  },
  {
    ...PLACES,
    rotate: 26,
    dx: -0.5 * U,
    dy: -5 * U,
    drot: -0.1026,
    className: "h-[60px] w-[195px] md:bottom-[66px] md:left-[452px]",
  },
  {
    ...DESIGN,
    rotate: -16,
    dx: U,
    dy: -7 * U,
    drot: 0.1012,
    className:
      "h-[100px] w-[200px] md:bottom-[65px] md:left-[293px] lg:bottom-[62px] lg:left-[calc(48.32618025751076%_-_100px)]",
  },
  {
    ...CODING,
    rotate: 0,
    dx: -U,
    dy: -7 * U,
    drot: 0.099,
    className:
      "h-[54px] w-[211px] md:bottom-[54px] md:left-[306px] lg:bottom-[147px] lg:left-[437px]",
  },
  {
    ...INSPIRATIONS,
    rotate: -30,
    dx: -3 * U,
    dy: -4 * U,
    drot: 0.0096,
    className:
      "h-[85px] w-[262px] md:bottom-[91px] md:left-[268px] lg:bottom-[134px] lg:left-[393px]",
  },
];

/**
 * Phone layout drops the pile behind the copy and uses a separate 171px strip
 * underneath it, with its own smaller, differently rotated tags.
 *
 * Framer only attaches its appear animation to the desktop/tablet "Tags" layer:
 * the phone tags ship with a bare `transform: rotate(Xdeg)` and no opacity /
 * translate / scale slots, so they are painted statically here too.
 */
const MOBILE_TAGS: Sticker[] = [
  {
    ...PLACES,
    rotate: 13,
    className: "top-[34px] left-[238px] h-[34px] w-[117px]",
  },
  {
    ...INSPIRATIONS,
    rotate: 32,
    className:
      "top-[44px] left-[calc(46.41025641025644%_-_87.5px)] h-[34px] w-[175px]",
  },
  {
    ...DESIGN,
    rotate: -8,
    className: "top-[105px] left-[100px] h-[34px] w-[125px]",
  },
  {
    ...MARKETING,
    rotate: 20,
    className: "top-[57px] left-[-18px] h-[35px] w-[167px]",
  },
  {
    ...CODING,
    rotate: 0,
    className: "top-[91px] left-[251px] h-[43px] w-[126px]",
  },
];

const SPRING: Transition = {
  type: "spring",
  stiffness: 220,
  damping: 17,
  mass: 0.9,
};

/* Plain <img>: these PNGs are already sized for their slot, so there is
   nothing to gain from re-encoding them through the image optimizer. */
function StickerImage({ tag }: { tag: Sticker }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={tag.src}
      alt=""
      width={tag.naturalWidth}
      height={tag.naturalHeight}
      className="absolute inset-0 block h-full w-full object-contain"
    />
  );
}

/**
 * Outer layer owns the scroll drift, inner layer owns the entrance. Splitting
 * them keeps the two from writing the same transform: the entrance only touches
 * opacity and scale, so once it settles the composed transform is exactly
 * `rotate(base)` at scrollY 0 — i.e. the reference's resting state.
 */
function ScrollSticker({
  tag,
  index,
  scrollY,
  reduceMotion,
}: {
  tag: Sticker;
  index: number;
  scrollY: MotionValue<number>;
  reduceMotion: boolean | null;
}) {
  const x = useTransform(scrollY, (v) => v * (tag.dx ?? 0));
  const y = useTransform(scrollY, (v) => v * (tag.dy ?? 0));
  const rotate = useTransform(scrollY, (v) => tag.rotate + v * (tag.drot ?? 0));
  const transform = useMotionTemplate`perspective(1200px) translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg)`;

  return (
    <motion.div
      className={`absolute ${tag.className}`}
      style={
        reduceMotion
          ? { transform: `rotate(${tag.rotate}deg)` }
          : { transform, willChange: "transform" }
      }
    >
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.62 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...SPRING, delay: 0.15 + index * 0.08 }}
      >
        <StickerImage tag={tag} />
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const renderStaticSticker = (tag: Sticker, index: number) => (
    <div
      key={`${tag.src}-${index}`}
      className={`absolute ${tag.className}`}
      style={{ transform: `rotate(${tag.rotate}deg)` }}
    >
      <StickerImage tag={tag} />
    </div>
  );

  return (
    <header
      className={[
        // Framer: flex row / centred / overflow hidden
        // phone 80vh, w 94%, padding 8px 0 0 | tablet 90vh | desktop 100vh, padding 20px
        "relative flex w-[94%] shrink-0 flex-row flex-nowrap items-center justify-center",
        "h-[80vh] overflow-hidden p-[8px_0px_0px]",
        "md:h-[90vh] md:w-full md:p-[20px]",
        "lg:h-[100vh]",
      ].join(" ")}
    >
      {/* Card: 90% wide on tablet/desktop, r40 (r30 on phone), white → #f5f5f5 */}
      <div
        className={[
          "relative flex h-full w-full flex-col flex-nowrap items-center justify-end",
          "overflow-hidden rounded-[30px] md:w-[90%] md:rounded-[40px]",
          "bg-[linear-gradient(180deg,#ffffff_57.90068159688413%,#f5f5f5_100%)]",
          // Framer promotes the card to its own layer; it also snaps the card's
          // fractional (90%) box onto whole device pixels.
          "will-change-transform",
        ].join(" ")}
      >
        {/* Copy, plus the tag pile that overlaps it */}
        <div className="relative w-full flex-1 overflow-hidden md:h-full md:flex-none">
          <div
            className={[
              "absolute bottom-0 left-0 flex w-full flex-col flex-nowrap items-start",
              "gap-[10px] overflow-hidden p-[20px] md:p-[80px]",
            ].join(" ")}
          >
            {/* globals.css resets h1/h2 to font-size/weight:inherit, so the type
                scale lives on the wrapper — as it does in Framer's rich text. */}
            <div className="relative w-full max-w-full font-sans text-[20px] font-medium leading-[30px] tracking-[-0.7px] text-muted md:text-[26px] md:leading-[39px]">
              <h2 className="whitespace-pre-wrap">
                Camp is a personalized AI screen capturing tool
              </h2>
            </div>

            <div className="relative w-auto max-w-full font-sans text-[36px] font-bold leading-[36px] tracking-[-0.8px] text-ink md:text-[64px] md:leading-[76.8px] md:tracking-[-3.8px]">
              <h1 className="whitespace-pre-wrap">
                capture once.
                <br />
                remember forever.
              </h1>
            </div>
          </div>

          {/* Tablet + desktop tags */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-[calc(49.96226415094342%_-_50%)] hidden h-full w-full overflow-hidden md:block"
          >
            {TAGS.map((tag, index) => (
              <ScrollSticker
                key={`${tag.src}-${index}`}
                tag={tag}
                index={index}
                scrollY={scrollY}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>

        {/* Phone tags: a 171px strip pinned under the copy */}
        <div
          aria-hidden="true"
          className="relative h-[171px] w-full shrink-0 overflow-hidden md:hidden"
        >
          {MOBILE_TAGS.map(renderStaticSticker)}
        </div>

        {/* Framer draws the 1px card outline with an inset ::after so it never
            eats into the padding box. */}
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-[#d9d9d9]" />
      </div>
    </header>
  );
}
