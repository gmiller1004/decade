import type { Metadata } from "next";
import Link from "next/link";
import { EpisodeStillsGallery } from "@/components/EpisodeStillsGallery";
import { PageHeader } from "@/components/PageHeader";
import { PilotTeleplay } from "@/components/teleplays/PilotTeleplay";
import { pilotStills } from "@/lib/stills";

export const metadata: Metadata = {
  title: "Pilot — Spirit in the Sky",
  description:
    "DECADE pilot teleplay: Spirit in the Sky. Story by Adam Carr & Greg Miller. Written by Adam Carr & Greg Miller.",
};

export default function PilotScriptPage() {
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
          eyebrow="Pilot teleplay • v1.0"
          subtitle="Pilot episode: “Spirit in the Sky”"
          credit="Story by Adam Carr & Greg Miller • Written by Adam Carr & Greg Miller"
        />
      </div>
      <EpisodeStillsGallery
        title="Episode 1 Stills"
        subtitle="Click any image to enlarge in the lightbox."
        stills={pilotStills}
      />
      <PilotTeleplay />
      <p className="mt-12 text-center text-xs text-stone-500">
        DECADE pilot teleplay • April 23, 2026
      </p>
    </main>
  );
}
