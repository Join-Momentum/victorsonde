import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const tones = {
  muted: "text-muted",
  amber: "text-orange-ink",
  inverse: "text-orange",
  soft: "text-muted-dk",
};

type Props = {
  tone?: keyof typeof tones;
  as?: "p" | "span";
  className?: string;
  children: ReactNode;
};

/** Small mono uppercase eyebrow label. */
export function Label({ tone = "muted", as: Tag = "p", className, children }: Props) {
  return (
    <Tag
      className={cn(
        "font-mono text-[.7rem] font-medium uppercase tracking-[.18em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
