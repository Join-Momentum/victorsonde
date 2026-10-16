import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  children: ReactNode;
};

/** Small mono label at the top of a card; turns orange on dark surfaces. */
export function Kicker({ className, children }: Props) {
  return (
    <p
      className={cn(
        "mb-1 font-mono text-[.66rem] uppercase leading-[1.4] tracking-[.16em] text-orange-ink inv:text-orange",
        className,
      )}
    >
      {children}
    </p>
  );
}
