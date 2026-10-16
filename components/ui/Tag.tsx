import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const variants = {
  plain: "border-paper-2 bg-white text-muted inv:border-line-dark inv:bg-white/[.03] inv:text-sand",
  hot: "border-orange bg-orange font-semibold text-dark",
  orange: "border-orange bg-orange text-dark",
  dark: "border-dark bg-dark text-white",
  ink: "border-ink bg-ink text-white",
};

type Props = {
  variant?: keyof typeof variants;
  children: ReactNode;
};

/** Small mono topic pill or colour swatch. */
export function Tag({ variant = "plain", children }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3.5 py-2 font-mono text-[.72rem] leading-none tracking-[.04em]",
        variants[variant],
      )}
    >
      {children}
    </span>
  );
}
