import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * clsx + tailwind-merge. Plain clsx only concatenates class strings — when
 * two classes target the same CSS property (e.g. a variant's `text-ink`
 * and a caller's override `text-brand-light`), which one wins depends on
 * Tailwind's internal stylesheet order, not on which appears later in the
 * className string. That silently broke a CtaBand button (invisible
 * text) before this existed. Use `cn()` anywhere a component accepts a
 * `className` prop meant to override its own default classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
