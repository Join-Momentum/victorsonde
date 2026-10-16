import Link from "next/link";
import { Band } from "@/components/ui/Band";
import { Display } from "@/components/ui/Display";
import { Grid } from "@/components/ui/Grid";
import { Lede } from "@/components/ui/Lede";
import { SectionHead } from "@/components/ui/SectionHead";
import { Todo } from "@/components/ui/Todo";
import { FrameworkCard } from "@/components/shared/FrameworkCard";
import { disciplines } from "@/content/disciplines";

/** Grid of the five simulation tracks, each linking to its track page. */
export function DisciplineCards() {
  return (
    <Band tone="white">
      <SectionHead num="Disciplines">
        <Display size="d2">Choose the work you want to prove</Display>
        <Lede className="mt-2.5">
          Five tracks are open to the founding cohort. Each one simulates the artefacts and decisions that role
          actually produces.
        </Lede>
      </SectionHead>
      <Grid cols={3}>
        {disciplines.map((d, i) => (
          <FrameworkCard
            key={d.slug}
            kicker={`Track ${String(i + 1).padStart(2, "0")}`}
            title={d.tag}
            footer={
              <Link
                href={`/track/${d.slug}`}
                className="mt-auto font-mono text-[.7rem] font-medium uppercase tracking-[.18em] text-orange-ink no-underline"
              >
                See this track →
              </Link>
            }
          >
            {d.lede} <Todo>Task list to confirm</Todo>
          </FrameworkCard>
        ))}
        <FrameworkCard variant="placeholder" kicker="More to come" title="Additional disciplines">
          New tracks are added as the programme grows. Join the update list to hear first.
        </FrameworkCard>
      </Grid>
    </Band>
  );
}
