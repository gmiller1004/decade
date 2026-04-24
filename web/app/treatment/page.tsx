import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Series Treatment",
};

export default function TreatmentPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12 md:py-16">
      <div className="mb-14 border-b border-amber-400 pb-12 text-center">
        <h1 className="font-display text-5xl font-semibold tracking-tighter text-amber-400 sm:text-6xl md:text-7xl">
          DECADE
        </h1>
        <p className="mt-3 text-xl text-stone-400 sm:text-2xl">
          A Life Told Through Rock &amp; Roll
        </p>
        <p className="mt-10 text-xs uppercase tracking-widest text-amber-300">
          Series treatment • v1.0
        </p>
      </div>

      <article className="space-y-8 text-lg leading-relaxed text-stone-300">
        <h2 className="font-display text-4xl text-amber-400 md:text-5xl">
          Series treatment
        </h2>

        <p className="text-xl font-light leading-snug text-stone-200 sm:text-2xl">
          <strong className="font-semibold text-amber-200">Logline:</strong> In
          1974, a desperate Midwest guitarist sells his soul for supernatural
          talent and lives one man&apos;s Faustian rock odyssey — where every
          iconic song becomes a chapter in his meteoric rise, moral collapse,
          bloody revenge, and eternal entrapment.
        </p>

        <blockquote className="border-l-4 border-amber-400 py-1 pl-8 text-lg text-stone-200">
          <p>
            Desmond Kane&apos;s life is scored by the greatest rock anthems of
            all time. The guitar he acquires in a dusty pawn shop grants him
            god-tier ability… but it also summons The Man — a shape-shifting
            tempter who offers every deal as a choice.
          </p>
        </blockquote>

        <p>
          Each episode is titled after (and thematically haunted by) one
          legendary classic rock song. Lyrics bleed indirectly into dialogue,
          hallucinations, settings, and emotional turning points. The
          supernatural begins as subtle visions and golden-winged omens, then
          grows undeniable as the price of Desmond&apos;s talent is slowly
          collected.
        </p>

        <p>
          Tone: Sweat-drenched, horny, darkly funny, and visually mythic.{" "}
          <em className="text-stone-200">Daisy Jones &amp; the Six</em>{" "}
          camaraderie meets <em className="text-stone-200">True Detective</em>{" "}
          cosmic dread with a golden-winged fallen-angel aesthetic. Music is
          religion. Triumph always extracts something human.
        </p>

        <div className="rounded-xl bg-stone-900 p-8">
          <p className="text-sm font-medium uppercase tracking-widest text-amber-400">
            Season 1 theme
          </p>
          <p className="mt-2 text-2xl text-stone-100">
            &ldquo;The ticket costs more than you think.&rdquo;
          </p>
        </div>

        <p className="text-sm text-stone-400">
          End-credits sting: The title song of each episode plays over haunting
          imagery, pulling the audience deeper into Desmond&apos;s cursed
          American dream.
        </p>
      </article>

      <p className="mt-20 text-center text-xs text-stone-500">
        DECADE master treatment • April 23, 2026
      </p>
    </main>
  );
}
