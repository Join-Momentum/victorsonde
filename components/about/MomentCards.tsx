import Image from "next/image";
import type { StoryMoment } from "@/types/models";

/**
 * "Turning points" — 3–5 moment cards (02-sitemap.md §3.2). Renders
 * nothing until real moments exist.
 */
interface MomentCardsProps {
  moments: StoryMoment[];
}

export function MomentCards({ moments }: MomentCardsProps) {
  if (moments.length === 0) return null;

  return (
    <section className="bg-bg-alt">
      <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
        <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">Turning points</h2>
        <ol className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
          {moments.map((moment) => (
            <li key={`${moment.year}-${moment.title}`} className="flex flex-col gap-3 bg-surface p-6">
              {moment.image && (
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-md">
                  <Image src={moment.image} alt="" fill sizes="360px" style={{ objectFit: "cover" }} />
                </div>
              )}
              <span className="font-utility text-sm text-brand-primary">
                {moment.year} — {moment.place}
              </span>
              <h3 className="text-base font-semibold text-ink">{moment.title}</h3>
              <p className="text-sm text-ink-muted">{moment.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
