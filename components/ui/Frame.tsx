import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/cn";

const ratios = {
  "16/9": "aspect-video",
  "16/10": "aspect-[16/10]",
  "3/2": "aspect-[3/2]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "4/5": "aspect-[4/5]",
  "3/4": "aspect-[3/4]",
};

export type FrameRatio = keyof typeof ratios;

type Props = {
  src: StaticImageData;
  alt: string;
  /** Fixed aspect ratio, or "fill" to cover a parent that already has a size. */
  ratio: FrameRatio | "fill";
  /** Rendered width hint for responsive image selection. */
  sizes: string;
  /** CSS object-position, e.g. "50% 20%" to keep a face in frame. */
  focus?: string;
  priority?: boolean;
  /** Slowly zoom the image when an ancestor `.group` is hovered. */
  zoom?: boolean;
  className?: string;
  imageClassName?: string;
};

/** A photograph cropped to a fixed frame, so images are always sized by layout rather than their source dimensions. */
export function Frame({ src, alt, ratio, sizes, focus, priority, zoom, className, imageClassName }: Props) {
  return (
    <div className={cn("relative overflow-hidden", ratio === "fill" ? "h-full w-full" : ratios[ratio], className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        style={focus ? { objectPosition: focus } : undefined}
        className={cn(
          "object-cover",
          zoom && "transition-transform duration-[1200ms] ease-out-soft group-hover:scale-[1.04]",
          imageClassName,
        )}
      />
    </div>
  );
}
