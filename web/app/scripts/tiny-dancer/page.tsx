import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Episode4Teleplay } from "@/components/teleplays/Episode4Teleplay";

export const metadata: Metadata = {
  title: "Episode 4 — Tiny Dancer",
  description:
    "DECADE episode 4 teleplay: Tiny Dancer. Story by Adam Carr & Greg Miller. Written by Greg Miller.",
};

export default function Episode4ScriptPage() {
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
          subtitle="Episode 4: “Tiny Dancer”"
          credit="Story by Adam Carr & Greg Miller • Written by Greg Miller"
        />
      </div>
      <Episode4Teleplay />
      <p className="mt-12 text-center text-xs text-stone-500">
        DECADE episode 4 teleplay • Locked version • April 23, 2026
      </p>
    </main>
  );
}
