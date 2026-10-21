import { ActionRow } from "@/components/ui/ActionRow";
import { Band } from "@/components/ui/Band";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Display } from "@/components/ui/Display";
import { Grid } from "@/components/ui/Grid";
import { Kicker } from "@/components/ui/Kicker";
import { SectionHead } from "@/components/ui/SectionHead";
import { Todo } from "@/components/ui/Todo";
import { FrameworkCard } from "@/components/shared/FrameworkCard";

const goals = [
  { kicker: "SDG 4", title: "Quality Education", text: "Applied, simulation-based learning that sticks." },
  { kicker: "SDG 8", title: "Decent Work", text: "Employability and enterprise readiness." },
  { kicker: "SDG 9", title: "Innovation", text: "Builds innovation capability at the edges." },
  {
    kicker: "SDG 10 · 17",
    title: "Equality & Partnerships",
    text: "Closes the leverage gap, built on funder, corporate and institution partnership.",
  },
];

/** SDG alignment, measurement approach and partner calls to action. */
export function LabImpact() {
  return (
    <Band tone="paper">
      <SectionHead num="Impact">
        <Display size="d2">Built to move five SDGs</Display>
      </SectionHead>
      <Grid cols={4} className="items-stretch">
        {goals.map((g) => (
          <FrameworkCard key={g.kicker} kicker={g.kicker} title={g.title} size="sm">
            {g.text}
          </FrameworkCard>
        ))}
      </Grid>
      <ActionRow margin="mt-8 mb-[30px]">
        <ButtonLink href="/lab" arrow>
          Fund the pilot
        </ButtonLink>
        <ButtonLink href="/lab" variant="secondary">
          Mentor a cohort
        </ButtonLink>
        <ButtonLink href="/lab" variant="secondary">
          Co-deliver &amp; scale
        </ButtonLink>
      </ActionRow>
    </Band>
  );
}
