import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { CtaBand } from "@/components/ui/CtaBand";
import { CtaLink } from "@/components/ui/CtaLink";
import { EmptyState } from "@/components/ui/EmptyState";
import { EnquiryWizard } from "@/components/forms/EnquiryWizard";
import { JourneyDiagram } from "@/components/ui/JourneyDiagram";
import { DilSubNav } from "@/components/dil/DilSubNav";
import { ProblemTriptych } from "@/components/dil/ProblemTriptych";
import { DefinitionBlock } from "@/components/dil/DefinitionBlock";
import { FrameworkPanel } from "@/components/dil/FrameworkPanel";
import { PersonaRow } from "@/components/dil/PersonaRow";
import { EligibilityChecklist } from "@/components/dil/EligibilityChecklist";
import { TrackGrid } from "@/components/dil/TrackGrid";
import { ChallengeShowcase } from "@/components/dil/ChallengeShowcase";
import { OutputGrid } from "@/components/dil/OutputGrid";
import { AssessmentFeedback } from "@/components/dil/AssessmentFeedback";
import { VerificationExplainer } from "@/components/dil/VerificationExplainer";
import { MentorModel } from "@/components/dil/MentorModel";
import { InvolvementCard } from "@/components/dil/InvolvementCard";
import { SponsorTiers } from "@/components/dil/SponsorTiers";
import { StickyApplyBar } from "@/components/dil/StickyApplyBar";
import { FormTabs } from "@/components/dil/FormTabs";
import { StructuredData, breadcrumbList, faqPageSchema } from "@/components/seo/StructuredData";
import { dilContent } from "@/content/pages/dil";
import { dilJourney } from "@/content/journey/dil";
import { dilParticipantWaitlist } from "@/content/routes/dil-participant-waitlist";
import { dilParticipantApplication } from "@/content/routes/dil-participant-application";
import { dilSponsorRoute } from "@/content/routes/dil-sponsor";
import { dilChallengeRoute } from "@/content/routes/dil-challenge";
import { dilMentorRoute } from "@/content/routes/dil-mentor";
import { dilCityRoute } from "@/content/routes/dil-city";
import { toClientRoute } from "@/content/routes";
import { getTracks, getTrack, getMetrics } from "@/lib/content";

export const metadata: Metadata = {
  title: dilContent.seo.title,
  description: dilContent.seo.metaDescription,
};

/**
 * `/design-intelligence-lab` (04-design-intelligence-lab.md) — Tier-1
 * flagship. The spec's 34 numbered items are content units for planning,
 * not a mandate for 34 stacked DOM sections — related items are grouped
 * into ~12 visual sections here so the page has real pacing (a couple of
 * large statement moments, denser reference sections, quiet prose)
 * instead of one repeating card-grid pattern all the way down. Sections
 * needing content the spec explicitly flags as unverified (cohort
 * community, FAQ answers) are omitted rather than invented — see
 * content/pages/dil.ts for the full reasoning.
 */
