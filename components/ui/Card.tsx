import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const variants = {
  default: "border-paper-2 bg-white inv:border-line-dark inv:bg-dark-soft/70",
  accent: "border-orange/70 bg-white inv:bg-dark-soft/70",
  flag: "border-paper-2 border-l-[3px] border-l-orange bg-flag",
  placeholder: "justify-center border-dashed border-hairline bg-transparent",
  feature: "border-dark bg-dark",
};

const paddings = {
  default: "p-[clamp(24px,2.6vw,40px)]",
  flag: "px-[clamp(22px,2.4vw,34px)] py-[clamp(20px,2.2vw,30px)]",
  none: "p-0",
};

type Props = {
  variant?: keyof typeof variants;
  padding?: keyof typeof paddings;
  as?: "div" | "article";
  /** Mark the card itself as a dark surface so its contents switch to inverse styling. */
  dark?: boolean;
  /** Lift on hover; use when the whole card leads somewhere. */
  interactive?: boolean;
  className?: string;
  children: ReactNode;
};

/** Bordered content panel. */
export function Card({ variant = "default", padding, as: Tag = "div", dark, interactive, className, children }: Props) {
  const pad = padding ?? (variant === "flag" ? "flag" : variant === "feature" ? "none" : "default");
  return (
    <Tag
      data-tone={dark ? "dark" : undefined}
      className={cn(
        "group relative flex flex-col gap-3 border",
        variants[variant],
        paddings[pad],
        interactive &&
          "transition duration-500 ease-out-soft hover:-translate-y-1 hover:border-orange/60 hover:shadow-lift",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
