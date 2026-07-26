import Link from "next/link";
import { cn } from "@/lib/cn";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

/**
 * The one CTA Button/LinkButton component (07-design-system.md §5.13).
 * Baseline rules apply: tokens only, visible focus ring, min 44px touch
 * target for primary controls, disabled only while actually in-flight.
 */

type ButtonVariant = "solid" | "ghost" | "inverse";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "transition-colors duration-(--dur-fast) disabled:cursor-not-allowed disabled:opacity-60";

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-base", // 44px — the project's primary-control touch target
  lg: "h-12 px-6 text-base",
};

const variants: Record<ButtonVariant, string> = {
  // Filled orange always pairs with dark text — never white (2.28:1 fails WCAG)
  solid: "bg-brand-primary text-on-primary hover:bg-brand-primary-hover",
  ghost: "border border-border text-ink hover:bg-bg-alt",
  inverse: "bg-brand-light text-brand-dark hover:bg-brand-primary-tint",
};

interface SharedProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  children: ReactNode;
  className?: string;
}

type LinkButtonProps = SharedProps & { href: string } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "href" | "className" | "children"
  >;

type NativeButtonProps = SharedProps & { href?: undefined } & Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "className" | "children"
  >;

export type ButtonProps = LinkButtonProps | NativeButtonProps;

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin motion-reduce:animate-none"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>
  );
}

export function Button(props: ButtonProps) {
  const { variant = "solid", size = "md", isLoading, children, className } = props;
  const classes = cn(base, sizes[size], variants[variant], className);

  if ("href" in props && props.href) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- destructured only to exclude from `rest`
    const { href, variant: _v, size: _s, isLoading: _l, children: _c, className: _cn, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {isLoading && <Spinner />}
        {children}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- destructured only to exclude from `rest`
  const { variant: _v, size: _s, isLoading: _l, children: _c, className: _cn, disabled, ...rest } =
    props as NativeButtonProps;

  return (
    <button className={classes} disabled={isLoading || disabled} aria-busy={isLoading || undefined} {...rest}>
      {isLoading && <Spinner />}
      {children}
    </button>
  );
}
