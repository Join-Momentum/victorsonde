import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const variants = {
  open: "bg-orange font-semibold text-dark",
  soon: "border border-orange-ink/60 text-orange-ink inv:border-orange/60 inv:text-orange",
};

type Props = {
  variant: keyof typeof variants;
  className?: string;
  children: ReactNode;
};

/** Status pill, e.g. "Applications open" (with a live pulse) or "Launching soon". */
export function Badge({ variant, className, children }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-[6px] font-mono text-[.64rem] uppercase leading-none tracking-[.14em]",
        variants[variant],
        className,
      )}
    >
      {variant === "open" ? (
        <span aria-hidden className="relative flex size-1.5">
          <span className="absolute inline-flex size-full rounded-full bg-dark opacity-60 motion-safe:animate-ping" />
          <span className="relative inline-flex size-1.5 rounded-full bg-dark" />
        </span>
      ) : (
        <span aria-hidden className="size-1.5 rounded-full border border-current" />
      )}
      {children}
    </span>
  );
}
