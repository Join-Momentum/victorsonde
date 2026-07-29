/**
 * Single source of truth for every content shape in the site.
 * content/**, lib/content.ts, lib/mdx.ts, scripts/validate-content.ts and
 * every component that consumes content data all derive from these types.
 * A malformed content/ entry is a compile error, not a runtime surprise
 * (08-technical.md §2).
 */

// ---------------------------------------------------------------------------
// Primitives
// ---------------------------------------------------------------------------

/** ISO 8601 date string, e.g. "2026-07-21" or "2026-07-21T09:00:00Z". */
export type ISODate = string;

export type BuildId =
  | "build-people"
  | "build-platforms"
  | "build-institutions"
  | "build-ideas"
  | "build-legacies";

export type VentureId =
  | "join-momentum"
  | "career-bridge"
  | "evidentize"
  | "design-intelligence-lab"
  | "financial-resilience";

export type PublicationStatus =
  | "draft"
  | "review"
  | "scheduled"
  | "published"
  | "archived";

// ---------------------------------------------------------------------------
// SEO / Hero — the Universal Page Spec baseline (02-sitemap.md §1)
// ---------------------------------------------------------------------------

export interface Seo {
  title: string;
  metaDescription: string; // 140–160 chars, written per page, never auto-truncated body copy
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

export interface CtaRef {
  /** id from the canonical CTA registry — see content/ctas.ts */
  ctaId: string;
  label?: string; // override only in exceptional cases; registry label is canonical
  href?: string; // override only if the registry default doesn't apply
}

export interface HeroMedia {
  type: "image" | "video";
  src: string;
  poster?: string; // required if type === "video"
  focalPoint?: { x: number; y: number }; // 0–1, for art-directed crops
  alt: string;
}

export interface Hero {
  eyebrow?: string;
  headline: string;
  supportingCopy?: string;
  media?: HeroMedia;
  primaryCta?: CtaRef;
  secondaryCta?: CtaRef;
}

// ---------------------------------------------------------------------------
// Accessibility / rights — required companions to any media reference
// ---------------------------------------------------------------------------

export interface AccessibilityFlags {
  altTextComplete: boolean;
  transcriptAvailable?: boolean;
  captionsAvailable?: boolean;
}

export interface UsagePermissions {
  rights: string;
  licensor?: string;
  expiry?: ISODate;
  restrictions?: string;
}

export interface ImageCredit {
  photographer?: string;
  source?: string;
}

// ---------------------------------------------------------------------------
// ContentBase — every content object supports these (06-content-media.md §1.3)
// ---------------------------------------------------------------------------

export interface ContentBase {
  title: string;
  slug: string;
  excerpt?: string;
  longDescription?: string;
  publishedAt?: ISODate;
  updatedAt?: ISODate;
  author?: PersonRef;
  featuredImage?: string;
  thumbnail?: string;
  videoUrl?: string;
  videoDuration?: number; // seconds
  transcript?: string;
  category?: string; // Category ref slug
  tags?: string[];
  relatedVentures?: VentureId[];
  relatedInitiatives?: string[];
  relatedServices?: string[];
  relatedLocations?: string[];
  relatedEvents?: string[];
  relatedPeople?: string[];
  seo: Seo;
  publicationStatus: PublicationStatus;
  /** builds[] — every content object is tagged to at least one Build (01-strategy.md §2.2) */
  builds: BuildId[];
  featured?: { surfaces: string[] };
  scheduledAt?: ISODate;
  cta?: CtaRef;
  leadMagnet?: string;
  schemaType?: string;
  socialSharingCopy?: string;
  accessibility?: AccessibilityFlags;
  imageCredits?: ImageCredit[];
  usagePermissions?: UsagePermissions;
}

// ---------------------------------------------------------------------------
// Taxonomies (shared reference documents — 06-content-media.md §1.2)
// ---------------------------------------------------------------------------

export interface Build {
  id: BuildId;
  name: string;
  definition: string;
  primaryExpressions: string[];
}

export interface Venture {
  id: VentureId;
  name: string;
  oneLiner: string;
  builds: BuildId[];
  logo?: string; // BRAND ASSET REQUIRED per venture except Victor Sonde parent
  href: string;
  status: "live" | "holding"; // FS ships as a holding state until compliance approves
  accentToken?: string; // optional venture accent color token
}

export interface PersonRef {
  slug: string;
  name: string;
  role?: string;
  photo?: string;
  permission?: boolean; // required true before rendering non-Victor people
}

export interface Location {
  slug: string;
  city?: string;
  country: string;
}

export interface EventRef {
  slug: string;
  name: string;
  date?: ISODate;
  location?: string;
}

export interface SpeakingTopic {
  slug: string;
  title: string;
  // Descriptive fields are filled in progressively via the git-native
  // editorial workflow — a topic can exist as a title-only stub before
  // the rest is written, so these stay optional rather than fabricated.
  onePromise?: string;
  audienceTakeaways?: string[];
  formats?: string[];
}

export interface Capability {
  slug: string;
  name: string;
}

export interface Track {
  slug: string;
  name: string;
  challengeFraming?: string;
  exampleChallengeTeaser?: string;
  icon?: string;
  availableThisCohort?: boolean;
}

export interface Category {
  slug: string;
  name: string;
}

export interface Tag {
  slug: string;
  name: string;
}

// ---------------------------------------------------------------------------
// CTA registry (01-strategy.md §4.3) — canonical labels, reused verbatim
// ---------------------------------------------------------------------------

export interface Cta {
  id: string;
  label: string;
  href: string;
}

// ---------------------------------------------------------------------------
// LeadRoute / EnquiryWizard (07-design-system.md §5.7)
// ---------------------------------------------------------------------------

export type FieldType =
  | "text"
  | "email"
  | "tel"
  | "select"
  | "multiselect"
  | "textarea"
  | "checkbox"
  | "radio"
  | "date";

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  required: boolean;
  options?: { value: string; label: string }[];
  maxLength?: number;
  helpText?: string;
}

