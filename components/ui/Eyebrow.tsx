import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  /** Section index, e.g. "01". */
  num?: string;
  /** Render the label in the accent colour instead of muted. */
  accent?: boolean;
  className?: string;
  children?: ReactNode;
};

/** Section kicker: index number, a short rule, then the label, e.g. "01 ── Why this matters". */
export function Eyebrow({ num, accent, className, children }: Props) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-[.72rem] font-medium uppercase tracking-[.18em]",
        className,
      )}
    >
      {num && <span className="text-orange-ink inv:text-orange">{num}</span>}
      {num && children && <span aria-hidden className="h-px w-8 bg-current opacity-30" />}
      {children && (
        <span className={accent ? "text-orange-ink inv:text-orange" : "text-muted inv:text-sand-3"}>{children}</span>
      )}
    </div>
  );
}
