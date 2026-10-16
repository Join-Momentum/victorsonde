"use client";

import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useVideoModal } from "./VideoModalProvider";

type Props = {
  /** Title shown in the player when opened. */
  video: string;
  thumbnail: StaticImageData;
  thumbnailAlt?: string;
  meta: ReactNode;
  title: string;
  small?: boolean;
  className?: string;
};

/** Video thumbnail with play button that opens the site video player. */
export function VideoButton({ video, thumbnail, thumbnailAlt = "", meta, title, small, className }: Props) {
  const { open } = useVideoModal();

  return (
    <button
      type="button"
      onClick={() => open(video)}
      className={cn(
        "group relative block w-full cursor-pointer overflow-hidden border border-line-dark bg-black p-0 text-left",
        className,
      )}
    >
      <Image
        src={thumbnail}
        alt={thumbnailAlt}
        sizes={small ? "(max-width: 620px) 100vw, 33vw" : "100vw"}
        className="aspect-video h-auto w-full object-cover opacity-60 transition duration-300 group-hover:scale-[1.02] group-hover:opacity-[.78]"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <i className="grid h-[66px] w-[66px] place-items-center rounded-full bg-orange pl-1 text-[1.1rem] not-italic text-dark">
          ▶
        </i>
      </span>
      <span data-tone="ink" className="absolute inset-x-0 bottom-0 block bg-[linear-gradient(transparent,rgba(26,26,26,.94))] p-4 text-white">
        <span className="font-mono text-[.66rem] tracking-[.12em] text-orange">{meta}</span>
        <span
          className={cn(
            "mt-1 block font-display font-extrabold leading-[.98] tracking-[-.03em] text-white",
            small ? "text-[.98rem]" : "text-[1.1rem]",
          )}
        >
          {title}
        </span>
      </span>
    </button>
  );
}
