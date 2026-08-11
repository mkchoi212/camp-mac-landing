"use client";

import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

/**
 * "Capture Everything. / Let Camp handle the rest." band.
 *
 * Framer drives this with the *page* scroll progress (useScroll with no target):
 *   scale:      1 -> 0.5     over scrollYProgress 0 -> 1
 *   translateY: 0 -> -200px  over scrollYProgress 0 -> 1
 * applied as `perspective(1200px) translateY(y) scale(s)` (translate outside the scale).
 *
 * Verified against the reference captures:
 *   desktop scrollY 950  -> p = 950/3637  = 0.261204 -> scale 0.869398, y -52.2408
 *   mobile  scrollY 844  -> p = 844/3123  = 0.270253 -> scale 0.864874, y -54.0506
 *   mobile  scrollY 0    -> p = 0                    -> scale 1,        y 0
 */
const TEXT_GRADIENT =
  "linear-gradient(329deg, rgb(255, 115, 3) 0%, rgb(255, 161, 84) 39.7872%, rgb(255, 56, 20) 100%)";

const LINE = "text-[35px] leading-[42px] md:text-[54px] md:leading-[64.8px]";

export default function Headline() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  // Composed by hand rather than via the `y`/`scale` shorthands: those are written
  // per-frame from rAF on the main thread, so they drop frames while the page is
  // still decoding images. The string keeps Framer's order (translate outside scale).
  const transform = useMotionTemplate`perspective(1200px) translateY(${y}px) scale(${scale})`;

  return (
    <header className="relative flex h-[300px] w-full flex-none flex-col items-center justify-center gap-5 overflow-hidden bg-white p-5 md:p-0 lg:h-[400px]">
      <motion.div
        className="relative flex max-w-full flex-none flex-col justify-start break-words whitespace-pre-wrap"
        style={reduceMotion ? undefined : { transform, willChange: "transform" }}
      >
        {/* Framer's h1 is 32px on phone, 50px from tablet up. */}
        <h1 className="text-center text-[32px] leading-[1.2em] font-bold tracking-[-2.6px] text-[#333333] md:text-[50px]">
          <span
            className="inline-block"
            style={{
              backgroundImage: TEXT_GRADIENT,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <span className={LINE}>Capture Everything.</span>
            <span className={LINE}>
              <br />
            </span>
            <span className={LINE}>Let Camp handle the rest.</span>
          </span>
        </h1>
      </motion.div>
    </header>
  );
}
