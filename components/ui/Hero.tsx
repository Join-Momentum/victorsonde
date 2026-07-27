import Image from "next/image";
import clsx from "clsx";
import { CtaLink } from "@/components/ui/CtaLink";
import { HeroMedia } from "@/components/ui/HeroMedia";

/**
 * The Hero family — statement/image/cinematic/split/product variants
 * (07-design-system.md §5.3). Exactly one <h1> per page — this component
 * owns it, so a page should render at most one Hero.
 */
export type HeroVariant = "statement" | "image" | "cinematic" | "split" | "product";

interface HeroCta {
  ctaId: string;
  label?: string;
  href?: string;
}

interface HeroMediaProps {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
}

interface HeroProps {
  eyebrow?: string;
  headline: string;
  supportingCopy?: string;
  media?: HeroMediaProps;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  variant?: HeroVariant;
  align?: "left" | "center";
}

function CtaGroup({ primaryCta, secondaryCta }: Pick<HeroProps, "primaryCta" | "secondaryCta">) {
  if (!primaryCta && !secondaryCta) return null;
  return (
    <div className="flex flex-wrap items-center gap-4">
      {primaryCta && <CtaLink ctaId={primaryCta.ctaId} label={primaryCta.label} href={primaryCta.href} position="hero" />}
      {secondaryCta && (
        <CtaLink
          ctaId={secondaryCta.ctaId}
          label={secondaryCta.label}
          href={secondaryCta.href}
          position="hero"
          variant="ghost"
        />
      )}
    </div>
  );
}

export function Hero({
  eyebrow,
  headline,
  supportingCopy,
  media,
  primaryCta,
  secondaryCta,
  variant = media ? "image" : "statement",
  align = "left",
}: HeroProps) {
  if (variant === "statement") {
    // Editorial/asymmetric treatment (07-design-system.md §3.1 rule 1:
    // "asymmetric grids, generous whitespace... pull-quote moments. Not
    // card-soup"). Headline runs wide top-left; supporting copy reads as a
    // pull-quote bottom-right; the brand icon bleeds off the edge as
    // texture — tucked into a rotated top-right corner on mobile (where
    // it's the only graphic element on the page, so it needs to actually
    // read) and opening out into the large, quieter right-bleed treatment
    // on desktop.
    return (
      <section className="relative overflow-hidden border-b border-border">
        <Image
          src="/brand/VSIconPry.png"
          alt=""
          width={809}
          height={932}
          aria-hidden="true"
          className={clsx(
            "pointer-events-none absolute -top-8 -right-8 w-40 rotate-12 opacity-[0.09]",
            "sm:-top-10 sm:-right-10 sm:w-56",
            "lg:top-1/2 lg:-right-32 lg:w-[34rem] lg:rotate-0 lg:-translate-y-1/2 lg:opacity-[0.035]",
          )}
        />
        <div className="relative mx-auto max-w-wide px-6 py-20 sm:py-32">
          {eyebrow && (
            <p className="mb-6 inline-block rounded-full bg-brand-primary-tint px-3 py-1 text-sm font-semibold text-brand-dark">
              {eyebrow}
            </p>
          )}
          <div className="lg:grid lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-12">
            <h1 className="max-w-4xl text-5xl leading-[1.02] font-semibold tracking-tight text-ink sm:text-7xl lg:leading-[0.98]">
              {headline}
            </h1>
            <div className="mt-8 flex flex-col gap-6 lg:mt-0 lg:pb-2">
              {supportingCopy && (
                <p className="max-w-sm rounded-r-lg border-l-2 border-brand-primary bg-brand-primary-tint/50 py-3 pl-4 text-lg text-ink opacity-90">
                  {supportingCopy}
                </p>
              )}
              <CtaGroup primaryCta={primaryCta} secondaryCta={secondaryCta} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  const textBlock = (
    <div
      className={clsx(
        "flex flex-col gap-6",
        align === "center" ? "items-center text-center" : "items-start text-left",
      )}
    >
      {eyebrow && <p className="text-sm font-semibold tracking-wide text-brand-primary uppercase">{eyebrow}</p>}
      <h1 className="max-w-3xl text-5xl leading-[1.05] font-semibold tracking-tight sm:text-6xl">{headline}</h1>
      {supportingCopy && <p className="max-w-xl text-lg opacity-80">{supportingCopy}</p>}
      <CtaGroup primaryCta={primaryCta} secondaryCta={secondaryCta} />
    </div>
  );

  if (variant === "split" || variant === "product") {
    return (
      <section>
        <div className="mx-auto grid max-w-wide gap-10 px-6 py-16 text-ink sm:py-24 lg:grid-cols-2 lg:items-center">
          <div>{textBlock}</div>
          {media && (
            <div
              className={clsx(
                "relative aspect-[4/3] w-full overflow-hidden",
                variant === "product" ? "rounded-lg border border-border bg-bg-alt" : "rounded-lg",
              )}
            >
              <Image src={media.src} alt={media.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" style={{ objectFit: "cover" }} />
            </div>
          )}
        </div>
      </section>
    );
  }

  // image / cinematic — full-bleed media with a scrim behind the text
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden text-brand-light sm:min-h-[80vh]">
      <div className="absolute inset-0">
        {media?.type === "video" ? (
          <HeroMedia src={media.src} poster={media.poster ?? ""} alt={media.alt} className="h-full w-full" />
        ) : media ? (
          <Image src={media.src} alt={media.alt} fill priority sizes="100vw" style={{ objectFit: "cover" }} />
        ) : null}
        {/* Scrim ensures text over media meets 4.5:1 (07-design-system.md §5.3) */}
        <div className="absolute inset-0 bg-linear-to-t from-brand-dark/90 via-brand-dark/30 to-transparent" />
      </div>
      <div className="relative w-full px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-wide">{textBlock}</div>
      </div>
    </section>
  );
}
