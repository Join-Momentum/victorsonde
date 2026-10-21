import { Badge } from "@/components/ui/Badge";
import { Band } from "@/components/ui/Band";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Display } from "@/components/ui/Display";
import { Grid } from "@/components/ui/Grid";
import { Kicker } from "@/components/ui/Kicker";
import { Lede } from "@/components/ui/Lede";
import { Todo } from "@/components/ui/Todo";
import { EbpMark } from "@/components/shared/EbpMark";
import { LogoImage } from "@/components/shared/LogoImage";
import { images } from "@/lib/images";
import { EbpPillars } from "./EbpPillars";
import { VentureDetail } from "./VentureDetail";
import Link from "next/link";

/** One detailed profile per venture. */
export function VentureProfiles() {
  return (
    <Band tone="paper">
      <Grid gap="gap-[22px]">
        <VentureDetail
          intro={
            <>
              <Badge variant="open">Applications open</Badge>
              <LogoImage src={images.careerBridgeLogo} alt="Career Bridge Foundation" className="mb-3 mt-3.5 h-[46px]" />
              <p>
                The Simulation-Based Work Experience Programme: realistic professional work in five disciplines (
                product management, business analysis, cyber threat intelligence, project management and virtual
                administrative assistance), producing assessed evidence portfolios.
              </p>
              <ButtonLink href="/cohort" size="sm" arrow>
                Apply for the Founding Cohort
              </ButtonLink>
            </>
          }
          facts={[
            { term: "Serves", detail: "Professionals building or changing careers; employers and partners." },
            { term: "My role", detail: "Founder, programme direction, simulation design." },
            { term: "Powered by", detail: "Evidentize.io" },
            { term: "Status", detail: "Founding cohort recruiting." },
          ]}
        />

        <VentureDetail
          intro={
            <>
              <Kicker>Technology</Kicker>
              <LogoImage src={images.evidentizeLogo} alt="Evidentize.io" className="mb-3.5 mt-3 h-[34px]" />
              <p>
                The platform layer: simulation delivery, assessment, and structured portfolio generation. It exists so
                that evidence of capability is consistent, checkable and portable, for Career Bridge today and the
                Decision Intelligence Lab next.
              </p>
            </>
          }
          facts={[
            { term: "Serves", detail: "Both programmes, and partner organisations." },
            { term: "My role", detail: "Founder and product lead." },
            { term: "Status", detail: <Todo>Public availability to confirm</Todo> },
          ]}
        />

        <VentureDetail
          intro={
            <>
              <Badge variant="soon">Launching soon</Badge>
              <Display size="d3" className="my-3">
                Decision Intelligence Lab
              </Display>
              <p>
                A separate initiative: simulation-based capacity building for African youth aged 18–45, across the
                continent and diaspora. Systems thinking, design thinking and decision intelligence, supported by AI and
                human coaching, assessed through portfolios.
              </p>
              <ButtonLink href="/lab" variant="secondary" size="sm" arrow>
                Read the initiative
              </ButtonLink>
            </>
          }
          facts={[
            { term: "Serves", detail: "Young Africans; funders, corporates, universities and diaspora partners." },
            { term: "My role", detail: "Founder." },
            { term: "Next", detail: "Pilot cohort of 100, funded by founding partners." },
          ]}
        />

        <VentureDetail
          intro={
            <>
              <Kicker>Defence &amp; security</Kicker>
              <LogoImage src={images.joinMomentumLogo} alt="Join Momentum Inc" className="mb-3.5 mt-2.5 h-[38px]" />
              <Lede className="mb-3">Defence &amp; security capability for complex environments.</Lede>
              <p>
                Join Momentum Inc partners with defence and security stakeholders to strengthen operational readiness,
                protect critical systems, and maintain strategic advantage across evolving threat landscapes. Strategic
                defence, security and intelligence consulting delivered with precision and discretion.
              </p>
              <ButtonLink href="https://www.joinmomentum.io/" external variant="secondary" size="sm" arrow>
                joinmomentum.io
              </ButtonLink>
            </>
          }
          facts={[
            {
              term: "Serves",
              detail: "Defence, security and intelligence stakeholders operating in complex, contested environments.",
            },
            { term: "Focus", detail: "Operational readiness · critical systems protection · strategic advantage." },
            { term: "My role", detail: "Founder and principal consultant." },
            {
              term: "Discretion",
              detail: "Engagements are confidential by default. Clients and outcomes are named only where cleared.",
            },
          ]}
        />

        <VentureDetail
          intro={
            <>
              <Kicker>Financial resilience</Kicker>
              <EbpMark large className="mb-3.5 mt-2.5" />
              <Lede className="mb-3">Build a stronger financial life, then protect it.</Lede>
              <p>
                Three connected dimensions of financial resilience, in one practical framework. It exists to educate,
                prompt reflection and generate useful insight, not to sell anyone a product.
              </p>
              <ButtonLink href="https://earnbuildprotect.com/" size="sm" arrow>
                Explore Earn.Build.Protect
              </ButtonLink>
            </>
          }
          facts={[
            { term: "Serves", detail: "Professionals, families, entrepreneurs and business owners." },
            {
              term: "Focus",
              detail:
                "Earning capability · entrepreneurship · financial resilience · risk awareness · protection education.",
            },
            { term: "My role", detail: "Founder." },
            { term: "Philosophy", detail: "Earn more. Build intelligently. Protect what matters." },
            { term: "Platform", detail: <Link href={'https://earnbuildprotect.com/'}>https://earnbuildprotect.com/</Link > },
          ]}
        >
          <EbpPillars />
        </VentureDetail>
      </Grid>
    </Band>
  );
}
