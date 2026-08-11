import Image from "next/image";

type Review = {
  name: string;
  quote: string;
  avatar: string;
  /* Framer authors a slightly different avatar/quote gap per card. */
  gap: string;
  /* On tablet the third card wraps onto its own line and is 12px narrower. */
  width: string;
};

const REVIEWS: Review[] = [
  {
    name: "Olina Chau",
    quote:
      "This app saves me so much time it's incredible. Plus, Camp has been making me want to take more screenshots than ever. My library is filled with things I have been collecting from various corners of the Internet.",
    avatar: "/assets/WuFtLgqmz4VCo9Agaj38U9l95Xo-1024.jpg",
    gap: "gap-[30px]",
    width: "md:w-[320px]",
  },
  {
    name: "Faraz Khan",
    quote:
      "Been playing around with Camp for a bit now and I have to say, screen capturing tools have been needing a refresher for a long time.. and this team did it perfectly.",
    avatar: "/assets/8jgmq5gSu4aoRE1fCepkDE352Cc.jpg",
    gap: "gap-[20px]",
    width: "md:w-[320px]",
  },
  {
    name: "Mike Wadhera",
    quote:
      "Game-changer for managing screenshots and boosting productivity. It's super easy to organize and find the visual info you need, making it a breeze to capture inspiration and get results. Definitely a must-have tool in your arsenal!",
    avatar: "/assets/eNyqQt3QiKstaVqM8WLn2jI8.png",
    gap: "gap-[14px] md:gap-[20px]",
    width: "md:w-[308px] lg:w-[320px]",
  },
];

const CARD_SHADOW =
  "shadow-[0_0.796192px_2.38858px_-0.625px_rgba(0,0,0,0.05),0_2.41451px_7.24352px_-1.25px_rgba(0,0,0,0.05),0_6.38265px_19.148px_-1.875px_rgba(0,0,0,0.05),0_20px_60px_-2.5px_rgba(0,0,0,0.05)]";

/**
 * Hand-drawn "100 + pencil + heart" doodle.
 * Three overlapping strokes, absolutely positioned inside a 300x127 (305x127 from
 * tablet up) box. Paint order is heart -> pencil -> "100".
 */
