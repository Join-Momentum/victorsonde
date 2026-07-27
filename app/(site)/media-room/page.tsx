import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/ui/Hero";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Media Room — Victor Sonde",
  description: "Press resources for covering Victor Sonde's work across a five-venture impact portfolio.",
};

const storyAngles = [
  { title: "Verified capability over CVs", body: "Why Evidentize treats hiring evidence the way a portfolio treats work — proven, not claimed." },
  { title: "Africa's next generation of problem solvers", body: "How the Design Intelligence Lab turns youth talent into demonstrated capability." },
  { title: "From potential to pathway", body: "Career Bridge Foundation's model for evidence-based employability." },
  { title: "Transformation at institutional scale", body: "Join Momentum's work with governments and large organisations." },
  { title: "Five ventures, one system", body: "Why this portfolio is built as one deliberate system rather than five separate bets." },
];

/**
 * `/media-room` (02-sitemap.md §3.9). Fast facts, approved bios,
 * headshots and press mentions are all omitted — no verified press kit
 * assets exist yet ([MEDIA REQUIRED]/[VERIFIED CONTENT REQUIRED]).
 */
export default function MediaRoomPage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbList([{ name: "Home", url: "/" }, { name: "Media Room", url: "/media-room" }]),
          { "@context": "https://schema.org", "@type": "Person", name: "Victor Sonde" },
        ]}
      />

      <Hero headline="Everything you need to cover Victor's work." primaryCta={{ ctaId: "cta.media", label: "Contact press", href: "/contact" }} />

      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">Story angles</h2>
          <ul className="mt-6 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {storyAngles.map((angle) => (
              <li key={angle.title} className="bg-surface p-6">
                <h3 className="font-semibold text-ink">{angle.title}</h3>
                <p className="mt-1 text-sm text-ink-muted">{angle.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-bg-alt">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <p className="max-w-prose text-ink-muted">
            Logo and brand asset usage guidance is on the{" "}
            <Link href="/legal/brand-usage" className="font-medium text-brand-primary hover:underline">
              Media & Brand Usage
            </Link>{" "}
            page. For interview requests and press enquiries,{" "}
            <Link href="/contact" className="font-medium text-brand-primary hover:underline">
              get in touch
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
