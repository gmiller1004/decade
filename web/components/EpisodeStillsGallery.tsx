import Image from "next/image";
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
  return (
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
            <Image
              src={still.src}
              alt={still.alt}
              width={1200}
              height={800}
              className="h-52 w-full object-cover"
            />
            <figcaption className="p-3 text-sm text-stone-300">
              {still.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
