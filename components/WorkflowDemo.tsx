"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const TABS = ["Capture", "Annotate", "Search"] as const;

/**
 * Measured from the reference (Framer "Workflow Videos" header, id=#workflow):
 *  - header: flex column, gap 20px, height 60vh (tablet) / 80vh (desktop),
 *            scroll-margin-top 100px, hidden below 810px.
 *  - slide:  905x650 (desktop) / 737x541 (tablet), flex column, gap 40px.
 *  - video area fills the remaining height (566 / 457).
 *  - video frame: width 97%, right 13px, radius 12px + layered shadow;
 *    the <video> itself is radius 8px, object-fit cover, bg rgba(41,41,41,.2).
 *  - "Dock" image: width 100%, height 41px, bottom -29px.
 *  - segmented control: 500x44, bg #f3f3f3, radius 12px, padding 4px,
 *    three 164x36 segments; active chip #fff radius 10px + shadow,
 *    labels Manrope 600 16px/16px, active #111111, inactive #000 @ 40%.
 */

const FRAME_SHADOW =
  "0px 0.6021873017743928px 0.5419685715969536px -1.25px rgba(0, 0, 0, 0.17997), " +
  "0px 2.288533303243457px 2.0596799729191115px -2.5px rgba(0, 0, 0, 0.15889), " +
  "0px 10px 9px -3.75px rgba(0, 0, 0, 0.0625)";

const CHIP_SHADOW =
  "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.21597), " +
  "0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.19067), " +
  "0px 10px 10px -3.75px rgba(0, 0, 0, 0.075)";

export default function WorkflowDemo() {
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const tablistRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const baseId = useId();
  const panelId = `${baseId}-panel`;

  // Roving tabindex only reaches the active tab, so the ARIA tabs pattern needs
  // arrow keys to move between them. Without this the control is keyboard-dead.
  const onTablistKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const delta =
      event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    let next = active;
    if (delta !== 0) next = (active + delta + TABS.length) % TABS.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = TABS.length - 1;
    else return;

    event.preventDefault();
    setActive(next);
    tablistRef.current
      ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
      [next]?.focus();
  };

  // React does not always serialise `muted` into the SSR markup, which makes
  // Safari/Chrome refuse the autoplay. Force it on the element itself.
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
    const play = el.play();
    if (play) play.catch(() => {});
  }, []);

  return (
    <header
      id="workflow"
      aria-label="Camp workflow demo"
      className="relative hidden w-full scroll-mt-[100px] flex-none flex-col items-center justify-center gap-[20px] md:flex md:h-[60vh] lg:h-[80vh]"
    >
      <div className="relative flex flex-none flex-col items-center justify-center gap-[40px] md:h-[541px] md:w-[737px] lg:h-[650px] lg:w-[905px]">
        {/* Video area — grows to fill the slide (566px desktop / 457px tablet). */}
        <div
          id={panelId}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${active}`}
          className="relative w-full min-h-0 flex-[1_0_0px]"
        >
          {/* "Dock" — the laptop base that sits under the frame. */}
          <img
            src="/assets/qkkyLGTC8ZID70ULdmJ7NwpITvw.png"
            alt=""
            aria-hidden="true"
            width={1236}
            height={86}
            className="pointer-events-none absolute bottom-[-29px] left-0 h-[41px] w-full object-cover"
          />

          <div className="absolute top-0 right-[13px] h-full w-[97%]">
            <div
              className="relative flex h-full w-full flex-row items-center justify-center gap-[10px] overflow-hidden rounded-[12px]"
              style={{ boxShadow: FRAME_SHADOW }}
            >
              <video
                ref={videoRef}
                src="/assets/BBHbkOYe2YfIit1lm4pVXAJyao.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="Screen recording of Camp capturing, annotating and searching screenshots on macOS"
                className="block h-full w-full rounded-[8px] bg-[rgba(41,41,41,0.2)] object-cover"
                style={{ objectPosition: "50% 50%" }}
              />
            </div>
          </div>
        </div>

        {/* Segmented control */}
        <div className="relative h-[44px] w-[500px] flex-none rounded-[12px] bg-[#f3f3f3]">
          {/* Sliding white chip layer */}
          <div className="pointer-events-none absolute inset-0 z-[1] flex flex-row items-center justify-start rounded-[12px] p-[4px]">
            {TABS.map((tab, i) => (
              <div key={tab} className="relative h-full w-px flex-[1_0_0px]">
                {i === active ? (
                  <motion.div
                    layoutId={`${baseId}-chip`}
                    className="absolute inset-0 rounded-[10px] bg-white"
                    style={{ boxShadow: CHIP_SHADOW }}
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: "spring", duration: 0.35, bounce: 0.14 }
                    }
                  />
                ) : null}
              </div>
            ))}
          </div>

          {/* Labels */}
          <div
            ref={tablistRef}
            role="tablist"
            aria-label="Camp workflow"
            onKeyDown={onTablistKeyDown}
            className="absolute inset-0 z-[1] flex flex-row items-center justify-start rounded-[12px] p-[4px]"
          >
            {TABS.map((tab, i) => (
              <button
                key={tab}
                type="button"
                id={`${baseId}-tab-${i}`}
                role="tab"
                aria-selected={i === active}
                aria-controls={panelId}
                tabIndex={i === active ? 0 : -1}
                onClick={() => setActive(i)}
                className="group pressable relative flex w-px flex-[1_0_0px] cursor-pointer flex-col items-center justify-center gap-[10px] rounded-[15px] p-[10px]"
              >
                <span
                  className={
                    "font-manrope block whitespace-pre font-semibold text-[16px] leading-[16px] transition-[opacity,color] duration-200 ease-(--ease-out-strong) " +
                    (i === active
                      ? "text-[#111111] opacity-100"
                      : "text-black opacity-40 hoverable:group-hover:opacity-70")
                  }
                >
                  {tab}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
