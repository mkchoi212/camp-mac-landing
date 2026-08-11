import type { Metadata } from "next";
import { Inter, Inter_Tight, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Camp - let's conquer screenshots",
  description:
    "Organize your thoughts and inspirations with Camp on iOS and macOS. With AI, Camp automatically titles, tags, and extracts information you care about the most.",
  metadataBase: new URL("https://campmac.xyz"),
  openGraph: {
    title: "Camp - let's conquer screenshots",
    description:
      "Organize your thoughts and inspirations with Camp on iOS and macOS. With AI, Camp automatically titles, tags, and extracts information you care about the most.",
    type: "website",
    url: "https://campmac.xyz/",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Camp - let's conquer screenshots",
    description:
      "Organize your thoughts and inspirations with Camp on iOS and macOS. With AI, Camp automatically titles, tags, and extracts information you care about the most.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${manrope.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