export default function DesignIntelligenceLabPage() {
  const tracks = getTracks();
  const exampleTrack = getTrack(dilContent.exampleChallenge.trackSlug);
  const metrics = getMetrics(["build-people"]);
  const hasFaq = Boolean(dilContent.faq?.length);

  const isApplicationsOpen = dilContent.programmeState === "applications_open";
  const applyCtaId = isApplicationsOpen ? "cta.dil.apply" : "cta.dil.waitlist";
  const applyRoute = isApplicationsOpen ? dilParticipantApplication : dilParticipantWaitlist;

  return (
    <>
      <StructuredData
        data={[
          breadcrumbList([
            { name: "Home", url: "/" },
            { name: "Design Intelligence Lab", url: "/design-intelligence-lab" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Design Intelligence Lab",
            founder: { "@type": "Person", name: "Victor Sonde" },
          },
          ...(hasFaq ? [faqPageSchema(dilContent.faq!)] : []),
        ]}
      />

      <DilSubNav hasFaq={hasFaq} />

      <div id="overview">
        <Hero
          headline={dilContent.hero.headline}
          supportingCopy={dilContent.hero.supportingCopy}
          primaryCta={{ ctaId: applyCtaId }}
          secondaryCta={dilContent.hero.secondaryCta}
        />
      </div>

      {/* Why this exists — opportunity statement, problem, proposition, as one flowing statement rather than three separate blocks */}
      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="max-w-2xl text-2xl leading-snug font-medium text-ink sm:text-3xl">
            {dilContent.africanOpportunityStatement.title} — {dilContent.africanOpportunityStatement.body}
          </h2>
          <div className="mt-10">
            <ProblemTriptych gaps={dilContent.problemGaps} />
          </div>
          <p className="mt-14 max-w-3xl text-3xl leading-tight font-semibold tracking-tight text-ink sm:text-5xl">
            {dilContent.proposition}
          </p>
        </div>
      </section>

      {/* What you'll build — definition + the 4 frameworks together */}
      <section className="bg-bg-alt">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">Design intelligence</h2>
          <div className="mt-6">
            <DefinitionBlock body={dilContent.definition.body} capabilities={dilContent.definition.capabilities} />
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {dilContent.frameworks.map((framework) => (
              <FrameworkPanel key={framework.slug} framework={framework} />
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for + eligibility, side by side rather than stacked full sections */}
      <section id="who-its-for">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">Who it&apos;s for</h2>
          <div className="mt-6 grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-start">
            <PersonaRow personas={dilContent.personas} />
            <div>
              <h3 className="text-xs font-semibold tracking-wide text-ink-muted uppercase">Eligibility</h3>
              <div className="mt-3">
                <EligibilityChecklist items={dilContent.eligibility} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tracks" className="bg-bg-alt">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">Lab tracks</h2>
          <div className="mt-6">
            <TrackGrid tracks={tracks} />
          </div>
        </div>
      </section>

      {/* How it works — method one-liner leads straight into the signature journey diagram */}
      <section id="journey">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">How it works</h2>
          <p className="mt-4 max-w-2xl text-ink opacity-80">
            {dilContent.methodology.steps.join(" → ")}.{" "}
            <a href="/ventures/evidentize" className="font-medium text-brand-primary hover:underline">
              {dilContent.methodology.ventureLinkNote}
            </a>
          </p>
          <div className="mt-10">
            <JourneyDiagram stages={dilJourney} />
          </div>
        </div>
      </section>

      {/* What you'll walk away with — a worked example, then the actual output types */}
      <section className="bg-bg-alt">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">What you&apos;ll walk away with</h2>
          <div className="mt-6">
            <ChallengeShowcase
              prompt={dilContent.exampleChallenge.prompt}
              label={dilContent.exampleChallenge.label}
              trackName={exampleTrack?.name}
            />
          </div>
          <div className="mt-6">
            <OutputGrid outputs={dilContent.portfolioOutputs} />
          </div>
        </div>
      </section>

      {/* How you're assessed — feedback, rubric, verification and mentor model together */}
      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">How you&apos;re assessed</h2>
          <div className="mt-6">
            <AssessmentFeedback
              stack={dilContent.assessment.stack}
              rubricDimensions={dilContent.assessment.rubricDimensions}
              rubricNote={dilContent.assessment.rubricNote}
            />
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <VerificationExplainer body={dilContent.verification.body} nonAccreditationNote={dilContent.verification.nonAccreditationNote} />
            <MentorModel
              mentorRole={dilContent.mentorModel.mentorRole}
              reviewerRole={dilContent.mentorModel.reviewerRole}
              vettingNote={dilContent.mentorModel.vettingNote}
            />
          </div>
        </div>
      </section>

      {dilContent.cohortCommunity && (
        <section className="bg-bg-alt">
          <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
            <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">Cohort community</h2>
            <p className="mt-4 max-w-2xl text-ink opacity-80">{dilContent.cohortCommunity}</p>
          </div>
        </section>
      )}

      {/* Get involved — every audience in one grid instead of five separate sections */}
      <section id="get-involved" className="bg-bg-alt">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">Get involved</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <InvolvementCard copy={dilContent.involvement.employer} position="dil-involve-employer" />
            <InvolvementCard copy={dilContent.involvement.government} position="dil-involve-government" />
            <InvolvementCard copy={dilContent.involvement.university} position="dil-involve-university" />
            <div className="rounded-lg border border-border bg-surface p-6">
              <h3 className="text-lg font-semibold text-ink">Sponsors & funders</h3>
              <div className="mt-3">
                <SponsorTiers tiers={dilContent.sponsorTiers} />
              </div>
              <div className="mt-5">
                <CtaLink ctaId="cta.dil.sponsor" position="dil-sponsor-tiers" variant="ghost" size="sm" />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-6">
              <h3 className="text-lg font-semibold text-ink">Bring the Lab to your city</h3>
              <p className="mt-2 text-sm text-ink-muted">{dilContent.cityPartnership.body}</p>
              <div className="mt-5">
                <CtaLink ctaId="cta.dil.city" position="dil-city-partnership" variant="ghost" size="sm" />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-surface p-6">
              <h3 className="text-lg font-semibold text-ink">Demo day</h3>
              <p className="mt-2 text-sm text-ink-muted">{dilContent.demoDay}</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">Participant stories</h2>
          <div className="mt-6">
            <EmptyState message={dilContent.successStoriesEmptyState} actionLabel="Get the newsletter" actionHref="/newsletter" />
          </div>
          {metrics.length > 0 && (
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.slug} className="rounded-lg border border-border bg-surface p-6">
                  <p className="text-4xl font-semibold text-ink">
                    {metric.value}
                    {metric.unit}
                  </p>
                  <p className="mt-2 text-sm text-ink-muted">{metric.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {hasFaq && (
        <section id="faq" className="bg-bg-alt">
          <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
            <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">FAQ</h2>
          </div>
        </section>
      )}

      <section id="apply" className="bg-bg-alt">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
            {isApplicationsOpen ? "Apply to the Lab" : "Join the waitlist"}
          </h2>
          <div className="mt-8 max-w-xl">
            <EnquiryWizard route={toClientRoute(applyRoute)} />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Other ways to get involved</h2>
          <div className="mt-8">
            <FormTabs
              tabs={[
                { id: "sponsor", label: "Sponsor a cohort", route: toClientRoute(dilSponsorRoute) },
                { id: "challenge", label: "Submit a challenge", route: toClientRoute(dilChallengeRoute) },
                { id: "mentor", label: "Become a mentor", route: toClientRoute(dilMentorRoute) },
                { id: "city", label: "Bring the Lab to my city", route: toClientRoute(dilCityRoute) },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaBand
        headline="Practise real work. Prove real capability. Reach real opportunity."
        primaryCta={{ ctaId: applyCtaId }}
        position="dil-final-cta"
      />

      {/* Reserves room so the fixed sticky bar never overlaps the CtaBand above it on mobile */}
      <div aria-hidden="true" className="h-20 lg:hidden" />

      <StickyApplyBar programmeState={dilContent.programmeState} />
    </>
  );
}