export interface FormStep {
  id: string;
  title: string;
  fields: FormField[];
}

export interface LeadRoute {
  route: string; // e.g. "dil-participant", "speaking", "join-momentum"
  steps: FormStep[];
  pipeline: string | ((data: Record<string, unknown>) => string); // supports org-type-based pipeline splits
  ackTemplate?: string;
  slaDays?: number;
  consentCopyVersion: string;
  thankYouPath: string;
}

// ---------------------------------------------------------------------------
// Compliance (05-key-pages.md §4.3, 08-technical.md §3) — FS pod only
// ---------------------------------------------------------------------------

export type ComplianceStatus =
  | "Draft"
  | "Internal Review"
  | "Compliance Review"
  | "Approved"
  | "Expired"
  | "Withdrawn";

export interface ComplianceRecord {
  complianceStatus: ComplianceStatus;
  approver?: string;
  approvalDate?: ISODate;
  expiryDate?: ISODate; // auto-flip to Expired; block stops rendering
  version: string; // immutable per approval; editing bumps this
  requiredDisclosure?: string[]; // refs to disclosure blocks that MUST co-render
  targetAudience?: string;
  distributionRestrictions?: string;
}

export interface ComplianceBlock {
  slug: string;
  title: string;
  body: string;
  compliance: ComplianceRecord;
}

// ---------------------------------------------------------------------------
// ImpactMetric — unverified metrics cannot be published (validation rule)
// ---------------------------------------------------------------------------

export interface ImpactMetric {
  slug: string;
  value: number;
  unit?: string;
  label: string;
  context?: string;
  source: string; // required, non-empty
  verifiedDate: ISODate; // required
  builds: BuildId[];
}

// ---------------------------------------------------------------------------
// Testimonial — renders only when permission is true
// ---------------------------------------------------------------------------

export interface Testimonial extends Omit<ContentBase, "seo"> {
  quote: string;
  person: { name: string; role?: string; org?: string };
  image?: string;
  permission: boolean; // required true to render, anywhere
  context?: string;
  ventureRef?: VentureId;
}

// ---------------------------------------------------------------------------
// Timeline (Career Portfolio — 05-key-pages.md §2)
// ---------------------------------------------------------------------------

export type Sector = "public" | "private" | "entrepreneurship" | "social";

export interface TimelineEntry {
  slug: string;
  yearStart: number;
  yearEnd?: number;
  title: string;
  organisation: string;
  roleType?: string;
  industry?: string;
  country?: string;
  capabilities: string[];
  ventureRef?: VentureId;
  sector: Sector;
  summary: string;
  artefacts?: string[]; // refs to case studies / photos / videos
  featured?: boolean;
}

