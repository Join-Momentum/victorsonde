import type { images } from "@/lib/images";
import { socialHref, socials } from "./socials";

export type ConnectCategory = "careers" | "ai" | "business" | "speaking";

export const connectFilters: { value: ConnectCategory | "all"; label: string }[] = [
  { value: "all", label: "Featured" },
  { value: "careers", label: "Careers" },
  { value: "ai", label: "AI" },
  { value: "business", label: "Business" },
  { value: "speaking", label: "Speaking" },
];

export type Pill = { label: string; tone?: "hot" | "free" };

/** Leading visual on an offer row: a photo from the image registry, or a drawn glyph. */
export type OfferVisual = { image: keyof typeof images } | { glyph: "disciplines" | "linkedin" | "guide" };

type Base = { id: string; categories: ConnectCategory[]; pills: Pill[]; title: string };

export type ConnectEntry =
  | (Base & { kind: "hero"; text: string; href: string; cta: string })
  | (Base & {
      kind: "offer";
      text: string;
      visual: OfferVisual;
      /** Page or URL the row opens. */
      href?: string;
      /** Title of a site video to play in the player instead of navigating. */
      video?: string;
    })
  | (Base & { kind: "capture"; text: string });

const linkedin = socials.find((s) => s.platform === "linkedin");
// Until the LinkedIn URL is confirmed, send newsletter readers to the on-site insights page.
const newsletterHref = linkedin?.url ? socialHref(linkedin).href : "/insights";

export const connectEntries: ConnectEntry[] = [
  {
    kind: "hero",
    id: "cohort",
    categories: ["careers", "ai"],
    pills: [{ label: "Applications open", tone: "hot" }, { label: "5 disciplines" }],
    title: "Simulation-Based Work Experience",
    text: "Career Bridge Foundation's founding cohort. Do the real work, leave with an evidence portfolio.",
    href: "/cohort",
    cta: "Apply for the Founding Cohort",
  },
  {
    kind: "offer",
    id: "disciplines",
    categories: ["careers", "ai"],
    pills: [{ label: "Explore" }],
    title: "See the five disciplines",
    text: "Product, business analysis, cyber threat intelligence, project management, VA.",
    href: "/track/pm",
    visual: { glyph: "disciplines" },
  },
  {
    kind: "capture",
    id: "updates",
    categories: ["careers", "ai"],
    pills: [{ label: "Updates", tone: "hot" }],
    title: "Cohort & launch updates",
    text: "Cohort dates, new simulations and Lab news. No spam, unsubscribe any time.",
  },
  {
    kind: "offer",
    id: "lab",
    categories: ["business", "ai"],
    pills: [{ label: "Launching soon" }, { label: "Partners" }],
    title: "Decision Intelligence Lab",
    text: "Simulation-based capacity building for African youth, 18–45. Fund, mentor or co-deliver.",
    href: "/lab",
    visual: { image: "workingSession" },
  },
  {
    kind: "offer",
    id: "newsletter",
    categories: ["careers", "business"],
    pills: [{ label: "Free", tone: "free" }, { label: "3,600+ readers" }],
    title: "The LinkedIn newsletter",
    text: "Careers, AI and transformation — practical, no filler.",
    href: newsletterHref,
    visual: { glyph: "linkedin" },
  },
  {
    kind: "offer",
    id: "video",
    categories: ["ai"],
    pills: [{ label: "New video" }],
    title: "Why capability needs evidence",
    text: "The 4-minute version of the whole argument.",
    video: "Why capability needs evidence",
    visual: { image: "meetVictorThumb" },
  },
  {
    kind: "offer",
    id: "guide",
    categories: ["careers"],
    pills: [{ label: "Free guide", tone: "free" }],
    title: "Build a career portfolio that holds up",
    text: "What to include, what to cut, and how to structure proof.",
    href: "/insights",
    visual: { glyph: "guide" },
  },
  {
    kind: "offer",
    id: "speaking",
    categories: ["speaking", "business"],
    pills: [{ label: "Enquiry" }],
    title: "Speaking & collaboration",
    text: "Keynotes, workshops, programme design and partnerships.",
    href: "/speaking",
    visual: { image: "speakingLectern" },
  },
  {
    kind: "offer",
    id: "defence",
    categories: ["business"],
    pills: [{ label: "Advisory" }],
    title: "Defence & security consulting",
    text: "Join Momentum Inc — operational readiness, critical systems and strategic advantage.",
    href: "/ventures",
    visual: { image: "taskForceBriefing" },
  },
];
