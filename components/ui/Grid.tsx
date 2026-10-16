import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const columns = {
  1: "",
  2: "min-[621px]:grid-cols-2",
  3: "min-[621px]:grid-cols-2 min-[981px]:grid-cols-3",
  4: "min-[621px]:grid-cols-2 min-[981px]:grid-cols-4",
};

export const DEFAULT_GAP = "gap-[clamp(16px,2vw,28px)]";

/** Wider gutter between the two halves of a split layout. */
export const SPLIT_GAP = "gap-x-[clamp(40px,6vw,112px)] gap-y-12";

type Props = {
  cols?: keyof typeof columns;
  /** Replaces the default responsive gap. */
  gap?: string;
  className?: string;
  children: ReactNode;
};

/** Responsive equal-column grid that collapses to two, then one column. */
export function Grid({ cols = 1, gap = DEFAULT_GAP, className, children }: Props) {
  return <div className={cn("grid", columns[cols], gap, className)}>{children}</div>;
}
