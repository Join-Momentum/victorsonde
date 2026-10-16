import { Badge } from "@/components/ui/Badge";
import { Band } from "@/components/ui/Band";
import { Display } from "@/components/ui/Display";
import { Grid } from "@/components/ui/Grid";
import { Label } from "@/components/ui/Label";
import { Lede } from "@/components/ui/Lede";
import { SectionHead } from "@/components/ui/SectionHead";
import { EbpMark } from "@/components/shared/EbpMark";
import { LogoImage } from "@/components/shared/LogoImage";
import { images } from "@/lib/images";
import { CareerBridgeFeature } from "./CareerBridgeFeature";
import { VentureSummaryCard } from "./VentureSummaryCard";

/** Homepage section 03: the five builds. */
export function WhatImBuilding() {
  return (
    <Band tone="paper">
      <SectionHead num="03">
        <Label>What I&apos;m building</Label>
        <Display size="d2">Five builds, one mission</Display>
        <Lede className="mt-3 max-w-[64ch]">
          I build platforms, programmes and ventures that help people and institutions develop capability, turn it
          into meaningful progress, and make that progress more resilient.
        </Lede>
      </SectionHead>

      <CareerBridgeFeature />

      <Grid cols={2}>
        <VentureSummaryCard
          kicker="The engine"
          brand={<LogoImage src={images.evidentizeLogo} alt="Evidentize.io" className="mb-1 mt-0.5 h-[30px]" />}
          facts={[
            { term: "Problem", detail: "Evidence of work is scattered, unstructured and hard to trust." },
            { term: "Building", detail: "The simulation, assessment and portfolio technology behind both programmes." },
            { term: "My role", detail: "Founder and product lead." },
          ]}
          link={{ href: "/ventures", label: "See how it fits →" }}
        />
        <VentureSummaryCard
          accent
          kicker={<Badge variant="soon">Launching soon</Badge>}
          brand={
            <Display as="h3" size="d4" className="mt-1.5">
              Decision Intelligence Lab
            </Display>
          }
          facts={[
            { term: "Problem", detail: "Brilliant young people held back by missing decision architecture, not missing ability." },
            { term: "Building", detail: "A simulation-based capacity-building programme for African youth, ages 18–45." },
            { term: "My role", detail: "Founder. Seeking funders, corporate sponsors and delivery partners." },
          ]}
          link={{ href: "/lab", label: "Read the initiative →" }}
        />
        <VentureSummaryCard
          kicker="Defence & security"
          brand={<LogoImage src={images.joinMomentumLogo} alt="Join Momentum Inc" className="mb-1 mt-0.5 h-[26px]" />}
          facts={[
            { term: "Problem", detail: "Threat landscapes evolve faster than the institutions defending against them." },
            {
              term: "Building",
              detail:
                "Defence, security and intelligence consulting — operational readiness, protection of critical systems, strategic advantage.",
            },
            { term: "Serves", detail: "Defence and security stakeholders in complex environments." },
            { term: "My role", detail: "Founder and principal consultant." },
          ]}
          link={{ href: "/ventures", label: "See the practice →" }}
        />
        <VentureSummaryCard
          kicker="Financial resilience"
          brand={<EbpMark className="mb-0.5 mt-1" />}
          facts={[
            {
              term: "Problem",
              detail:
                "People are told to earn more and build wealth, and almost never shown how the two connect — or what could undo them.",
            },
            {
              term: "Building",
              detail:
                "A practical financial resilience framework helping people strengthen how they earn, build what matters and understand what needs protecting.",
            },
            { term: "Serves", detail: "Professionals, families, entrepreneurs and business owners." },
            { term: "My role", detail: "Founder." },
          ]}
          link={{ href: "/ventures", label: "Explore Earn.Build.Protect →" }}
        />
      </Grid>
    </Band>
  );
}
