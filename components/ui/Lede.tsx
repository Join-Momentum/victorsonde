import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  inverse?: boolean;
  id?: string;
  className?: string;
  children: ReactNode;
};

/** Large introductory paragraph. */
export function Lede({ inverse, id, className, children }: Props) {
  return (
    <p id={id} className={cn("text-lede", inverse && "text-sand", className)}>
      {children}
    </p>
  );
}
