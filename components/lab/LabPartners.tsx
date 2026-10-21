import { Band } from "@/components/ui/Band";
import { Card } from "@/components/ui/Card";
import { Display } from "@/components/ui/Display";
import { Grid } from "@/components/ui/Grid";
import { Kicker } from "@/components/ui/Kicker";
import { Label } from "@/components/ui/Label";
import { SectionHead } from "@/components/ui/SectionHead";
import { Todo } from "@/components/ui/Todo";
import { FrameworkCard } from "@/components/shared/FrameworkCard";

const partnerTypes = [
  { kicker: "01 · Funders & foundations", text: "Fund whole cohorts and receive evidence-backed impact reporting." },
  { kicker: "02 · Corporates & CSR teams", text: "Sponsor and mentor; build talent pipelines and brand impact." },
  { kicker: "03 · Universities & institutions", text: "Co-deliver and accredit; extend reach into student bodies." },
  { kicker: "04 · Diaspora & development organisations", text: "Seed, scale and mentor; connect youth to global networks." },
];

const tiers = [
  {
    kicker: "Catalyst",
    title: "Pilot partner",
    text: "100 participants. Fund one pilot cohort, named in the impact report, quarterly briefing, two mentor seats.",
  },
  {
    kicker: "Architect",
    title: "Scale partner",
    text: "500–1,000 participants. Multi-cohort funding, co-branded cohorts, talent-pipeline access, mentor programme and data dashboard.",
  },
  {
    kicker: "Legacy",
    title: "Flagship partner",
    text: "5,000+ participants. Named flagship programme, strategic co-design seat, regional or national rollout, full impact platform.",
    accent: true,
  },
];

/** Partner types and contribution tiers. */
export function LabPartners() {
  return (
    <Band tone="dark">
      <SectionHead num="Partners">
        <Display size="d2" className="text-white">
          Many doors into one mission
        </Display>
      </SectionHead>
      <Grid cols={2}>
        {partnerTypes.map((p) => (
          <Card key={p.kicker}>
            <Kicker>{p.kicker}</Kicker>
            <p className="m-0">{p.text}</p>
          </Card>
        ))}
      </Grid>
      <Grid cols={3} className="mt-[26px]">
        {tiers.map((t) => (
          <FrameworkCard key={t.kicker} kicker={t.kicker} title={t.title} size="sm" variant={t.accent ? "accent" : "default"}>
            {t.text}
          </FrameworkCard>
        ))}
      </Grid>
      <Label tone="inverse" className="mt-[18px]">
        Contribution levels and per-participant costs are{" "}
        <Todo>validated during the pilot; figures not published until confirmed</Todo>
      </Label>
    </Band>
  );
}
