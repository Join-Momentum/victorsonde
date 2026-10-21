import type { CaseSummaryData } from "@/components/work/CaseSummary";
import { Todo } from "@/components/ui/Todo";
import { images } from "@/lib/images";

export const caseSummaries: CaseSummaryData[] = [
  {
    tab: "CASE-01",
    image: { src: images.taskForceBriefing, alt: "Joint Task Force briefing" },
    figureTitle: "Defence & security capability",
    role: "Facilitator / delivery lead",
    category: "Institutional capability",
    title: "Joint task force capability programme",
    facts: [
      { term: "Problem", detail: "Multiple agencies needed to operate as one capability, not several parallel ones." },
      { term: "Delivered", detail: <Todo>Confirm whether this sits under Join Momentum Inc or a prior engagement.</Todo> },
      {
        term: "My remit",
        detail: "Design and facilitate the capability sessions; structure how the work was planned and tracked.",
      },
      { term: "Decisions", detail: <Todo>Key decisions to confirm: what you changed and why.</Todo> },
      { term: "Outcome", detail: <Todo>Outcome to confirm. Nothing published unless verifiable and cleared.</Todo> },
    ],
  },
  {
    tab: "CASE-02",
    image: { src: images.workingSession, alt: "Working session" },
    figureTitle: "Product & delivery leadership",
    role: "Product / delivery lead",
    category: "Digital transformation",
    title: "Taking a service from discovery to live",
    facts: [
      { term: "Problem", detail: "A change programme with clear intent and no reliable path to delivery." },
      { term: "My remit", detail: "Own the delivery: team, roadmap, dependencies, stakeholders, release." },
      { term: "Decisions", detail: <Todo>Client, sector and specifics to confirm, including what can be named.</Todo> },
      { term: "Outcome", detail: <Todo>Outcome to confirm.</Todo> },
    ],
  },
  {
    tab: "CASE-03",
    image: { src: images.presentingLectern, alt: "Training session" },
    figureTitle: "International training",
    role: "Designer & facilitator",
    category: "Programmes",
    title: "Capability programmes across borders",
    facts: [
      { term: "Problem", detail: "Skills programmes that teach content but don't produce demonstrable capability." },
      { term: "My remit", detail: "Programme design, facilitation and the evidence model underneath it." },
      { term: "Decisions", detail: "Build assessment around produced work rather than attendance." },
      { term: "Outcome", detail: <Todo>Participant numbers and locations to confirm before publishing.</Todo> },
    ],
  },
];
