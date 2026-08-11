import Image from "next/image";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/camp-a-scrapbook/id1658539800";

const NAV_LINKS = [
  { label: "Workflow", href: "#workflow" },
  { label: "Features", href: "#features" },
  { label: "Reviews", href: "#reviews" },
];

export default function Navbar() {
  return (
    <nav
      aria-label="Main"
      className={[
        // Framer: position:fixed; left:50%; transform:translateX(-50%); z-index:10
        // phone top:15px w:91% r:24px p:10px | tablet top:34px w:82% r:30px p:10px 20px
        // desktop top:33px w:86%
        "fixed left-1/2 z-10 -translate-x-1/2",
        "top-[15px] w-[91%] rounded-[24px] p-[10px]",
        "md:top-[34px] md:w-[82%] md:rounded-[30px] md:px-[20px] md:py-[10px]",
        "lg:top-[33px] lg:w-[86%]",
        "flex flex-row flex-nowrap items-center justify-start gap-[20px]",
        // 1px inset ring (Framer draws it with an inset ::after so it never
        // eats into the padding box)
        "bg-white shadow-[inset_0_0_0_1px_#e8e8e8]",
      ].join(" ")}
    >
      <Image
        src="/assets/vw9kOeENleWmGIEM5xmwqemF3A.png"
        alt="Camp logo"
        width={30}
        height={30}
        priority
        className="relative z-[1] h-[30px] w-[30px] shrink-0 object-cover drop-shadow-[0_1px_6px_#ff9903]"
      />

      <span className="block shrink-0 whitespace-pre font-tight text-[17px] font-medium leading-[24.7px] text-black md:text-[19px]">
        Camp.
      </span>

      {/* Framer spacer: flex:1 0 0px, align-self:stretch */}
      <div aria-hidden="true" className="h-auto w-px flex-1 self-stretch" />

      {NAV_LINKS.map(({ label, href }) => (
        <a
          key={href}
          href={href}
          className="hidden shrink-0 whitespace-pre font-tight text-[17px] font-medium leading-[24.7px] text-black no-underline transition-opacity duration-150 ease-(--ease-out-strong) hoverable:hover:opacity-60 md:block lg:text-[19px]"
        >
          {label}
        </a>
      ))}

      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={[
          "pressable relative block shrink-0 overflow-visible rounded-[15px]",
          "hoverable:hover:brightness-[1.03]",
          "h-[40px] w-[129px] md:w-[117px] lg:h-[44px] lg:w-[129px]",
          "bg-[linear-gradient(0deg,#ffb452_0%,#ffd6a3_100%)]",
          // Framer draws the data-border ring as an ::after, i.e. ON TOP of the inset
          // highlights — box-shadows paint first-listed on top, so the ring leads.
          // Its declared width is .5px, but Chrome snaps that up to a full 1px band
          // (verified against the reference capture), hence 1px here.
          "shadow-[inset_0_0_0_1px_rgba(71,58,45,0.1),inset_0_-1px_1.5px_rgba(71,58,45,0.1),inset_0_-1px_1.5px_rgba(71,58,45,0.1),inset_0_2px_1.5px_rgba(255,255,255,0.75),inset_0_2px_1.5px_rgba(255,255,255,0.75)]",
        ].join(" ")}
      >
        {/* Framer pins this label box to the right edge on phone (aspect-ratio
            2.8043/1, inset ±1px) and centres it from tablet up. */}
        <span
          className={[
            "absolute inset-y-[-1px] right-0 w-[117.78px] md:inset-0 md:w-auto",
            "flex flex-col justify-center",
            "text-center font-tight text-[15px] font-semibold leading-[1.2em] text-black md:text-[17px] lg:text-[19px]",
          ].join(" ")}
        >
          Download
        </span>
      </a>
    </nav>
  );
}
