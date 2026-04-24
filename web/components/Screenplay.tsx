import type { ReactNode } from "react";

export function Screenplay({ children }: { children: ReactNode }) {
  return (
    <article
      className="mx-auto my-8 max-w-[8.5in] bg-[#f8f1e3] px-8 py-12 text-sm leading-relaxed text-stone-900 shadow-2xl shadow-black/40 sm:px-12 sm:py-16 md:px-16 md:py-24"
      style={{ fontSize: "12.5pt", lineHeight: 1.45 }}
    >
      {children}
    </article>
  );
}

export function SceneHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-2 mt-8 border-l-[6px] border-[#99cc00] bg-white py-1.5 pl-2.5 text-[1.05rem] font-bold uppercase tracking-wide first:mt-0">
      {children}
    </h2>
  );
}

export function Action({ children }: { children: ReactNode }) {
  return <p className="mb-3 text-justify last:mb-0">{children}</p>;
}

export function Character({ children }: { children: ReactNode }) {
  return (
    <p className="mb-1 mt-6 text-center text-sm font-bold uppercase tracking-wide">
      {children}
    </p>
  );
}

export function Dialogue({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto mb-4 max-w-[3.6in] text-justify">{children}</div>
  );
}

export function ScriptEndNote({ children }: { children: ReactNode }) {
  return (
    <p className="mt-10 text-center text-xs text-stone-600">{children}</p>
  );
}
