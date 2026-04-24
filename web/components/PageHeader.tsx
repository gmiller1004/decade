type PageHeaderProps = {
  eyebrow: string;
  title?: string;
  subtitle?: string;
  credit?: string;
};

export function PageHeader({
  eyebrow,
  title = "DECADE",
  subtitle,
  credit,
}: PageHeaderProps) {
  return (
    <header className="mb-12 border-b border-amber-400 pb-10 text-center">
      <h1 className="font-display text-5xl font-semibold tracking-tighter text-amber-400 sm:text-6xl md:text-7xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-3 text-xl text-stone-400 sm:text-2xl">{subtitle}</p>
      ) : null}
      {credit ? (
        <p className="mt-6 text-sm text-stone-500">{credit}</p>
      ) : null}
      <p className="mt-8 text-xs uppercase tracking-widest text-amber-300">
        {eyebrow}
      </p>
    </header>
  );
}
