"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from "react";
import { VideoModal } from "./VideoModal";

type VideoModalApi = { open: (title: string) => void };

const VideoModalContext = createContext<VideoModalApi | null>(null);

/** Owns the open/closed state of the single site-wide video player and restores focus on close. */
export function VideoModalProvider({ children }: { children: ReactNode }) {
  const [title, setTitle] = useState<string | null>(null);
  const opener = useRef<HTMLElement | null>(null);

  const open = useCallback((next: string) => {
    opener.current = document.activeElement as HTMLElement | null;
    setTitle(next);
  }, []);

  const close = useCallback(() => {
    setTitle(null);
    opener.current?.focus();
  }, []);

  const api = useMemo(() => ({ open }), [open]);

  return (
    <VideoModalContext.Provider value={api}>
      {children}
      {title !== null && <VideoModal title={title} onClose={close} />}
    </VideoModalContext.Provider>
  );
}

export function useVideoModal(): VideoModalApi {
  const ctx = useContext(VideoModalContext);
  if (!ctx) throw new Error("useVideoModal must be used inside <VideoModalProvider>");
  return ctx;
}
