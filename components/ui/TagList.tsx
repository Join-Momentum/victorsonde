import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  children: ReactNode;
};

/** Wrapping row of tags. */
export function TagList({ className, children }: Props) {
  return <div className={cn("flex flex-wrap gap-2", className)}>{children}</div>;
}
