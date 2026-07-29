"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import type { Track } from "@/types/models";

/**
 * §12 — 13 domain tracks, filterable cards. `challengeFraming`/
 * `exampleChallengeTeaser` are written per track closer to cohort launch
 * (content/tracks.ts) — cards render name-only until then. The
 * "Open this cohort" filter only appears once at least one track has
 * `availableThisCohort` set, so it's never a dead-end control.
 */
interface TrackGridProps {
  tracks: Track[];
}

export function TrackGrid({ tracks }: TrackGridProps) {
  const [openOnly, setOpenOnly] = useState(false);
  const hasCohortFlag = tracks.some((t) => t.availableThisCohort !== undefined);
  const visible = openOnly ? tracks.filter((t) => t.availableThisCohort) : tracks;

  return (
    <div className="flex flex-col gap-6">
      {hasCohortFlag && (
        <div role="group" aria-label="Filter tracks" className="flex gap-2">
          <button
            type="button"
            aria-pressed={!openOnly}
            onClick={() => setOpenOnly(false)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm",
              !openOnly ? "border-brand-primary bg-brand-primary-tint text-brand-dark" : "border-border text-ink",
            )}
          >
            All tracks
          </button>
          <button
            type="button"
            aria-pressed={openOnly}
            onClick={() => setOpenOnly(true)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm",
              openOnly ? "border-brand-primary bg-brand-primary-tint text-brand-dark" : "border-border text-ink",
            )}
          >
            Open this cohort
          </button>
        </div>
      )}
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((track) => (
          <li key={track.slug} className="rounded-lg border border-border bg-surface p-5">
            <p className="font-semibold text-ink">{track.name}</p>
            {track.challengeFraming && <p className="mt-2 text-sm text-ink-muted">{track.challengeFraming}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