function Doodle() {
  return (
    <div
      aria-hidden="true"
      className="relative h-[127px] w-[300px] shrink-0 overflow-hidden md:w-[305px]"
    >
      {/*
        Pink heart. Framer emits a genuinely different path for the phone
        variant: it is the same drawing at 0.884 scale but nudged down inside a
        36x63 viewBox, so the bottom of the tail is clipped away. Scaling the
        desktop art down would show that tail, so both variants are inlined.
      */}
      <svg
        viewBox="0 0 36 63"
        className="absolute top-[38px] left-[185px] h-[63px] w-[36px] md:hidden"
      >
        <path
          d="M 24.141 63.229 C 22.5 63.229 22.215 62.066 21.051 61.081 C 17.47 58.051 14.418 53.86 11.948 49.904 C 8.567 44.491 5.375 38.525 3.941 32.282 C 3.359 29.744 3.375 25.638 3.841 23.089 C 4.522 19.366 6.944 23.459 7.993 24.28 C 12.17 27.545 14.989 34.775 16.4 39.687 C 16.926 41.523 18.161 42.768 18.161 39.886 C 18.161 34.897 19.319 31.326 21.616 26.925 C 22.83 24.597 29.818 11.461 32.979 17.402 C 34.742 20.718 34.307 24.486 34.307 28.413 C 34.307 36.676 30.773 44.439 28.295 52.252 C 26.752 57.113 25.131 62.192 22.945 66.801 C 22.34 68.075 21.531 72.86 20.553 73.347"
          fill="transparent"
          stroke="rgb(255, 148, 250)"
          strokeWidth="4.41"
          strokeLinecap="round"
          strokeMiterlimit="10"
        />
      </svg>
      <svg
        viewBox="0 0 41 71"
        className="absolute top-[37px] left-[191px] hidden h-[71px] w-[41px] md:block"
      >
        <path
          d="M 26.415 56.557 C 24.554 56.557 24.231 55.241 22.91 54.127 C 18.848 50.7 15.387 45.961 12.585 41.487 C 8.75 35.365 5.13 28.618 3.503 21.557 C 2.843 18.687 2.862 14.043 3.39 11.16 C 4.162 6.95 6.91 11.579 8.1 12.507 C 12.837 16.2 16.035 24.376 17.635 29.932 C 18.232 32.008 19.632 33.416 19.632 30.157 C 19.632 24.515 20.946 20.476 23.551 15.498 C 24.928 12.866 32.854 -1.991 36.439 4.728 C 38.439 8.479 37.946 12.74 37.946 17.181 C 37.946 26.526 33.937 35.306 31.126 44.142 C 29.376 49.64 27.538 55.384 25.058 60.596 C 24.372 62.037 23.455 67.449 22.345 68"
          fill="transparent"
          stroke="rgb(255, 148, 250)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeMiterlimit="10"
        />
      </svg>

      {/* orange pencil + black scribbles */}
      <svg
        viewBox="0 0 121 77"
        className="absolute top-[38px] left-[83px] h-[68px] w-[107px] md:top-[30.5px] md:left-[78.5px] md:h-[77px] md:w-[121px]"
      >
        <path
          d="M 116.242 9.284 C 117.456 10.618 117.76 11.814 117.788 13.476 C 117.884 19.126 112.48 23.786 109.19 27.525 C 104.717 32.608 101.723 38.841 97.262 43.911 C 92.22 49.639 87.454 55.621 82.402 61.361 C 80.548 63.468 78.439 65.298 76.59 67.399 C 75.81 68.285 74.397 69.734 73.113 69.902 C 68.86 70.46 65.149 73.042 60.84 73.652 C 59.074 73.902 54.561 75.059 53.92 72.484 C 53.575 71.102 54.074 69.534 53.748 68.148 C 53.6 67.518 53.67 65.46 53.863 64.901 C 54.537 62.957 54.232 60.488 54.731 58.377 C 55.291 56.007 56.682 54.798 57.973 52.837 C 60.073 49.647 62.314 46.505 64.51 43.3 C 66.422 40.51 68.264 37.777 70.504 35.232 C 72.99 32.406 74.901 29.102 77.378 26.288 C 81.508 21.596 85.977 17.415 90.428 13.032 C 92.722 10.775 95.506 9.089 97.61 6.698 C 99.62 4.414 101.568 2.582 105.178 3.511 C 107.305 4.058 109.028 4.778 111.104 5.525 C 112.774 6.126 114.409 8.089 115.769 9.287"
          fill="transparent"
          stroke="rgb(252, 161, 63)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeMiterlimit="10"
        />
        <path
          d="M 110.89 21.9 C 105.358 17.738 97.652 15.982 94.978 9.392 M 77.414 66.463 C 74.884 64.585 71.356 63.535 68.559 62.049 C 66.295 60.845 63.769 58.94 61.846 57.247 C 60.619 56.168 59.066 53.736 58.48 52.292 M 54.319 67.556 C 54.872 67.556 55.269 67.998 55.805 68.165 C 57.156 68.587 58.14 69.125 59.362 69.797 C 59.685 69.975 61.706 71.217 61.092 71.612 C 59.622 72.558 57.394 72.44 55.744 72.806 C 54.028 73.188 55.094 70.831 55.415 70.187"
          fill="transparent"
          stroke="rgb(0, 0, 0)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeMiterlimit="10"
        />
        <path
          d="M 3 69.03 C 5.545 67.421 8.02 65.205 10.866 64.159 C 13.555 63.171 16.709 62.713 19.553 63.189 C 23.013 63.771 25.245 65.881 27.466 68.425 C 28.263 69.338 29.112 70.192 29.969 71.049 C 30.66 71.741 31.405 72.721 32.317 73.142 C 33.08 73.494 33.89 72.606 34.464 72.227 C 36.435 70.921 38.511 69.881 40.829 69.36 C 43.407 68.782 45.921 68.685 48.164 70.296 C 49.499 71.255 50.799 72.332 52.228 73.149 C 53.113 73.655 54.89 72.711 55.686 72.179"
          fill="transparent"
          stroke="rgb(0, 0, 0)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeMiterlimit="10"
        />
      </svg>

      {/* red "100" */}
      <svg
        viewBox="0 0 76 56"
        className="absolute top-[22px] left-[74px] h-[49px] w-[67px] md:top-[13px] md:left-[63px] md:h-[56px] md:w-[76px]"
      >
        <path
          d="M 3.323 38.541 C 3.323 33.492 6.616 28.078 8.831 23.693 C 10.588 20.215 12.601 16.862 14.525 13.476 C 16.159 10.6 17.349 7.319 19.362 4.678 C 19.772 4.14 20.979 2.326 21.144 3.817 C 21.753 9.327 21.317 15.199 21.214 20.737 C 21.031 30.558 20.038 40.489 19.154 50.271 M 37.901 9.216 C 32.306 10.154 30.471 17.392 29.754 21.924 C 28.973 26.86 28.375 32.571 30.818 37.098 C 31.989 39.266 35.703 41.357 38.109 40.426 C 42.007 38.918 45.91 33.683 47.274 29.72 C 49.407 23.526 50.155 17.812 45.816 12.358 C 43.372 9.286 40.824 10.054 37.484 10.054 M 59.872 9.2 C 57.381 12.479 55.137 16.832 54.337 20.69 C 53.504 24.703 52.394 30.516 54.639 34.382 C 55.4 35.691 56.488 37.998 58.407 38.365 C 60.338 38.734 63.87 36.097 65.5 35.162 C 67.124 34.23 67.876 32.646 69.081 31.379 C 70.102 30.304 70.471 28.372 70.941 27.055 C 71.768 24.742 72.011 22.033 72.011 19.609 C 72.011 17.445 71.742 14.075 70.104 12.263 C 68.106 10.051 61.779 8.706 59.034 10.281 M 38.734 47.758 C 42.621 45.803 46.714 44.734 51.024 44.22 C 58.141 43.371 66.035 42.944 72.896 45.244 M 46.65 52.784 C 49.95 52.416 53.266 50.745 56.648 50.271 C 60.359 49.751 64.15 49.433 67.897 49.433"
          fill="transparent"
          stroke="rgb(255, 64, 64)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="flex w-full flex-col items-center justify-center gap-[60px] bg-white px-[20px] py-[40px] md:px-[40px] md:py-[60px] lg:pb-[90px]"
    >
      <Doodle />

      <div className="flex w-full flex-col items-center gap-[20px] md:flex-row md:flex-wrap md:justify-center lg:max-w-[1000px]">
        {REVIEWS.map((review) => (
          <figure
            key={review.name}
            className={`m-0 flex w-full flex-col items-center rounded-[20px] bg-white p-[16px] md:min-h-[320px] md:p-[24px] lg:min-h-[360px] lg:p-[30px] ${review.width} ${review.gap} ${CARD_SHADOW}`}
          >
            <figcaption className="flex h-[50px] w-full items-center gap-[15px] overflow-hidden">
              <Image
                src={review.avatar}
                alt={review.name}
                width={50}
                height={50}
                className="h-[50px] w-[50px] shrink-0 rounded-full object-cover"
              />
              {/*
                globals.css resets h1-h4/p to `font-size: inherit;
                font-weight: inherit`, and that unlayered rule outranks
                Tailwind's utilities. Size and weight are therefore set on the
                wrapper so the heading inherits them, and repeated on the
                heading itself so it still holds if the reset ever goes away.
              */}
              <div className="w-[200px] shrink-0 text-[18px] font-semibold md:text-[20px]">
                <h3 className="text-ink text-[18px] leading-[25.2px] font-semibold tracking-[-0.5px] md:text-[20px] md:leading-[28px]">
                  {review.name}
                </h3>
              </div>
            </figcaption>

            <blockquote className="m-0 w-full text-[15px] font-medium md:text-[16px]">
              <p className="text-[15px] leading-[24px] font-medium text-[#666666] md:text-[16px] md:leading-[25.6px]">
                {review.quote}
              </p>
            </blockquote>
          </figure>
        ))}
      </div>
    </section>
  );
}
