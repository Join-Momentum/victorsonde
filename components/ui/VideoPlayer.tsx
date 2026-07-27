"use client";

import { useState } from "react";
import Image from "next/image";
import { trackDynamic } from "@/lib/analytics";

/**
 * Consent-aware embed (06-content-media.md §3.4) — this is both the
 * privacy and the performance strategy: no third-party JS/iframe loads
 * until the poster facade is clicked, and even then via
 * youtube-nocookie.com. Only YouTube is wired; extend the `provider`
 * union + embedUrl building when a Vimeo video actually needs it.
 */
interface VideoPlayerProps {
  provider: "youtube" | "native";
  videoId: string;
  poster: string;
  title: string;
  context: string;
  /** [MEDIA REQUIRED] until real captions exist — captions are a hard
   * requirement for featured videos (06-content-media.md §3.4), enforced
   * as a content check, not by this component refusing to render. */
  captionsUrl?: string;
}

export function VideoPlayer({ provider, videoId, poster, title, context, captionsUrl }: VideoPlayerProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    if (provider === "youtube") {
      return (
        <iframe
          className="aspect-video w-full rounded-lg"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }
    // The <track> is real when captionsUrl exists; when it doesn't, that's
    // a content gap to fix in content/videos.ts (the transcript is still
    // shown separately on the page), not something this component should
    // refuse to render over.
    return (
      // eslint-disable-next-line jsx-a11y/media-has-caption
      <video className="aspect-video w-full rounded-lg" src={videoId} poster={poster} controls autoPlay>
        {captionsUrl && <track kind="captions" src={captionsUrl} label="Captions" default />}
      </video>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        setLoaded(true);
        trackDynamic("video_play", { video: videoId, context });
      }}
      className="group relative aspect-video w-full overflow-hidden rounded-lg"
    >
      <Image src={poster} alt="" fill sizes="768px" style={{ objectFit: "cover" }} />
      <span className="absolute inset-0 flex items-center justify-center bg-brand-dark/30">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-light/90 transition-transform group-hover:scale-110">
          <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 text-brand-dark" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
      <span className="sr-only">Play {title} (loads {provider === "youtube" ? "YouTube" : "video"})</span>
    </button>
  );
}
