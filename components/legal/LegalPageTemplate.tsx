import Link from "next/link";
import type { LegalPageContent } from "@/types/models";

/**
 * Shared Tier-3 legal/utility template (02-sitemap.md §5): plain-prose,
 * sticky in-page ToC on desktop, last-updated date, contact block.
 * Sections without real `body` text render an honest pending note rather
 * than invented legal copy — see types/models.ts LegalSection.
 */
export function LegalPageTemplate({ title, lastUpdated, sections }: LegalPageContent) {
  return (
    <section>
      <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <h1 className="text-3xl font-semibold text-ink">{title}</h1>
            {lastUpdated && <p className="mt-2 text-sm text-ink-muted">Last updated {lastUpdated}</p>}
            <nav aria-label="Sections" className="mt-6 hidden lg:block">
              <ul className="flex flex-col gap-2 text-sm">
                {sections.map((section) => (
                  <li key={section.heading}>
                    <a
                      href={`#${slugify(section.heading)}`}
                      className="text-ink-muted hover:text-brand-primary"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="mt-10 flex max-w-prose flex-col gap-10 lg:mt-0">
            {sections.map((section) => (
              <div key={section.heading} id={slugify(section.heading)} className="scroll-mt-24">
                <h2 className="text-xl font-semibold text-ink">{section.heading}</h2>
                {section.body ? (
                  <div className="mt-3 flex flex-col gap-3 text-ink-muted">
                    {section.body.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                ) : (
                  <p className="mt-3 text-sm text-ink-muted italic">
                    This section is being finalised and will be published here.
                  </p>
                )}
              </div>
            ))}

            <div className="border-t border-border pt-8">
              <h2 className="text-xl font-semibold text-ink">Questions</h2>
              <p className="mt-3 text-ink-muted">
                For questions about this page,{" "}
                <Link href="/contact" className="font-medium text-brand-primary hover:underline">
                  get in touch
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
