import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Logo } from "@/components/site/Logo";
import { Hero } from "@/components/ui/Hero";
import { CtaLink } from "@/components/ui/CtaLink";
import { EnquiryWizard } from "@/components/forms/EnquiryWizard";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { getCampaign, campaigns } from "@/content/campaigns";
import { toClientRoute, getLeadRoute } from "@/content/routes";

export function generateStaticParams() {
  return campaigns.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const campaign = getCampaign(slug);
  return { title: campaign?.hero.headline ?? "Campaign", robots: { index: false } };
}

/**
 * `/c/[slug]` (02-sitemap.md §3.10) — deliberately outside the (site)
 * route group, so it gets none of the standard Header/Footer chrome.
 * One page, one action: minimal logo-only top bar (links home), no
 * global nav, a single conversion module, and a legal-links-only footer.
 * Sticky mobile bottom CTA per spec — implemented via a fixed bar that
 * only shows below `lg`.
 */
export default async function CampaignPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const campaign = getCampaign(slug);
  if (!campaign) notFound();

  const route = campaign.conversion.formRoute ? getLeadRoute(campaign.conversion.formRoute) : undefined;

  return (
    <div className="flex min-h-full flex-col">
      <header className="border-b border-border px-6 py-4">
        <Logo />
      </header>

      <main className="flex-1 pb-20 lg:pb-0">
        <Hero headline={campaign.hero.headline} supportingCopy={campaign.hero.supportingCopy} />

        {campaign.offerBlocks.length > 0 && (
          <section className="mx-auto max-w-wide px-6 py-16">
            <div className="grid gap-6 sm:grid-cols-3">
              {campaign.offerBlocks.slice(0, 3).map((block) => (
                <div key={block.heading}>
                  <h2 className="font-semibold text-ink">{block.heading}</h2>
                  <p className="mt-1 text-sm text-ink-muted">{block.body}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="bg-bg-alt">
          <div className="mx-auto max-w-wide px-6 py-16">
            {campaign.conversion.type === "form" && route ? (
              <EnquiryWizard route={toClientRoute(route)} />
            ) : campaign.conversion.cta ? (
              <CtaLink ctaId={campaign.conversion.cta.ctaId} label={campaign.conversion.cta.label} href={campaign.conversion.cta.href} position={`campaign-${campaign.slug}`} />
            ) : null}
          </div>
        </section>

        {campaign.faq && campaign.faq.length > 0 && (
          <section className="mx-auto max-w-wide px-6 py-16">
            <FaqAccordion items={campaign.faq} />
          </section>
        )}
      </main>

      <footer className="border-t border-border px-6 py-6 text-center text-xs text-ink-muted">
        <a href="/legal/privacy" className="hover:underline">Privacy</a> ·{" "}
        <a href="/legal/terms" className="hover:underline">Terms</a>
      </footer>

      {/* Sticky mobile bottom CTA */}
      {campaign.conversion.cta && (
        <div className="fixed inset-x-0 bottom-0 border-t border-border bg-surface p-4 lg:hidden">
          <CtaLink
            ctaId={campaign.conversion.cta.ctaId}
            label={campaign.conversion.cta.label}
            href={campaign.conversion.cta.href}
            position={`campaign-${campaign.slug}-sticky`}
            className="w-full"
          />
        </div>
      )}
    </div>
  );
}
