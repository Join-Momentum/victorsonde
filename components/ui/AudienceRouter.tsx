import { CtaLink } from "@/components/ui/CtaLink";
import type { AudienceRoute } from "@/types/models";

/**
 * "What brings you here?" card router (03-homepage.md §24,
 * 02-sitemap.md §3.3 §7). Card-based, capped at 4 routes per
 * 01-strategy.md §4.2 rule 3 ("audience router where a page serves
 * multiple audiences — card-based, max 4 routes"); the homepage's 6-card
 * version is a distinct, larger instance built when the full homepage is.
 */
interface AudienceRouterProps {
  heading: string;
  routes: AudienceRoute[];
  position: string;
}

export function AudienceRouter({ heading, routes, position }: AudienceRouterProps) {
  const capped = routes.slice(0, 4);

  return (
    <section>
      <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
        <h2 className="text-2xl font-semibold text-ink sm:text-3xl">{heading}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {capped.map((route) => (
            <div key={route.label} className="flex flex-col gap-3 rounded-lg border border-border bg-surface p-6">
              <p className="text-base font-semibold text-ink">{route.label}</p>
              <p className="text-sm text-ink-muted">{route.description}</p>
              <CtaLink ctaId={route.ctaId} href={route.href} position={position} size="sm" className="self-start" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
