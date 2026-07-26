import Image from "next/image";
import { CtaLink } from "@/components/ui/CtaLink";

/**
 * Full-width closing CTA band (07-design-system.md §5.13), e.g. the
 * homepage's final "Let's build something that lasts." moment.
 */
interface CtaBandProps {
  headline: string;
  supportingCopy?: string;
  primaryCta: { ctaId: string; label?: string; href?: string };
  secondaryCta?: { ctaId: string; label?: string; href?: string };
  position: string;
}

export function CtaBand({ headline, supportingCopy, primaryCta, secondaryCta, position }: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-brand-dark px-6 py-20 text-brand-light sm:py-28">
      <Image
        src="/brand/VSIconWhite.png"
        alt=""
        width={809}
        height={932}
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 hidden w-[40rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.04] sm:block"
      />
      <div className="relative mx-auto flex max-w-wide flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl">{headline}</h2>
        {supportingCopy && <p className="max-w-xl text-base opacity-80">{supportingCopy}</p>}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <CtaLink ctaId={primaryCta.ctaId} label={primaryCta.label} href={primaryCta.href} position={position} variant="inverse" />
          {secondaryCta && (
            <CtaLink
              ctaId={secondaryCta.ctaId}
              label={secondaryCta.label}
              href={secondaryCta.href}
              position={position}
              variant="ghost"
              className="border-brand-light/40 text-brand-light hover:bg-brand-light/10"
            />
          )}
        </div>
      </div>
    </section>
  );
}
