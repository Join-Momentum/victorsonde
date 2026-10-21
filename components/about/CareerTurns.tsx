import { Band } from "@/components/ui/Band";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Display } from "@/components/ui/Display";
import { Grid } from "@/components/ui/Grid";
import { SectionHead } from "@/components/ui/SectionHead";
import { Todo } from "@/components/ui/Todo";
import { FrameworkCard } from "@/components/shared/FrameworkCard";

/** Four turning points in the career story. */
export function CareerTurns() {
  return (
    <Band tone="paper">
      <SectionHead num="Turns">
        <Display size="d2">Four decisions that changed the direction</Display>
      </SectionHead>
      <Grid cols={4}>
        <FrameworkCard kicker="Turn one" title="From doing the work to leading it" size="sm">
          Moving from delivery practitioner to accountable leader.
        </FrameworkCard>
        <FrameworkCard kicker="Turn two" title="Into public and institutional work" size="sm">
          Transformation where the stakes are public, not commercial.
        </FrameworkCard>
        <FrameworkCard kicker="Turn three" title="Teaching, mentoring, speaking" size="sm">
          Realising the bottleneck was access to credible experience.
        </FrameworkCard>
        <FrameworkCard kicker="Turn four" title="Building the thing myself" size="sm">
          Founding the ventures behind the simulations and the portfolios.
        </FrameworkCard>
      </Grid>
      <p className="mt-[34px]">
        <ButtonLink href="/cohort" arrow>
          Apply for the Founding Cohort
        </ButtonLink>
        <ButtonLink href="/work" variant="secondary" className="ml-2.5">
          See the work
        </ButtonLink>
      </p>
    </Band>
  );
}
