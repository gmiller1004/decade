import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-16 md:py-24">
      <div className="mb-14 border-b border-amber-400 pb-12 text-center">
        <h1 className="font-display text-6xl font-semibold tracking-tighter text-amber-400 sm:text-7xl">
          DECADE
        </h1>
        <p className="mt-3 text-xl text-stone-400 sm:text-2xl">
          A Life Told Through Rock &amp; Roll
        </p>
        <p className="mt-10 text-xs uppercase tracking-widest text-amber-300">
          Original series — pitch site
        </p>
      </div>

      <p className="text-xl font-light leading-snug text-stone-200 sm:text-2xl">
        <strong className="font-semibold text-amber-200">Logline:</strong> In
        1974, a desperate Midwest guitarist sells his soul for supernatural
        talent and lives one man&apos;s Faustian rock odyssey — where every
        iconic song becomes a chapter in his meteoric rise, moral collapse,
        bloody revenge, and eternal entrapment.
      </p>

      <section className="mt-10 rounded-xl border border-amber-400/30 bg-stone-900/70 p-4 sm:p-6">
        <div className="mx-auto w-full max-w-md overflow-hidden rounded-lg border border-amber-400/30 bg-stone-950 shadow-2xl shadow-black/40">
          <Image
            src="/media/decade-key-art.jpg"
            alt="DECADE key art poster"
            width={1400}
            height={2100}
            className="h-auto w-full object-contain"
            priority
          />
        </div>
        <div className="mt-5 space-y-3 text-center">
          <p className="font-display text-sm uppercase tracking-widest text-amber-300">
            Series key art
          </p>
          <p className="text-stone-300">
            Official DECADE poster art for pitch and packaging.
          </p>
          <Link
            href="/scripts/spirit-in-the-sky"
            className="font-display text-sm font-semibold uppercase tracking-wide text-amber-400 underline-offset-4 hover:text-amber-300 hover:underline"
          >
            View pilot teleplay and stills →
          </Link>
        </div>
      </section>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        <Link
          href="/treatment"
          className="font-display rounded-lg border border-amber-400/40 bg-stone-900/80 px-6 py-5 text-center text-sm font-semibold uppercase tracking-wide text-amber-400 transition hover:border-amber-400 hover:bg-stone-900"
        >
          Series treatment
        </Link>
        <Link
          href="/episodes"
          className="font-display rounded-lg border border-amber-400/40 bg-stone-900/80 px-6 py-5 text-center text-sm font-semibold uppercase tracking-wide text-amber-400 transition hover:border-amber-400 hover:bg-stone-900"
        >
          Season 1 episodes
        </Link>
      </div>

      <p className="mt-10 text-sm leading-relaxed text-stone-500">
        Teleplays for the pilot (&ldquo;Spirit in the Sky&rdquo;) and episode
        two (&ldquo;Born to Run&rdquo;) are available from the episode
        breakdown.
      </p>
    </main>
  );
}
