import Link from "next/link";
import type { Build } from "@/types/models";

/**
 * Compact preview of the Five Builds (03-homepage.md §8 "One portfolio.
 * Five builds.", also used standalone per 02-sitemap.md §3.1's BuildStrip
 * component). This is the static/compact reading of the signature
 * system — the full interactive `ImpactPortfolioMap` (SVG canvas, node
 * click → detail panel, keyboard traversal) is separate, larger scope for
 * `/portfolio` (07-design-system.md §5.4); don't mistake this for that.
 */
interface BuildStripProps {
  builds: Build[];
}

export function BuildStrip({ builds }: BuildStripProps) {
  return (
    <section className="border-b border-border bg-bg-alt">
      <div className="mx-auto max-w-wide px-6 py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">One portfolio. Five builds.</h2>
          <Link href="/portfolio" className="text-sm font-medium text-brand-primary hover:underline">
            See the full map →
          </Link>
        </div>

        <ol className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-5">
          {builds.map((build, i) => (
            <li key={build.id} className="group bg-surface transition-colors hover:bg-bg-alt">
              <Link href={`/portfolio?build=${build.id}`} className="flex h-full flex-col gap-3 p-6">
                <span className="font-utility text-sm text-brand-primary">0{i + 1}</span>
                <h3 className="text-base font-semibold text-ink">{build.name}</h3>
                <p className="text-sm text-ink-muted">{build.definition}</p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
