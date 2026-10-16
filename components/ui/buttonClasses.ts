import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "md" | "sm";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-orange bg-orange text-dark hover:-translate-y-0.5 hover:border-orange-lt hover:bg-orange-lt hover:shadow-[0_12px_26px_-14px_rgba(241,152,23,.6)] active:translate-y-0 active:shadow-none",
  secondary:
    "border-fg/25 bg-transparent hover:border-fg hover:bg-fg hover:text-white inv:border-white/30 inv:hover:border-white inv:hover:bg-white inv:hover:text-dark",
};

const sizes: Record<ButtonSize, string> = {
  md: "min-h-[3.25rem] px-[1.6em] text-[.98rem]",
  sm: "min-h-[2.75rem] px-[1.25em] text-[.88rem]",
};

/** Shared visual recipe for link- and button-styled buttons. */
export function buttonClasses(variant: ButtonVariant, size: ButtonSize, className?: string) {
  return cn(
    "group/btn inline-flex items-center gap-[.6em] rounded-xs border font-display font-semibold tracking-[-.01em] no-underline transition duration-300 ease-out-soft active:duration-75",
    variants[variant],
    sizes[size],
    className,
  );
}
