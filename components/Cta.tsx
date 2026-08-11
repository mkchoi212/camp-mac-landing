import Image from "next/image";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/camp-a-scrapbook/id1658539800";

/**
 * Doodle cluster that overlaps the headline (tablet + desktop artwork, 141×149).
 * Re-authored from the original inline SVG: blue asterisk, lime speck,
 * yellow speck, pink four-point star, red four-point star.
 */
function SparklesLarge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 141 149"
      width={141}
      height={149}
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <g
        fill="transparent"
        strokeWidth={5}
        strokeLinecap="round"
        strokeMiterlimit={10}
      >
        <path
          d="M 26.981 61.83 L 26.981 74.677 M 44.538 50.696 L 53.103 50.696 M 26.124 33.995 C 27.044 33.88 26.553 28.914 26.553 28 M 3 49.412 L 15.847 49.412 M 18.416 39.562 C 17.65 39.562 15.799 37.754 15.419 36.992 M 39.828 39.562 C 42.301 39.562 42.631 37.946 44.538 36.992 M 39.828 59.69 C 39.954 60.701 43.944 63.889 44.966 64.4 M 15.418 61.402 C 12.318 61.402 11.383 64.062 8.995 65.256"
          stroke="rgb(3, 141, 255)"
        />
        <path
          d="M 56.298 4.906 C 54.463 4.677 54.879 3.61 53.014 4.853 C 52.862 4.955 53.95 4.924 54.179 4.694 C 55.049 3.826 53.976 3.269 53.439 3"
          stroke="rgb(186, 255, 66)"
        />
        <path
          d="M 137.883 116.201 C 136.573 114.891 132.496 111.729 130.469 113.553 C 128.841 115.019 131.876 117.73 133.117 115.247"
          stroke="rgb(244, 255, 92)"
        />
        <g transform="translate(62 86)" stroke="rgb(255, 94, 223)">
          <path d="M 0.764 29.002 C 1.394 29.002 2.048 29.054 2.674 28.988 C 3.821 28.867 4.544 27.587 5.404 26.965 C 7.914 25.148 9.082 22.544 10.568 19.961 C 12.561 16.5 12.733 12.759 12.733 8.884 L 12.733 4.809 C 12.733 3.699 12.223 2.694 12.223 1.626 C 12.223 0.888 11.969 -1.052 11.969 0.735 L 11.969 11.925 C 11.969 13.81 12.667 15.622 12.733 17.486 C 12.832 20.247 14.349 23.742 16.298 25.691 C 17.118 26.512 17.616 27.518 18.463 28.365 C 19.27 29.172 20.239 29.769 21.25 30.218 C 23.249 31.107 25.843 30.784 28.012 30.784" />
          <path d="M -0 29.766 C 1.07 29.766 1.87 29.702 2.801 30.218 C 3.61 30.668 4.294 31.85 4.838 32.624 C 7.088 35.82 8.835 38.744 9.691 42.598 C 10.598 46.679 10.951 50.832 10.951 55.033 L 10.951 59.815 C 10.951 61.108 11.087 59.616 11.191 59.15 C 11.637 57.141 11.491 55.033 12.111 52.996 C 12.814 50.683 13.211 48.098 14.261 45.922 C 15.775 42.785 16.601 39.458 18.59 36.585 C 19.977 34.581 21.049 33.11 23.556 32.553 C 24.459 32.352 25.405 31.803 26.343 31.803 L 28.267 31.803" />
        </g>
        <g transform="translate(108 24)" stroke="rgb(255, 61, 3)">
          <path d="M -0 24.352 C 3.968 24.352 6.133 30.109 6.947 33.364 C 7.593 35.948 7.328 38.709 7.784 41.333 C 7.913 42.073 8.023 43.028 8.023 43.768 C 8.023 44.162 8.219 45.458 8.219 44.409 C 8.219 41.672 8.843 39.106 9.871 36.582 C 10.92 34.008 12.557 31.781 14.089 29.483 C 15.899 26.768 18.466 26.309 21.525 26.309" />
          <path
            d="M 1.565 23.569 C 3.131 23.569 5.004 24.044 6.164 22.884 C 7.001 22.047 7.394 20.771 7.827 19.699 C 8.557 17.893 9.211 16.274 9.686 14.372 C 10.141 12.553 10.204 10.638 10.469 8.784 C 10.689 7.24 10.958 5.712 10.958 4.153 L 11 0 C 11 1.324 11.355 6.021 11.545 7.327 C 12.222 11.985 12.735 17.723 15.361 21.807 C 15.945 22.717 20.232 25.858 21.5 26"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}

