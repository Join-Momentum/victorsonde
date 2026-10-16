import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type Step = { title: string; detail: ReactNode };

const tones = {
  dark: { line: "border-white/12", num: "text-orange", title: "text-white", detail: "text-sand-3" },
  light: { line: "border-paper-2", num: "text-orange-ink", title: "text-fg", detail: "text-muted" },
};

type Props = {
  steps: Step[];
  tone?: keyof typeof tones;
  className?: string;
};

/** Numbered process list (01, 02, …) with a title and short explanation per step. */
export function Steps({ steps, tone = "dark", className }: Props) {
  const t = tones[tone];
  return (
    <ol className={cn("m-0 grid list-none border-t p-0", t.line, className)}>
      {steps.map((step, i) => (
        <li
          key={step.title}
          className={cn(
            "m-0 grid grid-cols-[3rem_minmax(0,1fr)] items-baseline gap-x-4 border-b py-6 pl-0 sm:grid-cols-[4rem_minmax(0,1fr)]",
            t.line,
          )}
        >
          <span className={cn("row-span-2 font-mono text-[.78rem] tracking-[.08em]", t.num)}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <b className={cn("col-start-2 block min-w-0 font-display text-[1.2rem] font-semibold tracking-[-.018em]", t.title)}>
            {step.title}
          </b>
          <span className={cn("col-start-2 mt-1.5 min-w-0 text-[1rem] leading-[1.55]", t.detail)}>{step.detail}</span>
        </li>
      ))}
    </ol>
  );
}