// ---------------------------------------------------------------------------
// JourneyDiagram data (07-design-system.md §5.5)
// ---------------------------------------------------------------------------

export interface JourneyStage {
  order: number;
  title: string;
  phase?: string; // e.g. "Understand" | "Create" | "Prove" for DIL's 11-stop journey
  // Filled in progressively — stage order/title/phase are structural and
  // fixed by spec; the detail copy per stage is written later.
  whatYouDo?: string;
  whatYouProduce?: string;
  whoInvolved?: string;
  artefactExample?: string;
  icon?: string;
}

// ---------------------------------------------------------------------------
// Purchase / Commerce (06-content-media.md §4.3) — provider-agnostic, hard requirement
// ---------------------------------------------------------------------------

export type PurchaseFormat = "hardback" | "paperback" | "ebook" | "audiobook";
export type PurchaseProvider =
  | "placeholder"
  | "external_retailer"
  | "stripe_payment_link"
  | "shopify"
  | "woocommerce"
  | "lemon_squeezy";

export interface PurchaseOption {
  format: PurchaseFormat;
  price: number;
  currency: string;
  provider: PurchaseProvider;
  url?: string;
  retailerName?: string;
  region?: string[];
  available: boolean;
}

export interface BookBundle {
  type: "signed" | "bulk" | "corporate" | "speaking" | "workshop";
  description: string;
  minQty?: number;
  enquiryRoute: string;
}

export type BookStatus =
  | "Idea in Development"
  | "Writing"
  | "Coming Soon"
  | "Launch List Open"
  | "Pre-Order"
  | "Available Now"
  | "Sold Out"
  | "Archived";

// ---------------------------------------------------------------------------
// Gallery (06-content-media.md §2.4)
// ---------------------------------------------------------------------------

export interface GalleryImage {
  asset: string;
  caption?: string;
  altText: string; // required
  location?: string;
  date?: ISODate;
  photographerCredit?: string;
  relatedProject?: string;
  relatedVenture?: VentureId;
  focalPoint?: { x: number; y: number };
  aspect?: string;
  downloadable: boolean;
  shareable: boolean;
  rights: UsagePermissions;
  isVideo?: boolean;
  videoUrl?: string;
}

export interface PhotoAlbum {
  slug: string;
  title: string;
  description?: string;
  albumCategory: string;
  images: GalleryImage[];
}

// ---------------------------------------------------------------------------
// The 20 content types (06-content-media.md §1.1)
// ---------------------------------------------------------------------------

export interface Article extends ContentBase {
  kind: "article";
  body: string; // portable/MDX body
  readingTime?: number;
}

export interface VideoItem extends ContentBase {
  kind: "video";
  provider: "youtube" | "vimeo" | "native";
  duration: number;
  chapters?: { title: string; timestamp: number }[];
  captionsUrl?: string;
}

export interface ShortClip extends ContentBase {
  kind: "clip";
  aspect: "9:16";
  sourceVideoRef?: string;
}

export interface NewsletterEdition extends ContentBase {
  kind: "newsletter-edition";
  issueNumber: number;
  externalUrl?: string;
  body?: string;
}

export interface PodcastAppearance extends ContentBase {
  kind: "podcast-appearance";
  showName: string;
  episodeUrl: string;
  host?: string;
  audioEmbed?: string;
}

export interface Interview extends ContentBase {
  kind: "interview";
  outlet: string;
  interviewer?: string;
  format: "text" | "video" | "audio";
  url?: string;
}

export interface Keynote extends ContentBase {
  kind: "keynote";
  eventRef?: string;
  topicRefs: string[];
  videoRef?: string;
  deckAvailable?: boolean;
  /** chosen canonical surface — /videos/[slug] or /insights/[slug] etc. */
  primarySurface: string;
}

export interface Framework extends ContentBase {
  kind: "framework";
  diagram?: string;
  steps: string[];
  applicationNotes?: string;
}

export interface WhitePaper extends ContentBase {
  kind: "white-paper";
  pdf: string;
  abstract: string;
  gated: boolean;
}

export interface ResearchReport extends ContentBase {
  kind: "research-report";
  pdf: string;
  methodologyNote?: string;
  partners?: string[];
}

