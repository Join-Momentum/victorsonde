"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/types/models";
import { Lightbox } from "@/components/ui/Lightbox";
import { trackDynamic } from "@/lib/analytics";

export function AlbumGrid({ images, album }: { images: GalleryImage[]; album: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, i) => (
          <button
            key={image.asset}
            type="button"
            onClick={() => {
              setOpenIndex(i);
              trackDynamic("gallery_interaction", { action: "open_lightbox", album });
            }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg"
          >
            <Image src={image.asset} alt={image.altText} fill sizes="(min-width: 1024px) 33vw, 50vw" style={{ objectFit: "cover" }} />
          </button>
        ))}
      </div>
      {openIndex !== null && (
        <Lightbox images={images} index={openIndex} onClose={() => setOpenIndex(null)} onNavigate={setOpenIndex} />
      )}
    </>
  );
}
