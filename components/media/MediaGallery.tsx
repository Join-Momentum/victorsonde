"use client";

import { useState } from "react";
import { Chip } from "@/components/ui/Chip";
import { ChipRow } from "@/components/ui/ChipRow";
import { EvidenceFigure } from "@/components/ui/EvidenceFigure";
import { VideoButton } from "@/components/video/VideoButton";
import { mediaFilters, mediaItems, type MediaCategory, type MediaItem } from "@/content/media";
import { LogoPanel } from "./LogoPanel";

function MediaTile({ item }: { item: MediaItem }) {
  switch (item.kind) {
    case "photo":
      return (
        <EvidenceFigure
          tab={item.tab}
          title={item.title}
          rows={item.rows}
          tall={item.tall}
          image={{ src: item.image, alt: item.alt }}
        />
      );
    case "logo":
      return <LogoPanel item={item} />;
    case "video":
      return <VideoButton video={item.video} thumbnail={item.thumbnail} meta={item.meta} title={item.title} />;
  }
}

/** Filterable masonry archive of photographs, logos and videos. */
export function MediaGallery() {
  const [filter, setFilter] = useState<MediaCategory | "all">("all");
  const visible = mediaItems.filter((item) => filter === "all" || item.category === filter);

  return (
    <>
      <ChipRow label="Filter media">
        {mediaFilters.map((f) => (
          <Chip key={f.value} pressed={filter === f.value} onClick={() => setFilter(f.value)}>
            {f.label}
          </Chip>
        ))}
      </ChipRow>
      <div className="columns-1 gap-x-[clamp(16px,2vw,26px)] min-[601px]:columns-2 min-[981px]:columns-3">
        {visible.map((item) => (
          <div key={item.id} className="mb-[clamp(16px,2vw,26px)] break-inside-avoid">
            <MediaTile item={item} />
          </div>
        ))}
      </div>
    </>
  );
}