export interface CaseStudy extends ContentBase {
  kind: "case-study";
  clientContext: string;
  challenge: string;
  approach: string;
  outcomeMetrics: ImpactMetric[];
  outcomeVerified: boolean; // publish gate
  ventureRef: VentureId;
  sector?: string;
  country?: string;
  clearedForRelease?: boolean; // additional gate for defence content
}

export interface EventRecap extends ContentBase {
  kind: "event-recap";
  eventRef: string;
  galleryRef?: string;
  highlights: string[];
}

export interface ProjectEntry extends ContentBase {
  kind: "project";
  period: string;
  organisation: string;
  capabilities: string[];
  countryRefs: string[];
  artefacts?: string[];
}

export interface Book extends Omit<ContentBase, "featuredImage"> {
  kind: "book";
  subtitle?: string;
  coverImage?: string; // never mock a fake final cover; pre-cover = typographic treatment
  status: BookStatus;
  coreProposition: string;
  intendedAudience: string[];
  readerOutcomes: string[];
  description: string;
  authorVideo?: string;
  chapterList: { number: number; title: string; oneLiner: string }[];
  sampleChapter?: string; // ref to BookChapterPreview
  endorsements: string[]; // Testimonial refs, real only
  reviews: { source: string; quote: string; url: string }[];
  formats: PurchaseFormat[];
  purchaseOptions: PurchaseOption[];
  bundles: BookBundle[];
  launchListId?: string;
  faq: { q: string; a: string }[];
  isbn?: string;
  publisher?: string;
}

export interface BookChapterPreview extends ContentBase {
  kind: "book-chapter-preview";
  bookRef: string;
  chapterNumber: number;
  excerpt: string;
  pdf?: string;
}

export interface PressMention extends ContentBase {
  kind: "press-mention";
  outlet: string;
  url: string;
  date: ISODate;
  quoteExtract?: string;
  logoRef?: string;
}

export interface ImpactStory extends ContentBase {
  kind: "impact-story";
  person: { name: string; consented: true };
  story: string;
  programmeRef: string;
  outcome?: string;
  media?: string;
  consentRecord: string;
}

export type OpportunityType =
  | "mentor"
  | "reviewer"
  | "volunteer"
  | "cohort"
  | "collaboration";
export type OpportunityStatus = "open" | "closed";

export interface ProgrammeOpportunity extends ContentBase {
  kind: "opportunity";
  type: OpportunityType;
  ventureRef: VentureId;
  location?: string;
  commitment?: string;
  deadline?: ISODate;
  status: OpportunityStatus;
}

/** Union of every content-type document, useful for generic loaders/validators. */
export type AnyContent =
  | Article
  | VideoItem
  | ShortClip
  | NewsletterEdition
  | PodcastAppearance
  | Interview
  | Keynote
  | Framework
  | WhitePaper
  | ResearchReport
  | CaseStudy
  | EventRecap
  | ProjectEntry
  | Book
  | BookChapterPreview
  | PressMention
  | ImpactStory
  | ProgrammeOpportunity;

// ---------------------------------------------------------------------------
// Page-level content (Universal Page Spec — 02-sitemap.md §1)
// ---------------------------------------------------------------------------

export interface PageSection {
  id: string;
  enabled: boolean;
  order: number;
  // section-specific data is intentionally untyped here — each section
  // component narrows this via its own props type when consumed.
  data?: Record<string, unknown>;
}

export interface PageContent {
  title: string;
  slug: string;
  seo: Seo;
  hero: Hero;
  sections: PageSection[];
  builds: BuildId[];
  relatedVentures?: VentureId[];
  relatedContent?: string[];
  publicationStatus: PublicationStatus;
  publishedAt?: ISODate;
  updatedAt?: ISODate;
}

// ---------------------------------------------------------------------------
// About page (02-sitemap.md §3.1) — fields specific enough to this one page
// that they don't belong on the generic PageContent shape.
// ---------------------------------------------------------------------------

export interface RoleEntry {
  title: string;
  /** Specific evidence per role — [VERIFIED CONTENT REQUIRED], omit until supplied rather than inventing one. */
  proofLine?: string;
}

export interface AboutContent {
  seo: Seo;
  hero: Hero;
  /** The potential → capability → evidence → opportunity → impact arc, one entry per paragraph. */
  thesis: string[];
  roles: RoleEntry[];
  /** [VERIFIED CONTENT REQUIRED] — section is omitted entirely while undefined. */
  personalNote?: string;
}

