import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Display } from "./Display";
import { Eyebrow } from "./Eyebrow";

type Props = {
  num?: string;
  eyebrow?: ReactNode;
  /** Status pill shown above the eyebrow. */
  badge?: ReactNode;
  /** Headline; omit when composing the header from `children` instead. */
  title?: ReactNode;
  size?: "d2" | "d3";
  /** Supporting copy placed in the right-hand column on wide screens. */
  intro?: ReactNode;
  /** Replaces the default bottom spacing. */
  className?: string;
  /** Free-form header content (labels, badges, display text) shown under the index, in place of `title`/`intro`. */
  children?: ReactNode;
};

/**
 * Editorial section header: eyebrow on its own line, then the headline on the left
 * with the supporting copy bottom-aligned in the right-hand columns.
 */
export function SectionHead({ num, eyebrow, badge, title, size = "d2", intro, className, children }: Props) {
  if (children) {
    return (
      <header className={cn(className ?? "mb-(--head-gap)")}>
        {(num || eyebrow) && <Eyebrow num={num}>{eyebrow}</Eyebrow>}
        <div className="mt-5">{children}</div>
      </header>
    );
  }
  return (
    <header className={cn(className ?? "mb-(--head-gap)")}>
      {badge && <div className="mb-5">{badge}</div>}
      {(num || eyebrow) && <Eyebrow num={num}>{eyebrow}</Eyebrow>}
      <div className="mt-5 grid gap-x-12 gap-y-6 min-[1025px]:grid-cols-12 min-[1025px]:items-end">
        <Display
          size={size}
          className={cn(
            "inv:text-white",
            intro ? "min-[1025px]:col-span-7" : "max-w-[20ch] min-[1025px]:col-span-10",
          )}
        >
          {title}
        </Display>
        {intro && (
          <div className="text-lede text-muted inv:text-sand-2 min-[1025px]:col-span-5 min-[1025px]:pb-1 [&>p]:mb-0">
            {intro}
          </div>
        )}
      </div>
    </header>
  );
}
