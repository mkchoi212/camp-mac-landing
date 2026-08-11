const SPARKLE_PATH =
  "M 1.308 22.977 C 3.017 27.089 6.525 36.496 6.886 41.224 M 45.721 1.306 C 41.821 12.811 33.278 37.326 30.312 43.348 M 54.884 54.394 C 61.979 46.548 77.567 30.156 83.161 27.353 M 67.122 73.344 C 72.898 71.791 86.846 68.391 96.434 67.218 M 65.967 92.381 C 68.818 92.753 75.786 94.478 80.85 98.404";

const CHECK_PATH =
  "M 3 26.698 C 6.572 30.568 8.093 35.552 10.655 40.058 C 11.778 42.033 12.615 44.083 13.532 46.153 C 13.99 47.186 14.231 48.759 15.239 47.421 C 20.614 40.289 25.929 33.011 31.135 25.747 C 36.598 18.125 41.555 10.036 47.763 3";

const SMILEY_FACE_PATH =
  "M 23.994 38.631 C 23.994 39.22 23.825 40.226 24.693 40.226 C 25.281 40.226 26.155 39.441 26.189 38.83 C 26.225 38.188 26.095 37.434 25.291 37.434 C 24.857 37.434 23.787 37.25 23.595 37.634 M 44.149 36.836 C 44.149 38.126 43.981 39.024 45.635 38.586 C 46.824 38.272 48.34 37.312 48.34 35.938 C 48.34 34.333 46.987 34.442 45.745 34.442 C 44.547 34.442 44.947 35.919 44.947 36.836 M 14.216 50.199 C 17.776 53.433 21.018 56.837 25.613 58.643 C 28.632 59.829 32.04 59.573 35.213 59.573 C 38.908 59.573 41.995 58.506 45.169 56.626 C 50.987 53.179 57.204 48.249 60.557 42.243 C 61.989 39.677 62.351 37.219 62.907 34.442";

const SMILEY_RING_PATH =
  "M 27.279 21.404 C 20.608 21.404 16.476 22.666 11.501 27.609 C 5.78 33.294 2.773 40.258 1.871 48.127 C 1.011 55.639 1.187 62.44 6.528 68.191 C 14.976 77.287 29.421 79.301 41.204 78.2 C 51.504 77.239 62.029 70.881 66.928 61.51 C 72.508 50.839 72.883 36.218 68.691 25.073 C 66.378 18.921 62.323 13.653 57.389 9.357 C 51.985 4.652 45.355 2.983 38.378 2.11 C 28.868 0.919 18.705 1.261 10.19 5.914";

const HOT_KEYS = ["⌘", "⌥", "V"];

/**
 * Framer stacks the six feature cards in two masonry-like columns. On tablet and
 * desktop that is expressed as a four-row grid (408 / 194 / 194 / 194 with a 20px
 * gap) where the tall cards span two of the short rows; on phones it collapses to
 * a single column of fixed-height cards.
 *
 * Note: globals.css resets `font-size`/`font-weight` to `inherit` on h1–h4 and p,
 * so every type scale lives on a wrapper element and the heading inherits it —
 * the same shape Framer's own markup uses.
 */
