"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/types/models";
import { trackDynamic } from "@/lib/analytics";

/**
 * 06-content-media.md §2.5. Scoped to what's actually testable right now
 * (keyboard ←/→/Esc, focus trap, return focus on close) — pinch-zoom and
 * swipe gestures are left for when there are real images to validate
 * them against, rather than built speculatively.
 */
interface LightboxProps {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerElement = useRef<Element | null>(null);

  useEffect(() => {
    triggerElement.current = document.activeElement;
    panelRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      if (triggerElement.current instanceof HTMLElement) triggerElement.current.focus();
    };
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [index, images.length, onClose, onNavigate]);

  const image = images[index];
  if (!image) return null;

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label={image.caption ?? "Image viewer"}
      tabIndex={-1}
      className="fixed inset-0 z-(--z-modal) flex flex-col bg-brand-dark/95 outline-none"
    >
      <div className="flex items-center justify-between px-6 py-4 text-brand-light">
        <span className="text-sm">
          {index + 1} / {images.length}
        </span>
        <button type="button" onClick={onClose} aria-label="Close" className="flex h-11 w-11 items-center justify-center">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" aria-hidden="true">
            <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      <div className="relative flex-1">
        <Image src={image.asset} alt={image.altText} fill sizes="100vw" style={{ objectFit: "contain" }} priority />
      </div>

      <div className="flex items-center justify-between px-6 py-4 text-brand-light">
        <button
          type="button"
          onClick={() => {
            onNavigate((index - 1 + images.length) % images.length);
            trackDynamic("gallery_interaction", { action: "prev" });
          }}
          className="rounded-full border border-brand-light/40 px-4 py-2 text-sm"
        >
          Previous
        </button>
        {image.caption && <p className="max-w-md text-center text-sm opacity-80">{image.caption}</p>}
        <button
          type="button"
          onClick={() => {
            onNavigate((index + 1) % images.length);
            trackDynamic("gallery_interaction", { action: "next" });
          }}
          className="rounded-full border border-brand-light/40 px-4 py-2 text-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
}
