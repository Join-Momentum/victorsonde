import Image from "next/image";
import Link from "next/link";
import type { BuildId } from "@/types/models";
import { getBuild } from "@/content/builds";
import { CtaLink } from "@/components/ui/CtaLink";

/**
 * The flagship gets the largest single-venture placement on the homepage
 * (03-homepage.md §9 — DIL). Dark panel + icon watermark stand in for
 * real participant photography until it's shot (07-design-system.md
 * §4.1) — never a stock-photo substitute, just a confident graphic
 * treatment using the actual brand mark.
 */
interface FeaturedVentureProps {
  eyebrow: string;
  title: string;
  copy: string;
  builds: BuildId[];
  href: string;
  ctaId: string;
  ctaLabel?: string;
}

export function FeaturedVenture({ eyebrow, title, copy, builds, href, ctaId, ctaLabel }: FeaturedVentureProps) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-brand-dark text-brand-light">
      <Image
        src="/brand/VSIconInverted.png"
        alt=""
        width={809}
        height={932}
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 w-72 opacity-10 sm:w-96"
      />
      <div className="relative flex flex-col gap-6 p-8 sm:p-12 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-brand-primary uppercase">{eyebrow}</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            <Link href={href}>{title}</Link>
          </h3>
          <p className="mt-4 text-base opacity-80 sm:text-lg">{copy}</p>
          {builds.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-2">
              {builds.map((id) => {
                const build = getBuild(id);
                return build ? (
                  <li key={id} className="rounded-full border border-brand-light/25 px-3 py-1 text-xs text-brand-light/80">
                    {build.name}
                  </li>
                ) : null;
              })}
            </ul>
          )}
        </div>
        <div className="shrink-0">
          <CtaLink ctaId={ctaId} label={ctaLabel} position="home-dil-feature" variant="inverse" />
        </div>
      </div>
    </div>
  );
}
