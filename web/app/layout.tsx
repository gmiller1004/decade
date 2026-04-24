import type { Metadata } from "next";
import { EB_Garamond, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://decade.vercel.app";
const shareDescription =
  "DECADE is a prestige drama series pitch: a Faustian rock-and-roll odyssey following Desmond Kane from meteoric rise to supernatural collapse.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DECADE — Series Pitch",
    template: "%s — DECADE",
  },
  description: shareDescription,
  openGraph: {
    title: "DECADE — Series Pitch",
    description: shareDescription,
    url: "/",
    siteName: "DECADE",
    images: [
      {
        url: "/media/desmond-layla-episode-1.jpg",
        width: 1200,
        height: 630,
        alt: "Desmond and Layla from DECADE episode one",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DECADE — Series Pitch",
    description: shareDescription,
    images: ["/media/desmond-layla-episode-1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${spaceGrotesk.variable} h-full`}
    >
      <body className="font-body min-h-full flex flex-col antialiased">
        <SiteNav />
        <div className="flex flex-1 flex-col">{children}</div>
        <footer className="mt-auto border-t border-amber-400/20 bg-stone-950 px-6 py-8 text-center text-xs text-stone-500">
          <p className="font-display text-[11px] font-semibold uppercase tracking-wide text-amber-200">
            NOTICE: All materials on this site are protected intellectual
            property.
          </p>
          <p className="mt-2 font-display text-[11px] font-semibold uppercase tracking-wide text-amber-300">
            DECADE and all related story, character, and visual concepts are
            the exclusive intellectual property of Adam Carr and Greg Miller.
          </p>
          <p className="mt-2 font-display text-[11px] font-semibold uppercase tracking-wide text-amber-300">
            Concept created in 2010. Unauthorized use, adaptation, or
            reproduction is prohibited.
          </p>
          <p className="mt-3">© DECADE • Adam Carr & Greg Miller • All rights reserved.</p>
          <p className="mt-2">
            For studio consideration —{" "}
            <Link
              href="/treatment"
              className="text-amber-500/80 underline-offset-2 hover:text-amber-400 hover:underline"
            >
              Treatment
            </Link>
            {" · "}
            <Link
              href="/episodes"
              className="text-amber-500/80 underline-offset-2 hover:text-amber-400 hover:underline"
            >
              Episodes
            </Link>
          </p>
        </footer>
      </body>
    </html>
  );
}
