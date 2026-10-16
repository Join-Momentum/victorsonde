import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { SPLIT_GAP } from "./Grid";

type Props = {
  /** grid-template-columns above 1024px, e.g. "1.05fr .95fr". */
  cols?: string;
  gap?: string;
  as?: "div" | "article";
  className?: string;
  children: ReactNode;
};

/** Two-column asymmetric layout that stacks below 1024px. */
export function Split({ cols = "1fr 1fr", gap = SPLIT_GAP, as: Tag = "div", className, children }: Props) {
  return (
    <Tag
      style={{ "--cols": cols } as CSSProperties}
      className={cn("grid grid-cols-1 min-[1025px]:grid-cols-(--cols)", gap, className)}
    >
      {children}
    </Tag>
  );
}
