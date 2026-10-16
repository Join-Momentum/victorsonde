import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type Definition = { term: string; detail: ReactNode };

type Props = {
  items: Definition[];
  className?: string;
};

/** Two-column term / detail table used for venture and case-study facts. */
export function DefinitionList({ items, className }: Props) {
  return (
    <dl className={cn("m-0 text-[.98rem]", className)}>
      {items.map(({ term, detail }) => (
        <div
          key={term}
          className="grid grid-cols-[96px_1fr] gap-4 border-t border-paper-2 py-3 last:border-b inv:border-white/10 sm:grid-cols-[112px_1fr]"
        >
          <dt className="pt-[.4em] font-mono text-[.62rem] uppercase tracking-[.14em] text-muted inv:text-muted-dk">
            {term}
          </dt>
          <dd className="m-0 leading-[1.5]">{detail}</dd>
        </div>
      ))}
    </dl>
  );
}
