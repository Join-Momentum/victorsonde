"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Display } from "@/components/ui/Display";
import { Label } from "@/components/ui/Label";

type Props = {
  title: string;
  onClose: () => void;
};

/** Video player dialog: closes on Escape, backdrop click or the close button. */
export function VideoModal({ title, onClose }: Props) {
  const closeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    closeRef.current?.querySelector("button")?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-90 grid place-items-center bg-ink/90 p-(--gut)"
    >
      <div data-tone="dark" className="w-full max-w-[760px] border border-line-dark bg-dark p-8 text-white">
        <Label tone="inverse">Video player</Label>
        <Display as="h3" size="d3" id="modalTitle" className="mb-3 text-white">
          {title}
        </Display>
        <p>
          In the build this opens an accessible modal player with keyboard trap, escape-to-close and captions.
          It&apos;s provider-agnostic: Mux, Vimeo or YouTube can be swapped in from config without touching the
          component. No autoplay with sound.
        </p>
        <div ref={closeRef}>
          <Button size="sm" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
