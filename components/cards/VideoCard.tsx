import Image from "next/image";
import Link from "next/link";
import type { VideoItem } from "@/types/models";

export function VideoCard({ video }: { video: VideoItem }) {
  const minutes = Math.round(video.duration / 60);
  return (
    <article className="group relative flex flex-col gap-2">
      <div className="relative aspect-video overflow-hidden rounded-lg bg-bg-alt">
        {video.thumbnail && <Image src={video.thumbnail} alt="" fill sizes="400px" style={{ objectFit: "cover" }} />}
        <span className="absolute right-2 bottom-2 rounded bg-brand-dark/80 px-1.5 py-0.5 text-xs text-brand-light">
          {minutes}m
        </span>
      </div>
      <h3 className="font-semibold text-ink">
        <Link href={`/videos/${video.slug}`} className="after:absolute after:inset-0">
          {video.title}
        </Link>
      </h3>
      {video.category && <p className="text-xs text-ink-muted">{video.category}</p>}
    </article>
  );
}
