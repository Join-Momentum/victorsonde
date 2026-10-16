import { ActionRow } from "@/components/ui/ActionRow";
import { BandBackdrop } from "@/components/ui/BandBackdrop";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Display } from "@/components/ui/Display";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Frame } from "@/components/ui/Frame";
import { Lede } from "@/components/ui/Lede";
import { Mark } from "@/components/ui/Mark";
import { Markers } from "@/components/ui/Markers";
import { cn } from "@/lib/cn";
import { images } from "@/lib/images";

const annotation =
  "absolute z-20 whitespace-nowrap rounded-full px-3.5 py-2 font-mono text-[.62rem] uppercase leading-none tracking-[.12em] text-dark shadow-float";

/** Homepage hero: positioning statement, primary CTAs, annotated portrait and headline stats. */
export function HomeHero() {
  return (
    <header data-tone="dark" className="relative isolate overflow-hidden bg-dark text-white">
      <BandBackdrop glow="top-right" grid />
      <Container size="wide" className="pt-[clamp(48px,7vw,112px)]">
        <div className="grid items-center gap-x-16 gap-y-14 min-[1025px]:grid-cols-12">
          <div className="motion-safe:animate-rise min-[1025px]:col-span-7">
            <Eyebrow accent>Founder · Product &amp; delivery leader · Educator</Eyebrow>
            <Display as="h1" size="d1" className="mb-8 mt-7 max-w-[13ch] text-white">
              I build people, products and platforms that turn potential into <Mark>proof</Mark>.
            </Display>
            <Lede inverse className="max-w-[46ch]">
              I&apos;m Victor Sonde. I work across careers, AI, transformation and institutional development —
              building the products, programmes and organisations that let people show what they can actually do.
            </Lede>
            <ActionRow margin="mt-10">
              <ButtonLink href="/cohort" arrow>
                Apply for the Founding Cohort
              </ButtonLink>
              <ButtonLink href="/cohort" variant="secondary">
                Explore the simulations
              </ButtonLink>
            </ActionRow>
          </div>

          <div className="relative mx-auto w-full max-w-[520px] motion-safe:animate-rise motion-safe:[animation-delay:150ms] min-[1025px]:col-span-5 min-[1025px]:max-w-none">
            <div aria-hidden className="absolute -bottom-5 -left-5 top-10 right-10 border border-orange/70" />
            <Frame
              src={images.heroPortrait}
              alt="Victor Sonde"
              ratio="4/5"
              focus="50% 15%"
              priority
              sizes="(max-width: 1024px) 520px, 40vw"
              className="relative z-10 shadow-float"
            />
            <span className={cn(annotation, "-left-3 top-[12%] bg-orange sm:-left-8")}>
              Applications open → Founding Cohort
            </span>
            <span className={cn(annotation, "-right-2 bottom-[14%] bg-white sm:-right-6")}>
              Simulations powered by Evidentize.io
            </span>
          </div>
        </div>

        <Markers
          className="mt-[clamp(56px,7vw,104px)] motion-safe:animate-rise motion-safe:[animation-delay:300ms]"
          items={[
            { value: "5", label: "simulation disciplines" },
            { value: "Open now", label: "founding cohort" },
            { value: "3,600+", label: "newsletter readers" },
            { value: "UK · Africa", label: "where I work" },
          ]}
        />
      </Container>
    </header>
  );
}