export default function Bento() {
  return (
    <section
      id="features"
      className="relative grid w-full grid-cols-1 gap-[10px] p-[10px] md:grid-cols-2 md:grid-rows-[408px_194px_194px_194px] md:gap-5 md:overflow-hidden md:rounded-t-[100px] md:p-10 lg:mx-auto lg:max-w-[1368px] lg:p-[100px]"
    >
      {/* ── Context. Saved. ─────────────────────────────────────────────── */}
      <article className="relative flex h-[290px] flex-col items-start gap-[10px] overflow-hidden rounded-[10px] p-[15px] shadow-[0_1px_28px_0_rgba(0,0,0,0.15)] md:col-start-1 md:row-start-1 md:h-auto md:gap-[18px] md:rounded-[20px] md:p-[30px] lg:gap-3 lg:p-10">
        {/* Framer serves the 1024px variant of the wallpaper below the desktop
            breakpoint and the full-size original at lg. */}
        <img
          src="/assets/9T1smHtgYGN9bo2O5g9DePmHOk-1024.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover lg:hidden"
        />
        <img
          src="/assets/9T1smHtgYGN9bo2O5g9DePmHOk.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 hidden h-full w-full object-cover lg:block"
        />
        <div className="relative text-[24px] leading-[28.8px] font-bold text-white lg:text-[34px] lg:leading-[40.8px]">
          <h2>Context. Saved.</h2>
        </div>
        <div className="relative text-[16px] leading-[19.2px] font-semibold text-white md:text-[18px] md:leading-[21.6px] lg:text-[22px] lg:leading-[26.4px]">
          <p>
            Camp automatically titles and
            <br className="hidden md:inline lg:hidden" /> tags your
            <br className="md:hidden lg:inline" /> screenshots
          </p>
        </div>
        <img
          src="/assets/TATIsWNRrhgDqUgpVD5QaCPHQDg.png"
          alt="A capture tagged with its source, Safari, a red Design label, and an AI-written title: Logo from a book by YASABURO KUWAYAMA"
          className="relative h-[180px] w-full shrink-0 object-contain md:h-[150px] lg:h-[220px]"
        />
      </article>

      {/* ── Intuitive Controls ──────────────────────────────────────────── */}
      <article className="bg-card relative flex h-[290px] flex-col items-center justify-center gap-5 overflow-hidden rounded-[20px] p-[14px] md:col-start-2 md:row-start-1 md:h-auto md:p-0 lg:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[188px] left-[379px] z-[1] h-[87px] w-[100px] rotate-[10deg] overflow-hidden"
        >
          <svg
            viewBox="0 0 98 100"
            className="absolute top-[-13.08px] left-[2px] h-[100px] w-[98px]"
          >
            <path
              d={SPARKLE_PATH}
              fill="transparent"
              stroke="rgb(71, 163, 255)"
              strokeWidth="2.44"
              strokeLinecap="round"
              strokeMiterlimit="10"
            />
          </svg>
        </div>

        <div className="relative flex w-full flex-col items-start gap-[10px] md:gap-[14px] md:p-[30px] lg:h-[154px] lg:gap-5 lg:p-0">
          <div className="text-[24px] leading-[28.8px] font-bold text-black lg:text-[34px] lg:leading-[40.8px]">
            <h2>Intuitive Controls</h2>
          </div>
          <div className="text-body text-[14px] leading-[16.8px] font-semibold md:text-[16px] md:leading-[19.2px] lg:text-[22px] lg:leading-[26.4px]">
            <p>
              Keyboard optimized controls
              <br className="md:hidden lg:inline" /> to supercharge your workflow
            </p>
          </div>
        </div>

        <img
          src="/assets/qOaXfBoqI9XYvzCjIPA5p8edCmU.png"
          alt="Camp's three capture modes — region, window and menu bar — labelled with the shortcuts Command 1, Command 2 and Command 3"
          className="relative h-[115px] w-[236px] shrink-0 object-contain md:h-[247px] md:w-full lg:h-[154px] lg:w-[380px]"
        />
      </article>

      {/* ── Privacy built in ────────────────────────────────────────────── */}
      <article className="bg-card relative flex h-[140px] flex-row items-center overflow-hidden rounded-[20px] p-[14px] md:col-start-1 md:row-start-2 md:h-auto md:gap-1 md:p-3 lg:gap-0 lg:p-5">
        <img
          src="/assets/PtzSdnCN1jyNI3mCBK6PXTZ5k.png"
          alt=""
          aria-hidden="true"
          className="h-[80px] w-[80px] shrink-0 object-cover md:h-[90px] md:w-[90px] lg:h-[140px] lg:w-[140px]"
        />
        <div className="flex flex-1 flex-col items-start justify-center gap-[10px] self-stretch px-2 md:px-0 lg:gap-[14px] lg:pt-[10px] lg:pr-[10px] lg:pb-[10px] lg:pl-5">
          <div className="text-[22px] leading-[26.4px] font-bold text-black md:text-[24px] md:leading-[28.8px] lg:text-[30px] lg:leading-[36px]">
            <h2>Privacy built in</h2>
          </div>
          <div className="text-body text-[15px] leading-[18px] font-semibold md:text-[16px] md:leading-[19.2px] lg:text-[20px] lg:leading-[24px]">
            <p>
              All your data is kept locally.
              <br className="md:hidden lg:inline" /> Period.
            </p>
          </div>
        </div>
      </article>

      {/* ── Pin your favorites ──────────────────────────────────────────── */}
      {/* The card only needs to grow once the artwork does, which is above
          444px (41vw > 182px). Below that it keeps Framer's fixed 290px, so the
          390px reference render stays exact. */}
      <article className="bg-blue relative flex h-[290px] flex-col items-start justify-center gap-3 overflow-hidden rounded-[20px] p-5 min-[445px]:h-auto min-[445px]:min-h-[290px] md:col-start-2 md:row-span-2 md:row-start-2 md:h-auto md:min-h-0 md:gap-[18px] md:p-[30px] lg:gap-[14px] lg:p-10">
        <div className="text-[21px] leading-[25.2px] font-bold text-white md:text-[26px] md:leading-[31.2px] lg:text-[34px] lg:leading-[40.8px]">
          <h2>Pin your favorites</h2>
        </div>
        <div className="text-[16px] leading-[19.2px] font-semibold text-white md:text-[18px] md:leading-[21.6px] lg:text-[24px] lg:leading-[28.8px]">
          <p>Every. Second. Counts</p>
        </div>
        <div className="flex w-full flex-1 flex-col items-center justify-center gap-[10px]">
          <img
            src="/assets/3Q7u475opLaQ2oHjNIz3fRQoug.png"
            alt="A pinned capture floating above the desktop, annotated by hand with expand & edit and copy"
            /* Framer pins this to 182px tall, which is right at 390px wide but
               leaves the artwork stranded in a sea of blue as the phone layout
               stretches toward 810px. Grow it with the viewport instead; the
               clamp floor keeps 390px byte-identical to the original. */
            className="h-[clamp(182px,41vw,320px)] w-full object-contain md:h-[150px] lg:hidden"
          />
          <img
            src="/assets/K0mRuHwTE1vxL0lSxIsW06LeHQ.png"
            alt="A pinned capture floating above the desktop, annotated by hand with expand & edit and copy"
            className="hidden h-[196px] w-full object-contain lg:block"
          />
        </div>
      </article>

      {/* ── Instant Search ──────────────────────────────────────────────── */}
      <article className="bg-card relative flex h-[290px] flex-col items-start justify-center gap-3 overflow-hidden rounded-[20px] pt-5 md:col-start-1 md:row-span-2 md:row-start-3 md:h-auto md:justify-start md:pt-[30px] md:pb-[10px] lg:justify-center lg:pt-10 lg:pb-0">
        <svg
          viewBox="0 0 51 51"
          aria-hidden="true"
          className="pointer-events-none absolute top-6 left-[159px] h-[51px] w-[51px] md:left-[205px] lg:top-[23.5px] lg:left-[261px]"
        >
          <path
            d={CHECK_PATH}
            fill="transparent"
            stroke="rgb(255, 147, 23)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeMiterlimit="10"
          />
        </svg>

        <div className="relative flex w-full flex-col items-start justify-center gap-[10px] pl-5 md:pl-[30px] lg:pl-10">
          <div className="text-[22px] leading-[26.4px] font-bold text-black md:text-[24px] md:leading-[28.8px] lg:text-[34px] lg:leading-[40.8px]">
            <h2>Instant Search</h2>
          </div>
          <div className="text-body text-[17px] leading-[20.4px] font-semibold md:text-[18px] md:leading-[21.6px] lg:text-[22px] lg:leading-[26.4px]">
            <p>Fast, accurate, and easy</p>
          </div>
        </div>

        <div className="relative w-full flex-1 overflow-hidden">
          {/* Phones get Framer's 2048px variant; tablet and desktop the original. */}
          <img
            src="/assets/H955DaFPqOwUsc0M81SBoC3eQ8-2048.png"
            alt="Camp's search window listing recent captures from Safari, Maps and Figma, filtered by tag"
            className="absolute top-[-2px] left-[-100px] h-[211px] w-[942px] max-w-none object-contain md:hidden"
          />
          <img
            src="/assets/H955DaFPqOwUsc0M81SBoC3eQ8.png"
            alt="Camp's search window listing recent captures from Safari, Maps and Figma, filtered by tag"
            className="absolute hidden max-w-none object-contain md:top-[1px] md:left-[-80px] md:block md:h-[310px] md:w-[1028px] lg:top-[10px] lg:left-[-90px] lg:h-[270px] lg:w-[1150px]"
          />
        </div>
      </article>

      {/* ── Hot Key Support ─────────────────────────────────────────────── */}
      <article className="bg-card relative flex h-[140px] flex-col items-center justify-evenly overflow-hidden rounded-[20px] md:col-start-2 md:row-start-4 md:h-auto">
        <div className="relative flex flex-col items-start justify-center gap-5 text-[20px] leading-[24px] font-bold text-black md:text-[22px] md:leading-[26.4px] lg:text-[32px] lg:leading-[38.4px]">
          <h2>Hot Key Support</h2>
        </div>

        <svg
          viewBox="0 0 73 80"
          aria-hidden="true"
          className="pointer-events-none absolute top-[30px] left-[412px] h-[80px] w-[73px]"
        >
          <path
            d={SMILEY_FACE_PATH}
            fill="transparent"
            stroke="rgb(89, 89, 89)"
            strokeWidth="2.88"
            strokeLinecap="round"
            strokeMiterlimit="10"
          />
          <path
            d={SMILEY_RING_PATH}
            fill="transparent"
            stroke="rgb(255, 229, 61)"
            strokeWidth="2.88"
            strokeLinecap="round"
            strokeMiterlimit="10"
          />
        </svg>

        <div className="relative flex flex-row items-center justify-center gap-[10px]">
          {HOT_KEYS.map((key) => (
            <div
              key={key}
              className="flex h-[50px] w-[50px] items-center justify-center rounded-[10px] bg-white text-center text-[32px] leading-[38.4px] font-bold text-black shadow-[0_1px_20px_-2px_rgba(0,0,0,0.08)] md:h-[60px] md:w-[60px] md:rounded-[12px] lg:h-[80px] lg:w-[80px] lg:rounded-[20px] lg:text-[42px] lg:leading-[50.4px]"
            >
              <span>{key}</span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
