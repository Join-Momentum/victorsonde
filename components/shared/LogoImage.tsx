import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  src: StaticImageData;
  alt: string;
  /** Tailwind height + margin classes, e.g. "h-[30px] mt-0.5 mb-1". */
  className: string;
};

/** A venture logo held at a fixed height and natural width, aligned to the start of its card. */
export function LogoImage({ src, alt, className }: Props) {
  return <Image src={src} alt={alt} className={cn("w-auto flex-none self-start", className)} />;
}
