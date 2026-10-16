export const versionChanges = [
  {
    kicker: "Brand",
    title: "Real palette applied",
    text: "Navy and red are gone. The site now runs on #F19817 orange, #241A18 warm dark, #1A1A1A mono black and white — sampled from your logo files. Dark text on orange only, never white.",
  },
  {
    kicker: "Identity",
    title: "Logo replaces the wordmark",
    text: "Primary horizontal lockup in the header, reversed on dark, stacked in the media kit, icon as favicon and social avatar.",
  },
  {
    kicker: "Hierarchy",
    title: "Career Bridge is now the conversion",
    text: 'The founding cohort belongs to Career Bridge Foundation and owns the primary CTA site-wide. The Lab became a separate, partner-facing initiative marked "launching soon".',
  },
  {
    kicker: "New page",
    title: "Founding Cohort",
    text: "A dedicated conversion page: five disciplines, how it works, who it's for, what you leave with, application form.",
  },
  {
    kicker: "New page",
    title: "The Lab",
    text: "The initiative page built from your deck: founder rationale, problem, method loop, six capabilities, beneficiaries, partner tiers, SDGs, pilot plan.",
  },
  {
    kicker: "Repositioned",
    title: "Join Momentum Inc is defence & security",
    text: "No longer described as general product and transformation advisory. It now reads as defence, security and intelligence consulting — operational readiness, critical systems, strategic advantage — with its own logo and a confidentiality note.",
  },
  {
    kicker: "Copy",
    title: "Two audiences, two asks",
    text: 'Career Bridge speaks to applicants ("apply"). The Lab speaks to funders and institutions ("fund, mentor, co-deliver"). They never compete for the same click.',
  },
];

export const assetRequests: string[][] = [
  ["Done", "Logo pack", "Received — primary, black, white, inverted, icon, horizontal and stacked", "Header, footer, media kit, favicon"],
  ["P1", "Cutout hero portrait", "Plain / evenly lit background, full or half body, 3000px+, portrait", "Homepage hero, /connect header"],
  ["P1", "Simulation screenshots (4–6)", "1600×1000, real workspace, task brief and portfolio export screens", "Founding Cohort page, homepage section 01"],
  ["P1", '"Meet Victor" video', "60–120s, 16:9, plus a 1920×1080 thumbnail", "Homepage featured video"],
  ["P1", "African youth / participant photography", "Landscape and portrait, 2400px+, consent cleared", "The Lab page — currently carries no participant imagery"],
  ["P2", "Career Bridge programme photos", "Mixed orientation, 2400px+", "Founding Cohort, Ventures, Media"],
  ["P2", "Speaking wide shots", "Stage with audience in frame, landscape", "Speaking hero, Media"],
  ["P2", "Venture logos", "SVG: Career Bridge Foundation, Evidentize.io, Decision Intelligence Lab (Join Momentum Inc received)", "Ventures, footer, attribution"],
  ["P3", "Approved headshot set", "3 crops (square, 4:5, 16:9), print and web resolution", "Media download"],
  ["P3", "Open Graph image", "1200×630, portrait + positioning line + logo", "Social sharing"],
];

export const contentToConfirm: string[][] = [
  ["Cohort logistics", "Start date, duration, weekly commitment, cost or funding, eligibility, places", "Applicants can't decide without them; page shows TBC until supplied"],
  ["Discipline detail", "What each of the five simulations actually asks people to produce", "Track cards currently describe the role, not the tasks"],
  ["Application destination", "Live URL or form endpoint", "Primary CTA on every page"],
  ["Assessment & credential", "Who assesses, against what, and what the credential is called", "Credibility of the whole proposition rests on this"],
  ["Lab naming", "Design vs Decision — final answer", "See the flag above"],
  ["Lab proof points", "Sourced youth unemployment figures for target markets", 'Deck marks its population stats "verify" — they stay off the site until sourced'],
  ["Lab funding figures", "Per-participant cost and tier amounts", "Partner tiers show benefits only until validated in the pilot"],
  ["Photo captions", "Event, location, date and your role for each photograph", "Every image carries context — that's the design's core device"],
  ["Case studies ×3", "Problem, remit, decisions, outcome — and what may be named publicly", "Work page shows structure only"],
  ["Speaking history", "Confirmed appearances with dates and audiences", "Nothing invented; section stays empty until supplied"],
  ["Newsletter URL", "Canonical LinkedIn newsletter link", "Subscriber count stays at the verified 3,600+"],
  ["Advisory entity", "Who delivers product and transformation advisory now that Join Momentum is defence and security only", 'That pathway has been removed from "Ways to work" until you say'],
  ["Defence case study", "Whether the Joint Task Force work sits under Join Momentum Inc, and what may be named", "Work page attribution"],
  ["Company information", "Registered names, numbers, addresses, required disclosures", "Footer legal block"],
];

export const designSystem = [
  {
    kicker: "Type",
    title: "Archivo · Newsreader · Plex Mono",
    text: "Heavy grotesk headlines to match the wordmark's weight, a serif body for large readable editorial copy, mono for labels, annotations and evidence captions.",
  },
  {
    kicker: "Signature",
    title: "The evidence caption",
    text: "Every photograph is filed like an exhibit — index tab, what, where, role. Your thesis applied to the site's own images.",
  },
  {
    kicker: "Layout",
    title: "Wider, bigger, asymmetric",
    text: "1280px content, 1520px full-bleed bands, 17–19px body type, alternating light and dark sections.",
  },
  {
    kicker: "Hierarchy",
    title: "One primary CTA",
    text: '"Apply for the Founding Cohort" everywhere. Evidentize.io is attribution; the Lab asks for partnership, not applications.',
  },
  {
    kicker: "Content model",
    title: "Typed data files",
    text: "Disciplines, offers, media items, videos, newsletter config, CTA labels and status badges all live in structured data — editable without touching components.",
  },
];
