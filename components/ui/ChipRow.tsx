import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  label: string;
  margin?: string;
  children: ReactNode;
};

/** Accessible group wrapper for a row of filter chips. */
export function ChipRow({ label, margin = "mb-7", children }: Props) {
  return (
    <div role="group" aria-label={label} className={cn("flex flex-wrap gap-2", margin)}>
      {children}
    </div>
  );
}
