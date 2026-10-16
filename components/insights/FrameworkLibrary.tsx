import Link from "next/link";
import { Display } from "@/components/ui/Display";
import { Grid } from "@/components/ui/Grid";
import { SectionHead } from "@/components/ui/SectionHead";
import { Todo } from "@/components/ui/Todo";
import { FrameworkCard } from "@/components/shared/FrameworkCard";

/** Recurring frameworks, then the library of articles, video and podcasts. */
export function FrameworkLibrary() {
  return (
    <>
      <SectionHead num="Frameworks">
        <Display size="d3">Ideas I keep returning to</Display>
      </SectionHead>
      <Grid cols={3}>
        <FrameworkCard kicker="Framework" title="Join → Prove → Progress">
          How people move from access, to demonstrated capability, to real opportunity — and where most programmes
          break the chain.
        </FrameworkCard>
        <FrameworkCard kicker="Framework" title="Evidence-based employability">
          Designing careers support around produced work rather than attendance, completion or self-description.
        </FrameworkCard>
        <FrameworkCard kicker="Framework" title="Decision architecture">
          Diagnose, map, decide, design, feedback, evidence — the loop behind the Decision Intelligence Lab.
        </FrameworkCard>
      </Grid>

      <SectionHead num="Library" className="mb-[clamp(26px,4vw,52px)] mt-[clamp(38px,5vw,64px)]">
        <Display size="d3">Articles, video and podcasts</Display>
      </SectionHead>
      <Grid cols={3}>
        <FrameworkCard
          kicker={
            <>
              Article · <Todo>to import</Todo>
            </>
          }
          title="Recent newsletter editions"
          size="sm"
          footer={
            <Link
              href="/article"
              className="mt-auto font-mono text-[.7rem] font-medium uppercase tracking-[.18em] text-orange-ink no-underline"
            >
              Open an edition →
            </Link>
          }
        >
          Pull the three most recent LinkedIn editions in automatically, with title, date and link.
        </FrameworkCard>
        <FrameworkCard
          kicker={
            <>
              Video · <Todo>to supply</Todo>
            </>
          }
          title="Latest video"
          size="sm"
        >
          Thumbnail, duration and modal player — reusable across YouTube, Vimeo or Mux.
        </FrameworkCard>
        <FrameworkCard
          kicker={
            <>
              Podcast · <Todo>to supply</Todo>
            </>
          }
          title="Appearances"
          size="sm"
        >
          Episode title, show, date and listen link. Nothing listed without a source.
        </FrameworkCard>
      </Grid>
    </>
  );
}
