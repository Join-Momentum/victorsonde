"use client";

import { useState, type CSSProperties } from "react";
import { connectEntries, connectFilters, type ConnectCategory } from "@/content/connect";
import { cn } from "@/lib/cn";
import { ConnectEntryCard } from "./ConnectEntryCard";

/** Category tabs and the filtered list of offers; the list re-enters with a short stagger on each switch. */
export function ConnectStorefront() {
  const [filter, setFilter] = useState<ConnectCategory | "all">("all");
  const visible = connectEntries.filter((e) => filter === "all" || e.categories.includes(filter));

  return (
    <div className="mt-9">
      <div
        role="group"
        aria-label="Filter by topic"
        className="mx-auto flex w-fit max-w-full gap-0.5 overflow-x-auto sm:gap-1 rounded-full border border-white/10 bg-white/[.04] p-1 [scrollbar-width:none]"
      >
        {connectFilters.map((f) => (
          <button
            key={f.value}
            type="button"
            aria-pressed={filter === f.value}
            onClick={() => setFilter(f.value)}
            className={cn(
              "whitespace-nowrap rounded-full px-2 py-2 font-mono text-[.62rem] uppercase tracking-[.08em] transition-colors duration-300 sm:px-3.5 sm:text-[.66rem] sm:tracking-[.12em]",
              filter === f.value ? "bg-orange text-dark" : "text-sand-2 hover:text-white",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <ul key={filter} className="m-0 mt-6 grid list-none gap-3 p-0">
        {visible.map((entry, i) => (
          <li
            key={entry.id}
            style={{ animationDelay: `${i * 45}ms` } as CSSProperties}
            className="m-0 p-0 motion-safe:animate-rise"
          >
            <ConnectEntryCard entry={entry} />
          </li>
        ))}
      </ul>
    </div>
  );
}
