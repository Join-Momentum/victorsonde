import Link from "next/link";
import type { CSSProperties } from "react";
import { disciplineLooks as looks, lightStreaks as streaks } from "@/content/disciplineLooks";
import { disciplines } from "@/content/disciplines";
import { cn } from "@/lib/cn";

function Tile({ slug, title, hidden }: { slug: string; title: string; hidden?: boolean }) {
  const look = looks[slug];
  return (
    <Link
      href={`/track/${slug}`}
      tabIndex={hidden ? -1 : undefined}
      style={{ backgroundImage: `${streaks}, ${look.gradient}` } as CSSProperties}
      className={cn(
        "group/tile relative -ml-3 flex h-full flex-none -skew-x-[14deg] items-center overflow-hidden px-7 no-underline first:ml-0",
        "shadow-[-10px_0_18px_-6px_rgb(0_0_0/.65)] transition-[filter] duration-300 hover:brightness-110",
      )}
    >
      <span className="flex skew-x-[14deg] items-center gap-3">
        <span
          aria-hidden
          className="grid h-8 w-8 flex-none place-items-center bg-black/25 font-display text-[.62rem] font-black italic tracking-[-.02em] text-white ring-1 ring-white/50 [clip-path:polygon(25%_0,75%_0,100%_50%,75%_100%,25%_100%,0_50%)]"
        >
          {look.mono}
        </span>
        <span className="whitespace-nowrap font-display text-[.82rem] font-extrabold uppercase italic leading-none tracking-[.02em] text-white [text-shadow:0_1px_8px_rgb(0_0_0/.35)]">
          {title}
        </span>
      </span>
      {/* Light sweep that crosses the tile on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-[130%] bg-linear-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-out-soft group-hover/tile:translate-x-[330%]"
      />
    </Link>
  );
}

/** Founding Cohort banner above the navigation: the five disciplines scroll past as gradient tiles. */
export function Topbar() {
  const tiles = disciplines.map((d) => ({ slug: d.slug, title: d.title }));
  return (
    <aside aria-label="Founding Cohort" data-tone="ink" className="relative isolate h-12 overflow-hidden bg-ink">
      {/* Scrolling track: the tile set appears twice so the loop is seamless. */}
      <div className="group/track absolute inset-0 flex motion-reduce:overflow-x-auto">
        <div className="flex h-full w-max motion-safe:animate-marquee motion-safe:group-hover/track:[animation-play-state:paused] max-sm:[animation-duration:26s]">
          {[0, 1].map((copy) => (
            <div key={copy} aria-hidden={copy === 1 || undefined} className="flex h-full pr-3">
              {tiles.map((t) => (
                <Tile key={t.slug} {...t} hidden={copy === 1} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Pinned label, cut on the same angle as the tiles */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center bg-ink pl-(--gut) pr-6 shadow-[14px_0_22px_-6px_rgb(0_0_0/.8)] [clip-path:polygon(0_0,100%_0,calc(100%-12px)_100%,0_100%)] max-sm:hidden">
        <span className="flex items-center gap-2.5 font-mono text-[.64rem] uppercase tracking-[.16em] text-white">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-orange motion-safe:animate-ping" />
            <span className="relative h-2 w-2 rounded-full bg-orange" />
          </span>
          Founding Cohort · Applications open
        </span>
      </div>

      {/* Pinned call to action */}
      <div className="absolute inset-y-0 right-0 z-10 flex items-center bg-ink pl-7 pr-(--gut) [clip-path:polygon(12px_0,100%_0,100%_100%,0_100%)]">
        <Link
          href="/cohort"
          className="group/cta relative inline-flex h-8 items-center gap-1.5 overflow-hidden rounded-full bg-orange px-4 font-display text-[.78rem] font-bold text-dark no-underline transition duration-300 ease-out-soft hover:bg-orange-lt active:scale-95"
        >
          Apply now
          <span aria-hidden className="transition-transform duration-300 group-hover/cta:translate-x-0.5">
            →
          </span>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-1/2 -skew-x-[20deg] bg-linear-to-r from-transparent via-white/60 to-transparent motion-safe:animate-sweep motion-reduce:hidden"
          />
        </Link>
      </div>
    </aside>
  );
}