// ---------------------------------------------------------------------------
// Victor's Story (02-sitemap.md §3.2) — chapters/moments/photoEssay are all
// [VERIFIED CONTENT REQUIRED]/[MEDIA REQUIRED]; the page ships with these
// sections hidden until Victor supplies the real narrative — never invented.
// ---------------------------------------------------------------------------

export interface StoryChapter {
  heading: string;
  body: string;
  media?: string;
}

export interface StoryMoment {
  year: string;
  place: string;
  title: string;
  body: string;
  image?: string;
}

export interface StoryContent {
  seo: Seo;
  hero: Hero;
  chapters: StoryChapter[];
  moments: StoryMoment[];
  photoEssay: GalleryImage[];
}

// ---------------------------------------------------------------------------
// Career Journey (`/about/career`) and Leadership Philosophy
// (`/about/leadership`) — both Tier 2 per 02-sitemap.md §2's master table,
// but neither has a dedicated section-by-section spec in the source docs
// (unlike Career Portfolio at /portfolio/career, which does). These types
// intentionally stay light — just enough for the Universal Page Spec
// baseline — until a fuller spec doc for these two exists.
// ---------------------------------------------------------------------------

export interface CareerJourneyContent {
  seo: Seo;
  hero: Hero;
  intro?: string;
}

export interface LeadershipPrinciple {
  title: string;
  body?: string;
}

export interface LeadershipContent {
  seo: Seo;
  hero: Hero;
  intro?: string;
  principles: LeadershipPrinciple[];
}

// ---------------------------------------------------------------------------
// Impact Portfolio (`/portfolio`, 02-sitemap.md §3.3) — owns the full-size
// ImpactPortfolioMap. `connections[]` (the "how the ventures reinforce each
// other" narratives) is separate from the map itself: the map's node↔venture
// relationships are derived directly from Venture.builds[], never
// duplicated into a connections file — connections[] is only for the
// editorial connective-narrative section, which needs its own verification.
// ---------------------------------------------------------------------------

export interface PortfolioConnection {
  from: VentureId;
  to: VentureId;
  narrative: string;
}

export interface PortfolioContent {
  seo: Seo;
  hero: Hero;
  connections: PortfolioConnection[];
}

export interface AudienceRoute {
  label: string;
  description: string;
  ctaId: string;
  href?: string;
}

// ---------------------------------------------------------------------------
// Legal / utility pages (02-sitemap.md §5) — shared template. `body`
// absent on a section means real legal text hasn't been supplied yet; the
// template renders an honest "pending" note there rather than
// [VERIFIED CONTENT REQUIRED] boilerplate copy the section itself isn't
// entitled to invent (privacy/terms/safeguarding/complaints text is a
// legal document, not marketing copy — never draft it speculatively).
// ---------------------------------------------------------------------------

export interface LegalSection {
  heading: string;
  body?: string[];
}

export interface LegalPageContent {
  seo: Seo;
  title: string;
  lastUpdated?: ISODate;
  sections: LegalSection[];
}

// ---------------------------------------------------------------------------
// Campaign Landing Template (`/c/[slug]`, 02-sitemap.md §3.10) — one page,
// one action, no global nav. Isolated from the rest of the sitemap
// taxonomy on purpose (01-strategy.md §1.2).
// ---------------------------------------------------------------------------

export interface CampaignOfferBlock {
  heading: string;
  body: string;
}

export interface Campaign {
  slug: string;
  audience: string;
  utmDefaults?: Record<string, string>;
  hero: Hero;
  proof?: { type: "metric" | "testimonial" | "logo"; content: string };
  offerBlocks: CampaignOfferBlock[]; // max 3
  conversion: { type: "form" | "cta"; formRoute?: string; cta?: CtaRef };
  faq?: { q: string; a: string }[];
  expiry?: ISODate;
  thankYouPath: string;
}

// ---------------------------------------------------------------------------
// Site singleton (content/site.ts)
// ---------------------------------------------------------------------------

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export interface Announcement {
  id: string;
  message: string;
  href: string;
  active: boolean;
  startAt?: ISODate;
  endAt?: ISODate;
}

export interface SiteConfig {
  nav: NavItem[];
  footer: {
    columns: { title: string; links: { label: string; href: string }[] }[];
  };
  announcement?: Announcement;
  social: { platform: string; url: string }[];
}

