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

export const metadata: Metadata = {
  title: {
    default: "DECADE — Series Pitch",
    template: "%s — DECADE",
  },
  description:
    "DECADE: A life told through rock & roll. Series treatment, season one episode breakdown, and teleplays for studio consideration.",
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
          <p>DECADE • Pitch materials • April 2026</p>
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
