import Image from "next/image";
import { EvidenceFigure } from "@/components/ui/EvidenceFigure";
import type { MediaLogo } from "@/content/media";
import { cn } from "@/lib/cn";

const panels = {
  wide: { pad: "px-7 py-11", width: "max-w-[78%]" },
  stacked: { pad: "px-7 py-[34px]", width: "max-w-[52%]" },
  "stacked-roomy": { pad: "px-7 py-9", width: "max-w-[52%]" },
};

/** A logo shown on its intended background, captioned like the photographs. */
export function LogoPanel({ item }: { item: MediaLogo }) {
  const panel = panels[item.panel];
  return (
    <EvidenceFigure
      tab={item.tab}
      title={item.title}
      rows={item.rows}
      surface={item.surface === "white" ? "default" : item.surface}
      media={
        <div className={cn("grid place-items-center", panel.pad, item.surface === "white" && "bg-white")}>
          <Image src={item.image} alt={item.alt} className={cn("h-auto w-auto", panel.width)} />
        </div>
      }
    />
  );
}