// ---------------------------------------------------------------------------
// Design Intelligence Lab (`/design-intelligence-lab`,
// 04-design-intelligence-lab.md) — Tier-1 flagship, 34 sections. Same
// discipline as AboutContent/StoryContent: fields the spec tags
// [VERIFIED CONTENT REQUIRED] or [MEDIA REQUIRED] stay optional here and
// are left undefined in content/pages/dil.ts rather than invented — see
// that file's doc comment for the section-by-section reasoning.
// ---------------------------------------------------------------------------

/**
 * Drives the hero CTA, sticky mobile CTA and the §30 apply/waitlist
 * section with no code deploy (04-design-intelligence-lab.md, page-level
 * state machine). `announce` = waitlist only; `applications_open` = full
 * application, per-city windows; `cohort_running` = waitlist + showcase;
 * `between_cohorts` = waitlist only, framed as "next cohort."
 */
export type ProgrammeState = "announce" | "applications_open" | "cohort_running" | "between_cohorts";

export interface ProblemGap {
  title: string;
  body: string;
}

/**
 * One of the 4 capability frameworks (§6–9). `applicationLine`
 * ("in the Lab you will…") and `microExample` are spec-mandated fields
 * with no spec-given copy to fill them — left undefined rather than
 * invented, same as Track.challengeFraming in content/tracks.ts.
 */
export interface DilFrameworkPanel {
  slug: string;
  name: string;
  stages: string[];
  applicationLine?: string;
  microExample?: string;
}

/**
 * §10 "Who it's for." `fitLine` is optional and left undefined until real
 * copy exists — the persona only becomes an expandable/detailed card once
 * it has one, same "no fake affordance" rule JourneyDiagram already
 * follows for stages without detail (components/ui/JourneyDiagram.tsx).
 */
export interface DilPersona {
  title: string;
  fitLine?: string;
}

/**
 * §11 eligibility. `detail` is the actual threshold/policy value — several
 * are [VERIFIED CONTENT REQUIRED] in spec (diaspora policy, hours/week,
 * language level) and stay undefined until confirmed; the checklist still
 * surfaces the category honestly rather than omitting the whole item.
 */
export interface DilEligibilityItem {
  label: string;
  detail?: string;
}

/** §24 sponsor tiers — package specifics are [VERIFIED CONTENT REQUIRED], left undefined. */
export interface DilSponsorTier {
  name: string;
  description?: string;
}

export interface DilInvolvementCopy {
  heading: string;
  body: string;
  waysIn?: string[];
  ctaId: string;
  ctaHref?: string;
  ctaLabel?: string;
}

export interface DilPageContent {
  seo: Seo;
  programmeState: ProgrammeState;
  hero: Hero;
  /** §2 — copy direction only in spec, no quoted line; deliberately no statistic ([METRIC REQUIRED], never publish uncited numbers). */
  africanOpportunityStatement: { title: string; body: string };
  problemGaps: ProblemGap[]; // exactly 3 — proof / practice / pathway
  proposition: string;
  definition: { body: string; capabilities: string[] }; // the five-petal list
  frameworks: DilFrameworkPanel[]; // exactly 4 — design thinking, systems thinking, decision intelligence, responsible AI
  responsibleAiPrinciples: string[];
  personas: DilPersona[];
  eligibility: DilEligibilityItem[];
  methodology: { steps: string[]; ventureLinkNote: string };
  /** §15 — explicitly illustrative, never a past cohort result. */
  exampleChallenge: { trackSlug: string; prompt: string; label: string };
  portfolioOutputs: string[];
  assessment: { stack: string[]; rubricDimensions: string[]; rubricNote?: string };
  verification: { body: string; nonAccreditationNote: string };
  mentorModel: { mentorRole: string; reviewerRole: string; vettingNote: string };
  /** [VERIFIED CONTENT REQUIRED: community platform + actual model] — section omitted while undefined. */
  cohortCommunity?: string;
  involvement: {
    employer: DilInvolvementCopy;
    government: DilInvolvementCopy;
    university: DilInvolvementCopy;
  };
  sponsorTiers: DilSponsorTier[];
  cityPartnership: { body: string };
  demoDay: string;
  successStoriesEmptyState: string;
  /** [VERIFIED CONTENT REQUIRED: FAQ answers] — section omitted while undefined; FAQPage schema must never render without it (acceptance criterion 3). */
  faq?: { q: string; a: string }[];
}
