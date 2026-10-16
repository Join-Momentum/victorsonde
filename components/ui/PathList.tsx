import Link from "next/link";
import { cn } from "@/lib/cn";

export type PathItem = {
  href: string;
  title: string;
  detail: string;
  action: string;
  lead?: boolean;
};

type Props = {
  items: PathItem[];
  topRule?: boolean;
  /** Smaller type for use in a narrow column. */
  compact?: boolean;
};

/** Numbered list of routes into the site ("Pick your door"). */
export function PathList({ items, topRule = true, compact }: Props) {
  return (
    <div className={cn(topRule && "border-t border-paper-2")}>
      {items.map((item, i) => (
        <Link
          key={item.title}
          href={item.href}
          className={cn(
            "group grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-3 no-underline transition-[background-color,padding] duration-500 ease-out-soft sm:grid-cols-[auto_1fr_auto] sm:gap-x-8",
            item.lead
              ? "mb-1 bg-dark px-6 py-8 text-white hover:bg-dark-soft sm:px-9"
              : cn(
                  "border-b border-paper-2 hover:bg-[linear-gradient(90deg,rgba(241,152,23,.12),transparent_70%)] hover:pl-4",
                  compact ? "py-6" : "py-8",
                ),
          )}
        >
          <span
            className={cn(
              "self-start pt-2 font-mono text-[.72rem] tracking-[.12em]",
              item.lead ? "text-orange" : "text-orange-ink",
            )}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h4
              className={cn(
                "font-semibold tracking-[-.025em]",
                compact ? "text-[clamp(1.15rem,1.6vw,1.4rem)]" : "text-[clamp(1.3rem,2.3vw,2rem)]",
              )}
            >
              {item.title}
            </h4>
            <p className={cn("mb-0 mt-2 max-w-[60ch] text-[1rem]", item.lead ? "text-sand-2" : "text-muted")}>
              {item.detail}
            </p>
          </div>
          <span
            className={cn(
              "col-start-2 inline-flex items-center justify-self-start rounded-full border px-4 py-2.5 font-mono text-[.68rem] uppercase leading-none tracking-[.12em] transition-colors duration-300 sm:col-start-3 sm:justify-self-end",
              item.lead
                ? "border-orange bg-orange text-dark"
                : "border-paper-2 text-muted group-hover:border-dark group-hover:bg-dark group-hover:text-white",
            )}
          >
            {item.action}
          </span>
        </Link>
      ))}
    </div>
  );
}
