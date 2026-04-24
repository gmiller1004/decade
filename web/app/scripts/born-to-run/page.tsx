import type { Metadata } from "next";
import Link from "next/link";
import { EpisodeStillsGallery } from "@/components/EpisodeStillsGallery";
import { PageHeader } from "@/components/PageHeader";
import { Episode2Teleplay } from "@/components/teleplays/Episode2Teleplay";
import { episode2Stills } from "@/lib/stills";

export const metadata: Metadata = {
  title: "Episode 2 — Born to Run",
  description:
    "DECADE episode 2 teleplay: Born to Run. Story by Adam Carr & Greg Miller. Written by Greg Miller.",
};

export default function Episode2ScriptPage() {
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
          subtitle="Episode 2: “Born to Run”"
          credit="Story by Adam Carr & Greg Miller • Written by Greg Miller"
        />
      </div>
      <EpisodeStillsGallery
        title="Episode 2 Stills"
        subtitle="Click any image to enlarge in the lightbox."
        stills={episode2Stills}
      />
      <Episode2Teleplay />
      <p className="mt-12 text-center text-xs text-stone-500">
        DECADE episode 2 teleplay • April 23, 2026
      </p>
    </main>
  );
}
