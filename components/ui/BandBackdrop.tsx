import { cn } from "@/lib/cn";

type Props = {
  /** Where the warm glow sits. */
  glow?: "top-right" | "top-left" | "center" | "none";
  grid?: boolean;
};

const glows = {
  "top-right": "bg-[radial-gradient(60%_70%_at_88%_0%,rgba(241,152,23,.16),transparent_70%)]",
  "top-left": "bg-[radial-gradient(60%_70%_at_8%_0%,rgba(241,152,23,.14),transparent_70%)]",
  center: "bg-[radial-gradient(50%_60%_at_50%_45%,rgba(241,152,23,.16),transparent_70%)]",
  none: "",
};

/** Decorative depth for dark surfaces: a warm glow, film grain and an optional hairline grid. */
export function BandBackdrop({ glow = "top-right", grid }: Props) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      {grid && (
        <div className="bg-hairgrid absolute inset-0 [mask-image:radial-gradient(70%_80%_at_70%_20%,#000,transparent)]" />
      )}
      <div className={cn("absolute inset-0", glows[glow])} />
      <div className="bg-grain absolute inset-0 opacity-[.07] mix-blend-overlay" />
    </div>
  );
}
