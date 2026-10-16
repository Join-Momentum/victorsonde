import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  cite: string;
  /** Smaller setting for use inside a column. */
  compact?: boolean;
  className?: string;
  children: ReactNode;
};

/** Large display pull quote with an orange rule and attribution. */
export function Quote({ cite, compact, className, children }: Props) {
  return (
    <blockquote
      className={cn(
        "relative m-0 border-l-2 border-orange pl-[clamp(20px,3vw,40px)] font-display font-semibold tracking-[-.03em] text-balance",
        compact ? "text-[clamp(1.4rem,1.1rem+1.1vw,2rem)] leading-[1.15]" : "text-quote",
        className,
      )}
    >
      {children}
      <footer className="mt-6 flex items-center gap-3 font-mono text-[.7rem] font-normal uppercase tracking-[.18em] text-orange-ink inv:text-orange">
        <span aria-hidden className="h-px w-8 bg-current" />
        {cite}
      </footer>
    </blockquote>
  );
}
