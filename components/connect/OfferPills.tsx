import type { Pill } from "@/content/connect";
import { cn } from "@/lib/cn";

const tones = {
  hot: "bg-orange font-semibold text-dark",
  free: "bg-pill-free text-dark",
};

/** Row of small status pills at the top of an offer. */
export function OfferPills({ pills, onDark }: { pills: Pill[]; onDark?: boolean }) {
  return (
    <span className="mb-1.5 flex flex-wrap items-center gap-2">
      {pills.map((pill) => (
        <span
          key={pill.label}
          className={cn(
            "px-[7px] py-[3px] font-mono text-[.59rem] uppercase tracking-[.12em]",
            pill.tone ? tones[pill.tone] : onDark ? "bg-dark-pill text-sand" : "bg-paper text-muted",
          )}
        >
          {pill.label}
        </span>
      ))}
    </span>
  );
}
