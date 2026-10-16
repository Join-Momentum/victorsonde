import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const widths = {
  wrap: "max-w-[1320px]",
  wide: "max-w-[1520px]",
  narrow: "max-w-[760px]",
};

type Props = {
  size?: keyof typeof widths;
  className?: string;
  children: ReactNode;
};

/** Centred, gutter-padded content column. */
export function Container({ size = "wrap", className, children }: Props) {
  return <div className={cn(widths[size], "mx-auto px-(--gut)", className)}>{children}</div>;
}
