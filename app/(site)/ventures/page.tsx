import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { VentureCard } from "@/components/cards/VentureCard";
import { CtaBand } from "@/components/ui/CtaBand";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { getVentures } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ventures",
  description: "Five ventures, one mission — Join Momentum, Career Bridge Foundation, Evidentize.IO, Design Intelligence Lab and Financial Resilience & Protection.",
};

const comparisonRows = [
  { intent: "I want to hire proven talent", venture: "Evidentize.IO", href: "/ventures/evidentize" },
  { intent: "I want to fund or sponsor impact", venture: "Design Intelligence Lab", href: "/design-intelligence-lab" },
  { intent: "I need transformation or capability delivery", venture: "Join Momentum", href: "/ventures/join-momentum" },
  { intent: "I want to build my career portfolio", venture: "Career Bridge Foundation", href: "/ventures/career-bridge" },
  { intent: "I want to understand financial resilience", venture: "Financial Resilience & Protection", href: "/financial-resilience" },
];

/** `/ventures` (02-sitemap.md §2 row 7). */
export default function VenturesPage() {
  const ventures = getVentures();

  return (
    <>
      <StructuredData data={breadcrumbList([{ name: "Home", url: "/" }, { name: "Ventures", url: "/ventures" }])} />

      <Hero
        headline="Five ventures. One mission."
        supportingCopy="Each venture answers a different part of the same system — people, platforms, institutions, ideas and legacies, all building toward transformative impact."
        primaryCta={{ ctaId: "cta.portfolio.map", label: "See how they connect", href: "/portfolio" }}
      />

      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ventures.map((venture) => (
              <VentureCard
                key={venture.id}
                title={venture.name}
                purposeLine={venture.oneLiner}
                builds={venture.builds}
                href={venture.href}
                statusLabel={venture.status === "holding" ? "Coming soon" : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-alt">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Which door is yours?</h2>
          <ul className="mt-8 divide-y divide-border border-t border-border">
            {comparisonRows.map((row) => (
              <li key={row.intent}>
                <a
                  href={row.href}
                  className="group flex items-center justify-between gap-4 py-5 hover:text-brand-primary"
                >
                  <span className="text-ink group-hover:text-brand-primary">{row.intent}</span>
                  <span className="shrink-0 font-medium text-brand-primary">{row.venture} →</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        headline="Let's build something that lasts."
        primaryCta={{ ctaId: "cta.work" }}
        secondaryCta={{ ctaId: "cta.news", label: "Get the Newsletter" }}
        position="ventures-final-cta"
      />
    </>
  );
}
