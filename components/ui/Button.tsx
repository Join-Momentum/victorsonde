import type { ReactNode } from "react";
import { buttonClasses, type ButtonSize, type ButtonVariant } from "./buttonClasses";

type Props = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  id?: string;
  className?: string;
  children: ReactNode;
};

/** An in-page action styled as a button. */
export function Button({ variant = "primary", size = "md", onClick, id, className, children }: Props) {
  return (
    <button id={id} type="button" onClick={onClick} className={buttonClasses(variant, size, className)}>
      {children}
    </button>
  );
}
