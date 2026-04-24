import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/treatment", label: "Treatment" },
  { href: "/episodes", label: "Episodes" },
] as const;

export function SiteNav() {
  return (
    <nav
      className="font-display border-b border-amber-400/30 bg-stone-950/95 backdrop-blur-sm"
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-amber-400 transition hover:text-amber-300"
        >
          DECADE
        </Link>
        <ul className="flex flex-wrap items-center gap-6 text-sm text-stone-400">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="transition hover:text-amber-400"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
