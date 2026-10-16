import { Label } from "@/components/ui/Label";
import { cn } from "@/lib/cn";

type Props = {
  size: string;
  /** "wide" is the 16:10 dark panel; "standard" is the 4:3 light panel. */
  ratio: "wide" | "standard";
};

/** Stand-in panel for a product screenshot that has not been supplied yet. */
export function ScreenPlaceholder({ size, ratio }: Props) {
  const wide = ratio === "wide";
  return (
    <div
      className={cn(
        "grid place-items-center border-b",
        wide
          ? "aspect-[16/10] border-line-dark bg-[linear-gradient(135deg,#33251F,#241A18)]"
          : "aspect-[4/3] border-paper-2 bg-paper",
      )}
    >
      <Label as="span" tone={wide ? "inverse" : "muted"} className="text-center leading-[2]">
        Simulation screen
        <br />
        {size} · to supply
      </Label>
    </div>
  );
}
