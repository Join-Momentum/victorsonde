import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type Marker = { value: ReactNode; label: string };

type Props = {
  items: Marker[];
  className?: string;
};

/** Stat strip: large figures with mono captions, divided by hairlines. */
export function Markers({ items, className }: Props) {
  return (
    <dl className={cn("grid grid-cols-2 border-t border-white/12 md:grid-cols-4", className)}>
      {items.map((item, i) => (
        <div
          key={item.label}
          className={cn(
            "flex flex-col-reverse gap-2 py-6 pr-4",
            i % 2 === 1 && "border-l border-white/12 pl-5",
            i > 0 && "md:border-l md:border-white/12 md:pl-6",
            i >= 2 && "border-t border-white/12 md:border-t-0",
          )}
        >
          <dt className="font-mono text-[.66rem] uppercase tracking-[.14em] text-sand-3">{item.label}</dt>
          <dd className="m-0 font-display text-stat font-bold tracking-[-.035em] text-orange">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
