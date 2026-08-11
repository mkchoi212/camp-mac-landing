import Image from "next/image";

type FooterLink = {
  label: string;
  href: string;
  /** Phone-only type scale — the reference sets "Camp for iPhone" larger. */
  phone: string;
};

const LINKS: FooterLink[] = [
  {
    label: "Privacy",
    href: "https://studiolanes.notion.site/Camp-Privacy-Policy-dc895d953e8941cfb583dab2249fd54f?pvs=4",
    phone: "text-[13px] leading-[15.6px]",
  },
  {
    label: "Blog",
    href: "https://blog.studiolanes.com",
    phone: "text-[13px] leading-[15.6px]",
  },
  {
    label: "Camp for iPhone",
    href: "https://getcamp.xyz",
    phone: "text-[16px] leading-[19.2px]",
  },
  {
    label: "x.com",
    href: "https://x.com/studiolanes",
    phone: "text-[13px] leading-[15.6px]",
  },
];

export default function Footer() {
  return (
    <footer className="flex w-full items-center justify-center p-5 md:px-10">
      <div className="flex w-full flex-col items-start justify-between md:flex-row md:items-center">
        {/* Camp mark + link column */}
        <div className="order-2 flex w-full flex-col items-center justify-center pt-5 md:order-1 md:w-auto md:flex-row md:items-start md:gap-[30px] md:px-5 md:pb-5">
          <Image
            src="/assets/vw9kOeENleWmGIEM5xmwqemF3A.png"
            alt="Camp app icon"
            width={50}
            height={50}
            className="hidden object-cover md:block md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]"
          />
          <nav className="flex w-full flex-row items-center justify-between md:w-auto md:flex-col md:items-start md:justify-center md:gap-2">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                /* globals.css resets `a { color: inherit }` unlayered, so the
                   link colour has to be set inline to win the cascade. */
                style={{ color: "#000000" }}
                className={`font-sans font-normal transition-opacity duration-150 ease-(--ease-out-strong) hoverable:hover:opacity-60 ${link.phone} md:text-[16px] md:leading-[19.2px]`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Studiolanes credit */}
        <a
          href="https://www.studiolanes.com"
          target="_blank"
          rel="noopener noreferrer"
          className="order-1 flex w-full flex-row items-end justify-between md:order-2 md:w-auto md:flex-col md:justify-end md:gap-5"
        >
          <Image
            src="/assets/Qffw7afFXVnG3KP3EfelzxmC4DM.png"
            alt="Studiolanes"
            width={30}
            height={38}
            className="h-[25px] w-[20px] object-cover md:h-[31px] md:w-[24px] lg:h-[38px] lg:w-[30px]"
          />
          {/* `built by ` keeps its trailing space under white-space:pre, which is
              what nudges it a space-width left of the right-aligned edge. */}
          <span className="flex flex-col text-right font-sans text-[12px] leading-[14.4px] font-normal whitespace-pre text-[#737373] md:text-[14px] md:leading-[16.8px]">
            <span>{"built by "}</span>
            <span>Studiolanes</span>
          </span>
        </a>
      </div>
    </footer>
  );
}
