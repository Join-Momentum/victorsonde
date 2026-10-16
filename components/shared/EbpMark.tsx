import { cn } from "@/lib/cn";

type Props = {
  large?: boolean;
  className?: string;
};

/** Typographic wordmark for Earn.Build.Protect (no logo file exists yet). */
export function EbpMark({ large, className }: Props) {
  const dot = <i className="not-italic text-orange">.</i>;
  return (
    <p
      className={cn(
        "font-display font-extrabold leading-none tracking-[-.03em]",
        large ? "text-d3" : "text-[1.45rem]",
        className,
      )}
    >
      Earn{dot}Build{dot}Protect
    </p>
  );
}
