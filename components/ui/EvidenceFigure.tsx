import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Frame, type FrameRatio } from "./Frame";

export type EvidenceRow = { label: string; value: ReactNode };

const surfaces = {
  default: "border-paper-2 bg-white inv:border-line-dark inv:bg-dark-soft/70",
  dark: "border-dark bg-dark",
  paper: "border-paper-2 bg-paper",
};

type Props = {
  tab: string;
  title: string;
  rows?: EvidenceRow[];
  image?: { src: StaticImageData; alt: string; focus?: string };
  /** Custom media slot (logo panel, placeholder) used instead of an image. */
  media?: ReactNode;
  /** Portrait crop instead of the default landscape. */
  tall?: boolean;
  /** Overrides the crop chosen by `tall`. */
  ratio?: FrameRatio;
  /** Rendered width hint, e.g. "(max-width: 880px) 100vw, 33vw". */
  sizes?: string;
  surface?: keyof typeof surfaces;
  className?: string;
};

/** A photograph filed like an exhibit: index tab, title, and what / where / role rows. */
export function EvidenceFigure({
  tab,
  title,
  rows = [],
  image,
  media,
  tall,
  ratio,
  sizes = "(max-width: 880px) 100vw, 40vw",
  surface = "default",
  className,
}: Props) {
  return (
    <figure
      data-tone={surface === "dark" ? "dark" : undefined}
      className={cn("group m-0 border transition-shadow duration-500 hover:shadow-lift", surfaces[surface], className)}
    >
      {image ? (
        <Frame
          src={image.src}
          alt={image.alt}
          ratio={ratio ?? (tall ? "4/5" : "4/3")}
          focus={image.focus ?? "50% 25%"}
          sizes={sizes}
          zoom
        />
      ) : (
        media
      )}
      <figcaption className="relative px-5 pb-5 pt-6">
        <span className="absolute -top-3 left-5 bg-orange px-2 py-1 font-mono text-[.62rem] font-semibold leading-none tracking-[.14em] text-dark">
          {tab}
        </span>
        <h4 className="text-[1.08rem] font-semibold tracking-[-.015em] inv:text-white">{title}</h4>
        {rows.length > 0 && (
          <div className="mt-3 grid gap-1.5 border-t border-paper-2 pt-3 font-mono text-[.74rem] leading-[1.55] text-muted inv:border-line-dark inv:text-muted-dk">
            {rows.map((row) => (
              <p key={row.label} className="m-0 grid grid-cols-[52px_1fr] gap-3">
                <span className="pt-[.2em] text-[.62rem] uppercase tracking-[.12em] text-orange-ink inv:text-orange">
                  {row.label}
                </span>
                <span>{row.value}</span>
              </p>
            ))}
          </div>
        )}
      </figcaption>
    </figure>
  );
}
