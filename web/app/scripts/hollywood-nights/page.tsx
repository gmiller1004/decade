import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Episode3Teleplay } from "@/components/teleplays/Episode3Teleplay";

export const metadata: Metadata = {
  title: "Episode 3 — Hollywood Nights",
  description:
    "DECADE episode 3 teleplay: Hollywood Nights. Story by Adam Carr & Greg Miller. Written by Grok Script Architect.",
};

export default function Episode3ScriptPage() {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-10 sm:px-6 md:py-14">
      <div className="px-2 sm:px-4">
        <p className="mb-6 text-center">
          <Link
            href="/episodes"
            className="text-sm text-amber-500/90 underline-offset-2 hover:text-amber-400 hover:underline"
          >
            ← Season 1 episodes
          </Link>
        </p>
        <PageHeader
          eyebrow="Teleplay • v1.0"
          subtitle="Episode 3: “Hollywood Nights”"
          credit="Story by Adam Carr & Greg Miller • Written by Grok Script Architect"
        />
      </div>
      <Episode3Teleplay />
      <p className="mt-12 text-center text-xs text-stone-500">
        DECADE episode 3 teleplay • April 23, 2026
      </p>
    </main>
  );
}
