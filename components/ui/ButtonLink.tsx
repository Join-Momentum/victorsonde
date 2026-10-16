import Link from "next/link";
import type { ReactNode } from "react";
import { Arrow } from "./Arrow";
import { buttonClasses, type ButtonSize, type ButtonVariant } from "./buttonClasses";

type Props = {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
  external?: boolean;
  className?: string;
  children: ReactNode;
};

/** Navigation styled as a button. */
export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  arrow,
  external,
  className,
  children,
}: Props) {
  const classes = buttonClasses(variant, size, className);
  const content = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  );

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noopener">
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}
