import { Band } from "@/components/ui/Band";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { DefinitionList } from "@/components/ui/DefinitionList";
import { Display } from "@/components/ui/Display";
import { EvidenceFigure } from "@/components/ui/EvidenceFigure";
import { Grid } from "@/components/ui/Grid";
import { Kicker } from "@/components/ui/Kicker";
import { Label } from "@/components/ui/Label";
import { Lede } from "@/components/ui/Lede";
import { Split } from "@/components/ui/Split";
import { Steps } from "@/components/ui/Steps";
import { Todo } from "@/components/ui/Todo";
import { FrameworkCard } from "@/components/shared/FrameworkCard";
import { ScreenPlaceholder } from "@/components/shared/ScreenPlaceholder";
import type { Discipline } from "@/content/disciplines";

const tbc = <Todo>To confirm</Todo>;

const artefacts = [
  { title: "Artefact one", detail: tbc },
  { title: "Artefact two", detail: tbc },
  { title: "Artefact three", detail: tbc },
  { title: "Final portfolio submission", detail: "Everything compiled with the decision trail behind it." },
];

/** The simulation description, assessed artefacts, fit and logistics for one discipline. */
export function TrackDetail({ discipline }: { discipline: Discipline }) {
  return (
    <Band tone="white">
      <Split cols="1.05fr .95fr" className="items-start">
        <div>
          <Label tone="amber">The simulation</Label>
          <Display size="d3" className="mb-4 mt-2.5">
            What you&apos;ll actually be asked to do
          </Display>
          <Lede>
            You&apos;re dropped into a working scenario with a client, constraints and a deadline. No lectures, no
            multiple choice — you produce the artefacts the role produces, and they&apos;re assessed as you go.
          </Lede>
          <Card variant="flag" className="mt-5">
            <Kicker>Needs your detail</Kicker>
            <p className="m-0">
              <Todo>The specific scenario, task list and assessed artefacts for this track.</Todo> The structure below
              is the template every discipline page follows once you supply the content.
            </p>
          </Card>
          <Label tone="amber" className="mt-[30px]">
            Assessed artefacts
          </Label>
          <Steps steps={artefacts} tone="light" className="mt-3" />
        </div>
        <Grid gap="gap-[18px]">
          <EvidenceFigure
            tab="PLACEHOLDER"
            title="Task workspace"
            rows={[{ label: "Need", value: "Brief view, submission view, feedback view" }]}
            media={<ScreenPlaceholder size="1600 × 1200" ratio="standard" />}
          />
          <FrameworkCard kicker="Good fit if" title="You can do this work but can't prove it" size="sm">
            {discipline.fit}
          </FrameworkCard>
          <Card>
            <Kicker>Logistics</Kicker>
            <DefinitionList
              className="mt-1"
              items={[
                { term: "Starts", detail: tbc },
                { term: "Duration", detail: tbc },
                { term: "Per week", detail: tbc },
                { term: "Cost", detail: tbc },
              ]}
            />
          </Card>
          <ButtonLink href="/cohort" arrow className="justify-center">
            Apply for this track
          </ButtonLink>
        </Grid>
      </Split>
    </Band>
  );
}
