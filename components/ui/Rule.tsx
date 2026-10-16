import { cn } from "@/lib/cn";

/** Horizontal hairline divider. */
export function Rule({ className }: { className?: string }) {
  return <hr className={cn("m-0 h-px border-0 bg-paper-2 inv:bg-line-dark", className)} />;
}
