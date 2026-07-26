import Image from "next/image";
import type { GalleryImage } from "@/types/models";

/**
 * 6–8 image editorial photo essay (02-sitemap.md §3.2). Renders nothing
 * until curated, rights-cleared images exist (06-content-media.md §2.4)
 * — [MEDIA REQUIRED].
 */
interface PhotoEssayProps {
  images: GalleryImage[];
}

export function PhotoEssay({ images }: PhotoEssayProps) {
  if (images.length === 0) return null;

  return (
    <section>
      <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
        <div className="grid gap-4 sm:grid-cols-3">
          {images.map((image) => (
            <figure key={image.asset} className="relative aspect-[3/2] overflow-hidden rounded-lg">
              <Image src={image.asset} alt={image.altText} fill sizes="(min-width: 640px) 33vw, 100vw" style={{ objectFit: "cover" }} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