/** Phone variant of the same doodle cluster (96×134, thinner strokes). */
function SparklesSmall({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 96 134"
      width={96}
      height={134}
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <g
        fill="transparent"
        strokeWidth={3.37}
        strokeLinecap="round"
        strokeMiterlimit={10}
      >
        <path
          d="M 18.679 39.643 L 18.679 48.243 M 30.508 32.189 L 36.279 32.189 M 18.101 21.008 C 18.721 20.931 18.39 17.607 18.39 16.995 M 2.521 31.33 L 11.177 31.33 M 12.908 24.735 C 12.392 24.735 11.145 23.525 10.889 23.015 M 27.334 24.735 C 29.001 24.735 29.223 23.653 30.508 23.015 M 27.334 38.21 C 27.419 38.887 30.108 41.021 30.796 41.363 M 10.888 39.356 C 8.799 39.356 8.169 41.137 6.56 41.936"
          stroke="rgb(3, 141, 255)"
        />
        <path
          d="M 38.452 3.733 C 37.204 3.578 37.487 2.858 36.219 3.697 C 36.115 3.766 36.855 3.745 37.011 3.59 C 37.603 3.004 36.873 2.628 36.508 2.446"
          stroke="rgb(186, 255, 66)"
        />
        <path
          d="M 93.4 78.23 C 92.517 77.353 89.77 75.236 88.405 76.457 C 87.308 77.438 89.353 79.253 90.189 77.591"
          stroke="rgb(244, 255, 92)"
        />
        <g transform="translate(42.273 55.824)" stroke="rgb(255, 94, 223)">
          <path d="M 0.515 19.416 C 0.939 19.416 1.38 19.451 1.802 19.406 C 2.574 19.325 3.062 18.469 3.641 18.052 C 5.332 16.836 6.119 15.092 7.12 13.363 C 8.463 11.046 8.579 8.542 8.579 5.948 L 8.579 3.22 C 8.579 2.476 8.235 1.804 8.235 1.089 C 8.235 0.595 8.064 -0.704 8.064 0.492 L 8.064 7.983 C 8.064 9.245 8.535 10.458 8.579 11.706 C 8.646 13.555 9.668 15.894 10.981 17.199 C 11.533 17.749 11.869 18.422 12.44 18.989 C 12.983 19.53 13.636 19.929 14.317 20.23 C 15.664 20.825 17.412 20.609 18.873 20.609" />
          <path d="M 0 19.927 C 0.721 19.927 1.26 19.884 1.887 20.23 C 2.432 20.531 2.893 21.322 3.26 21.841 C 4.776 23.98 5.953 25.938 6.529 28.518 C 7.14 31.25 7.378 34.03 7.378 36.843 L 7.378 40.044 C 7.378 40.91 7.47 39.911 7.54 39.599 C 7.841 38.254 7.742 36.843 8.16 35.479 C 8.634 33.93 8.901 32.2 9.608 30.743 C 10.629 28.643 11.185 26.416 12.525 24.492 C 13.46 23.151 14.182 22.166 15.871 21.793 C 16.479 21.659 17.117 21.291 17.749 21.291 L 19.045 21.291" />
        </g>
        <g transform="translate(73.266 14.317)" stroke="rgb(255, 61, 3)">
          <path d="M 0 16.303 C 2.673 16.303 4.132 20.157 4.681 22.336 C 5.116 24.066 4.937 25.914 5.245 27.671 C 5.331 28.166 5.406 28.806 5.406 29.301 C 5.406 29.565 5.538 30.432 5.538 29.73 C 5.538 27.898 5.958 26.18 6.651 24.49 C 7.357 22.767 8.46 21.276 9.493 19.738 C 10.712 17.92 12.442 17.613 14.503 17.613" />
          <path
            d="M 1.054 15.779 C 2.11 15.779 3.371 16.097 4.153 15.32 C 4.717 14.76 4.982 13.905 5.274 13.188 C 5.765 11.979 6.206 10.895 6.526 9.622 C 6.833 8.404 6.875 7.122 7.054 5.881 C 7.202 4.847 7.383 3.824 7.383 2.78 L 7.411 0 C 7.411 0.886 7.651 4.031 7.779 4.905 C 8.235 8.024 8.58 11.865 10.35 14.599 C 10.743 15.208 13.631 17.311 14.486 17.406"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}

const chipClass =
  "flex flex-col items-center justify-center gap-[2px] rounded-[10px] bg-[#f0f0f0] px-[10px] py-[8px] transition-colors duration-150 ease-(--ease-out-strong) group-hover:bg-[#e8e8e8] md:px-[18px] md:py-[12px]";

const chipLabelClass =
  "text-center font-sans text-[12px] leading-[14.4px] font-bold text-black md:text-[16px] md:leading-[19.2px]";

export default function Cta() {
  return (
    <section className="mx-auto flex w-full max-w-[1300px] flex-col items-center justify-between overflow-hidden bg-white px-5 py-[60px] md:px-[60px] md:pt-[40px] md:pb-[80px] lg:flex-row lg:items-center lg:px-[60px] lg:py-[100px]">
      {/* Headline + overlapping doodles */}
      <div className="relative h-[120px] w-full shrink-0 overflow-hidden md:h-[149px] md:w-[519px]">
        {/* On md/lg Framer clips the headline to a 474×48 box pinned at
            left:0 / top:50px; on phone the text block is simply centred. */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-[50px] md:left-0 md:h-[48px] md:w-[474px] md:translate-x-0 md:translate-y-0 md:overflow-hidden">
          <h2 className="md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            {/* Typography lives on the span: globals.css resets h2 font-size/weight. */}
            <span className="block font-sans text-[24px] leading-[28.8px] font-bold tracking-[-2.1px] whitespace-pre text-ink md:text-[40px] md:leading-[48px]">
              {"Capture what inspires   "}
              <em
                className="text-[#ff9902] italic"
                style={{ fontSynthesis: "style" }}
              >
                you
              </em>
            </span>
          </h2>
        </div>
        <SparklesSmall className="absolute top-[3.8px] right-[7px] md:hidden" />
        <SparklesLarge className="absolute top-0 right-[5px] hidden md:block" />
      </div>

      {/* Download buttons */}
      <div className="flex w-[364px] shrink-0 flex-row items-center justify-center md:w-[404px] md:gap-[40px]">
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group pressable flex h-[133px] w-[182px] flex-col items-center justify-center gap-[10px] md:h-[118px] md:flex-row"
        >
          <span className="relative z-[1] block h-[55px] w-[55px] md:h-[70px] md:w-[70px]">
            <Image
              src="/assets/JKnEjUsxhRtHyajVd92cDf4se6s.png"
              alt="Camp app icon"
              width={70}
              height={70}
              className="h-full w-full object-contain"
            />
          </span>
          <span className={chipClass}>
            <span className={chipLabelClass}>iOS</span>
          </span>
        </a>

        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group pressable flex h-[133px] w-[182px] flex-col items-center justify-center gap-[10px] md:h-[118px] md:flex-row"
        >
          <span
            className="block h-[70px] w-[70px] md:h-[80px] md:w-[80px]"
            style={{ filter: "drop-shadow(rgba(0, 0, 0, 0.32) 0px 1px 4px)" }}
          >
            <Image
              src="/assets/16lpN6Dh0VjRfrag5bqth3Ko.png"
              alt="Camp for macOS app icon"
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          </span>
          <span className={chipClass}>
            <span className={chipLabelClass}>macOS</span>
          </span>
        </a>
      </div>
    </section>
  );
}
