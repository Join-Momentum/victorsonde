export type Discipline = {
  slug: string;
  /** Name used on track pages and cards. */
  title: string;
  /** Shorter name used on the track switcher chips. */
  chip: string;
  /** Name used on Founding Cohort cards and tag lists. */
  tag: string;
  lede: string;
  /** "Good fit if" copy on the track page. */
  fit: string;
};

export const disciplines: Discipline[] = [
  {
    slug: "pm",
    title: "Product Management",
    chip: "Product Management",
    tag: "Product Management",
    lede: "Discovery, prioritisation, roadmaps and the trade-off conversations that come with them.",
    fit: "Career changers moving into product, and delivery or analysis people who already do parts of the job.",
  },
  {
    slug: "ba",
    title: "Business Analysis",
    chip: "Business Analysis",
    tag: "Business Analysis",
    lede: "Requirements, process mapping, stakeholder interviews and options analysis.",
    fit: "People strong on detail and questioning who need a portfolio that shows structured analysis.",
  },
  {
    slug: "cti",
    title: "Cyber Threat Intelligence",
    chip: "Cyber Threat Intelligence",
    tag: "Cyber Threat Intelligence",
    lede: "Threat assessment, intelligence reporting and briefing decision-makers under uncertainty.",
    fit: "Security-curious professionals who need assessed reporting work, not another certificate.",
  },
  {
    slug: "proj",
    title: "Project Management",
    chip: "Project Management",
    tag: "Project Management",
    lede: "Planning, risk, dependencies, reporting and keeping delivery on the rails when it slips.",
    fit: "Coordinators and team leads ready to be trusted with a plan and its consequences.",
  },
  {
    slug: "va",
    title: "Virtual Administrative Assistance",
    chip: "Virtual Admin Assistant",
    tag: "Virtual Administrative Assistant",
    lede: "Coordination, inbox and diary control, documentation and client communication.",
    fit: "People building a remote support career who need evidence of reliability and judgement.",
  },
];

export function findDiscipline(slug: string): Discipline | undefined {
  return disciplines.find((d) => d.slug === slug);
}
