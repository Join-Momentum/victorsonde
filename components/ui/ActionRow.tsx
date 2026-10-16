import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  /** Replaces the default vertical margin. */
  margin?: string;
  className?: string;
  children: ReactNode;
};

/** Wrapping row of call-to-action buttons. */
export function ActionRow({ margin = "mt-[26px] mb-[30px]", className, children }: Props) {
  return <div className={cn("flex flex-wrap gap-3", margin, className)}>{children}</div>;
}
