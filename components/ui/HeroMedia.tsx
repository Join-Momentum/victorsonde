"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * Ambient hero video loop with the required WCAG 2.2.2 pause affordance
 * (loops here run 6–10s, over the 5s threshold that mandates one) and a
 * reduced-motion / save-data fallback to a static poster
 * (03-homepage.md §3, 07-design-system.md §5.3).
 */
interface HeroMediaProps {
  src: string;
  poster: string;
  alt: string;
  className?: string;
}

export function HeroMedia({ src, poster, alt, className }: HeroMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canAnimate, setCanAnimate] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // One-off browser-capability detection on mount (matchMedia/connection
    // aren't available during SSR, so this can't be derived at render time).
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
      ?.saveData;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCanAnimate(!prefersReducedMotion && !saveData);
  }, []);

  if (!canAnimate) {
    return (
      <Image src={poster} alt={alt} fill sizes="100vw" priority className={className} style={{ objectFit: "cover" }} />
    );
  }

  return (
    <div className="relative h-full w-full">
      <video
        ref={videoRef}
        className={className}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        autoPlay
        aria-hidden="true"
      />
      <button
        type="button"
        onClick={() => {
          const video = videoRef.current;
          if (!video) return;
          if (isPaused) {
            video.play();
          } else {
            video.pause();
          }
          setIsPaused((v) => !v);
        }}
        className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand-dark/60 text-brand-light backdrop-blur"
        aria-label={isPaused ? "Play background video" : "Pause background video"}
      >
        {isPaused ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
          </svg>
        )}
      </button>
    </div>
  );
}
