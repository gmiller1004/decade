 "use client";

import Image from "next/image";
import { useState } from "react";
import type { EpisodeStill } from "@/lib/stills";

type EpisodeStillsGalleryProps = {
  title: string;
  subtitle?: string;
  stills: EpisodeStill[];
};

export function EpisodeStillsGallery({
  title,
  subtitle,
  stills,
}: EpisodeStillsGalleryProps) {
  const [activeStill, setActiveStill] = useState<EpisodeStill | null>(null);

  return (
    <>
      <section className="mt-16">
        <div className="mb-6">
          <h2 className="font-display text-2xl text-amber-300 sm:text-3xl">
            {title}
          </h2>
          {subtitle ? <p className="mt-2 text-sm text-stone-400">{subtitle}</p> : null}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stills.map((still) => (
            <figure
              key={still.src}
              className="overflow-hidden rounded-lg border border-amber-400/30 bg-stone-900/70"
            >
              <button
                type="button"
                className="block w-full cursor-zoom-in"
                onClick={() => setActiveStill(still)}
                aria-label={`Open image: ${still.caption}`}
              >
                <Image
                  src={still.src}
                  alt={still.alt}
                  width={1200}
                  height={800}
                  className="h-52 w-full object-cover transition hover:scale-[1.01]"
                />
              </button>
              <figcaption className="p-3 text-sm text-stone-300">
                {still.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {activeStill ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveStill(null)}
        >
          <div
            className="w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex justify-end">
              <button
                type="button"
                className="rounded border border-amber-400/40 bg-stone-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-300 hover:border-amber-400 hover:text-amber-200"
                onClick={() => setActiveStill(null)}
              >
                Close
              </button>
            </div>
            <div className="overflow-hidden rounded-lg border border-amber-400/30 bg-stone-950">
              <Image
                src={activeStill.src}
                alt={activeStill.alt}
                width={2000}
                height={1400}
                className="max-h-[80vh] h-auto w-full object-contain"
                priority
              />
            </div>
            <p className="mt-3 text-center text-sm text-stone-300">
              {activeStill.caption}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
