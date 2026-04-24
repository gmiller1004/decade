import type { Metadata } from "next";
import Link from "next/link";
import { season1Episodes } from "@/lib/episodes";

export const metadata: Metadata = {
  title: "Season 1 Episodes",
};

export default function EpisodesPage() {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-12 md:py-16">
      <div className="mb-14 border-b border-amber-400 pb-12 text-center">
        <h1 className="font-display text-5xl font-semibold tracking-tighter text-amber-400 sm:text-6xl md:text-7xl">
          DECADE
        </h1>
        <p className="mt-3 text-xl text-stone-400 sm:text-2xl">
          A Life Told Through Rock &amp; Roll
        </p>
        <p className="mt-10 text-xs uppercase tracking-widest text-amber-300">
          Season 1 episode breakdown • v1.0
        </p>
      </div>

      <h2 className="font-display mb-12 text-center text-3xl text-amber-400 md:text-4xl">
        Season 1 — 12 episodes (~55 min each)
      </h2>

      <ol className="space-y-12">
        {season1Episodes.map((ep) => (
          <li
            key={ep.number}
            className="border-l-4 border-amber-400 pl-6 sm:pl-8"
          >
            <h3 className="text-xl font-bold text-amber-400 sm:text-2xl">
              {ep.number}. &ldquo;{ep.songTitle}&rdquo;
            </h3>
            <p className="mt-2 text-stone-300">{ep.synopsis}</p>
            <p className="mt-4">
              {ep.scriptSlug ? (
                <Link
                  href={`/scripts/${ep.scriptSlug}`}
                  className="font-display text-sm font-semibold uppercase tracking-wide text-amber-400 underline-offset-4 hover:text-amber-300 hover:underline"
                >
                  Read teleplay →
                </Link>
              ) : (
                <span className="text-sm text-stone-600">
                  Teleplay not yet included in this pitch packet
                </span>
              )}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-20 text-center text-xs text-stone-500">
        DECADE season 1 episode breakdown • April 23, 2026
      </p>
    </main>
  );
}
