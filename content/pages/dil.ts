import type { DilPageContent } from "@/types/models";

/**
 * `/design-intelligence-lab` (04-design-intelligence-lab.md). Tier-1
 * flagship, 34 sections. `programmeState: "announce"` — no cohort has run
 * yet, so this ships waitlist-only; flip to "applications_open" per-city
 * when a real application window opens (drives §30 with no code change).
 *
 * Copy sourced directly from the spec's quoted headline/proposition/
 * definition/list fields. Sections or fields the spec tags
 * [VERIFIED CONTENT REQUIRED], [METRIC REQUIRED] or [MEDIA REQUIRED] are
 * either omitted entirely (cohortCommunity, faq — no safe copy exists at
 * all) or left with structural labels only, no invented specifics
 * (eligibility detail, sponsor tier descriptions, framework
 * applicationLine/microExample, persona fitLine). This mirrors
 * content/pages/about.ts and content/tracks.ts, which apply the same rule.
 *
 * Two items the spec explicitly flags as possibly-untrue are dropped
 * rather than asserted: the "no degree required" eligibility claim
 * (§11: "if true [VERIFIED CONTENT REQUIRED]") and any demographic
 * statistic in the African opportunity statement (§2: "only if sourced").
 */
export const dilContent: DilPageContent = {
  seo: {
    title: "Design Intelligence Lab — Building Africa's Next Generation of Problem Solvers | Victor Sonde",
    metaDescription:
      "An AI-powered simulation and portfolio programme for Africans aged 18–45 — practise solving real problems, get expert feedback, and leave with verified evidence of what you can do.",
  },
  programmeState: "announce",
  hero: {
    headline: "Africa doesn't lack talent. It lacks proof, practice and pathways. The Lab builds all three.",
    supportingCopy:
      "An AI-powered simulation and portfolio experience for Africans aged 18–45 — practise solving real problems, get expert feedback, and leave with verified evidence of what you can do.",
    // primaryCta is deliberately omitted here — the page derives it from
    // `programmeState` (apply vs waitlist) so that field alone drives the
    // hero CTA with no code change (acceptance criterion 1).
    secondaryCta: { ctaId: "cta.dil.apply", label: "Explore the journey", href: "#journey" },
  },
  africanOpportunityStatement: {
    title: "The world's youngest workforce",
    body: "The gap isn't ambition — it's access to practice, evidence and the networks that turn ability into opportunity.",
  },
  problemGaps: [
    { title: "The proof gap", body: "Credentials claim capability, but employers can't verify it." },
    { title: "The practice gap", body: "There's no safe place to do real work before being hired to do real work." },
    { title: "The pathway gap", body: "Talent and opportunity don't meet." },
  ],
  proposition: "Practise real work. Prove real capability. Reach real opportunity.",
  definition: {
    body: "Design intelligence is the combined capability to understand messy problems (research and systems thinking), decide well under uncertainty (decision intelligence), create and test solutions (design thinking and experimentation), and work responsibly with AI — then show your working.",
    capabilities: ["Design thinking", "Systems thinking", "Decision intelligence", "Responsible AI", "Evidence"],
  },
  frameworks: [
    {
      slug: "design-thinking",
      name: "Design thinking",
      stages: ["Understand people", "Frame the problem", "Generate options", "Simulate", "Learn"],
    },
    {
      slug: "systems-thinking",
      name: "Systems thinking",
      stages: ["Stakeholders", "Feedback loops", "Leverage points", "Unintended consequences"],
    },
    {
      slug: "decision-intelligence",
      name: "Decision intelligence",
      stages: ["Framing decisions", "Weighing evidence", "Trade-offs", "Reversibility", "Deciding with incomplete information"],
    },
    {
      slug: "responsible-ai",
      name: "Responsible use of AI",
      stages: ["Collaborator, not ghostwriter", "Disclosure of AI use", "Bias & context awareness", "Data care"],
    },
  ],
  responsibleAiPrinciples: [
    "AI as collaborator, not ghostwriter",
    "Disclosure of AI use in portfolio evidence",
    "Bias and context awareness",
    "Data care",
  ],
  personas: [
    { title: "Recent graduate" },
    { title: "Career changer" },
    { title: "Young professional levelling up" },
    { title: "Builder / entrepreneur" },
  ],
  eligibility: [
    { label: "Age", detail: "18–45" },
    { label: "African national or diaspora" },
    { label: "Weekly time commitment" },
    { label: "Device & connectivity", detail: "A device and internet connection reliable enough for the online simulation environment" },
    { label: "English proficiency" },
  ],
  methodology: {
    steps: [
      "Realistic brief",
      "Role & stakeholders",
      "Time-boxed work products",
      "AI-supported feedback",
      "Expert review",
      "Published evidence",
    ],
    ventureLinkNote: "Powered by Evidentize.IO",
  },
  exampleChallenge: {
    trackSlug: "financial-inclusion",
    prompt: "Why do market traders in many African cities stay outside formal savings — and what would change it?",
    label: "Illustrative example",
  },
  portfolioOutputs: [
    "Research summary",
    "Systems map",
    "Reframed problem statement",
    "Tested concept",
    "Simulation work products",
    "Feedback record",
    "Verified evidence entries",
    "Published portfolio page",
  ],
  assessment: {
    stack: ["AI-supported formative feedback", "Expert reviewer assessment", "Peer critique"],
    rubricDimensions: ["Problem understanding", "Rigour", "Creativity", "Collaboration", "Communication", "Responsible AI use"],
    rubricNote: "Full scoring rubric confirmed per cohort.",
  },
  verification: {
    body: "\"Verified\" means a named reviewer, a rubric, a date and artefact linkage — a clear record of who assessed the work, against what, and when.",
    nonAccreditationNote: "This is not an accredited qualification unless and until that changes — we'll say so plainly if it does.",
  },
  mentorModel: {
    mentorRole: "Mentors guide the journey — context, encouragement, unsticking blockers.",
    reviewerRole: "Reviewers assess evidence — rubric-based feedback on submitted work.",
    vettingNote: "Remote-friendly. Vetting includes safeguarding checks.",
  },
  involvement: {
    employer: {
      heading: "Employers",
      body: "Ways in for employers.",
      waysIn: ["Submit challenges", "Mentor", "Review", "Meet talent at demo days", "Hire from portfolios via Evidentize"],
      ctaId: "cta.dil.challenge",
    },
    government: {
      heading: "Government",
      body: "Governments submit public-service challenges, shape city partnerships, and align the Lab with workforce-development priorities.",
      ctaId: "cta.dil.challenge",
    },
    university: {
      heading: "Universities",
      body: "Embed the Lab alongside curricula — student cohorts, faculty reviewers.",
      ctaId: "cta.dil.university",
    },
  },
  sponsorTiers: [
    { name: "Cohort sponsorship" },
    { name: "Scholarship funding" },
    { name: "Track sponsorship" },
    { name: "Demo-day sponsorship" },
  ],
  cityPartnership: {
    body: "Bringing the Lab to a new city means a local host partner, sponsors, mentors, and a venue or online mix suited to that city.",
  },
  demoDay: "The public showcase — participants present their evidence to employers, sponsors, government and media.",
  successStoriesEmptyState: "Our first cohort's stories will be published here. Follow the Lab to meet them.",
};
