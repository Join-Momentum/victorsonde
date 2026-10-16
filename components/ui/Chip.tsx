import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center rounded-full border px-4 py-2.5 font-mono text-[.7rem] uppercase leading-none tracking-[.12em] transition-colors duration-300";
const states = {
  on: "border-dark bg-dark text-white inv:border-orange inv:bg-orange inv:text-dark",
  off: "border-paper-2 bg-white text-fg hover:border-dark inv:border-line-dark inv:bg-transparent inv:text-sand inv:hover:border-sand-3",
};

/** Visual recipe shared by button chips and link chips. */
export function chipClasses(pressed: boolean) {
  return cn(base, pressed ? states.on : states.off);
}

type Props = {
  pressed: boolean;
  onClick: () => void;
  children: ReactNode;
};

/** Toggle button used in filter rows. */
export function Chip({ pressed, onClick, children }: Props) {
  return (
    <button type="button" aria-pressed={pressed} onClick={onClick} className={chipClasses(pressed)}>
      {children}
    </button>
  );
}
