import { Band } from "@/components/ui/Band";
import { Card } from "@/components/ui/Card";
import { Display } from "@/components/ui/Display";
import { Grid } from "@/components/ui/Grid";
import { Kicker } from "@/components/ui/Kicker";
import { SectionHead } from "@/components/ui/SectionHead";
import { Todo } from "@/components/ui/Todo";
import { FrameworkCard } from "@/components/shared/FrameworkCard";

const problems = [
  {
    title: "Survival thinking",
    text: "When environments are unpredictable, energy goes to getting through today, not to mapping, deciding and building for tomorrow.",
  },
  {
    title: "Unclear pathways",
    text: "Opportunity exists, but the route to it is invisible. Unreliable institutions and weak networks leave ability without a ladder.",
  },
  {
    title: "The leverage gap",
    text: "Peers in optimised environments inherit better tools, exposure and structured thinking. Same ability, radically different outcomes.",
  },
];

/** The three forces holding young people back, plus the outstanding proof-point note. */
export function LabProblem() {
  return (
    <Band tone="paper">
      <SectionHead num="Problem">
        <Display size="d2">Talent is everywhere. Leverage is not.</Display>
      </SectionHead>
      <Grid cols={3}>
        {problems.map((p, i) => (
          <FrameworkCard key={p.title} kicker={String(i + 1).padStart(2, "0")} title={p.title}>
            {p.text}
          </FrameworkCard>
        ))}
      </Grid>
      <Card variant="flag" className="mt-[26px]">
        <Kicker>Proof points</Kicker>
        <p className="m-0">
          <Todo>Youth unemployment and underemployment figures for target markets to be sourced and cited before funder meetings.</Todo>{" "}
          The deck&apos;s population statistics are marked &quot;verify&quot;, so they stay off the site until sourced.
        </p>
      </Card>
    </Band>
  );
}
