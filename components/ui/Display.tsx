import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const sizes = {
  d1: "text-d1",
  d2: "text-d2",
  d3: "text-d3",
  d4: "text-d4",
};

type Props = {
  as?: "h1" | "h2" | "h3" | "h4";
  size: keyof typeof sizes;
  id?: string;
  className?: string;
  children: ReactNode;
};

/** Display heading at one of the four type-scale steps. */
export function Display({ as: Tag = "h2", size, id, className, children }: Props) {
  return (
    <Tag id={id} className={cn(sizes[size], className)}>
      {children}
    </Tag>
  );
}
