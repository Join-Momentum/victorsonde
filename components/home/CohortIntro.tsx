import { ActionRow } from "@/components/ui/ActionRow";
import { Badge } from "@/components/ui/Badge";
import { Band } from "@/components/ui/Band";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Display } from "@/components/ui/Display";
import { EvidenceFigure } from "@/components/ui/EvidenceFigure";
import { Label } from "@/components/ui/Label";
import { Lede } from "@/components/ui/Lede";
import { SectionHead } from "@/components/ui/SectionHead";
import { Split } from "@/components/ui/Split";
import { Steps } from "@/components/ui/Steps";
import { Tag } from "@/components/ui/Tag";
import { TagList } from "@/components/ui/TagList";
import { ScreenPlaceholder } from "@/components/shared/ScreenPlaceholder";
import { disciplines } from "@/content/disciplines";

const journey = [
  { title: "Choose your discipline", detail: "Five simulation tracks are open to the founding cohort." },
  { title: "Enter a realistic simulation", detail: "A workplace scenario built from real practice, not a quiz." },
  { title: "Complete professional tasks", detail: "Plans, analyses, briefings, decisions, the actual artefacts of the role." },
  { title: "Produce evidence", detail: "Your work is captured, structured and assessed as you go." },
  { title: "Build a portfolio", detail: "A credible digital record of capability you can share with anyone." },
  { title: "Progress towards opportunity", detail: "Interviews, promotions, transitions, with proof attached." },
];

/** Homepage section 01: the Founding Cohort programme. */
export function CohortIntro() {
  return (
    <Band tone="ink">
      <SectionHead num="01">
        <Badge variant="open">Applications open</Badge>
        <Label tone="inverse" className="mb-0 mt-3.5">
          Career Bridge Foundation
        </Label>
        <Display size="d2" className="mt-2 text-white">
          Simulation-Based Work
          <br />
          Experience Programme
        </Display>
        <Lede className="mt-2.5 text-orange">Practise the real work. Leave with a portfolio that proves it.</Lede>
      </SectionHead>

      <Split cols="1.05fr .95fr">
        <div>
          <Lede inverse>
            You don&apos;t get better at the job by reading about the job. Choose a discipline, step into realistic
            professional work a live brief, a difficult stakeholder, a deadline and everything you produce
            becomes evidence in a portfolio you keep.
          </Lede>
          <Steps steps={journey} className="mt-[26px]" />
        </div>
        <div>
          <Label tone="inverse">Five disciplines, open now</Label>
          <TagList className="mb-[26px] mt-3">
            {disciplines.map((d) => (
              <Tag key={d.slug} variant="hot">
                {d.tag}
              </Tag>
            ))}
          </TagList>
          <EvidenceFigure
            className="mb-[18px]"
            tab="PLACEHOLDER"
            title="Product screenshot slot"
            rows={[{ label: "Need", value: "Simulation workspace, task brief view, portfolio export" }]}
            media={<ScreenPlaceholder size="1600 × 1000" ratio="wide" />}
          />
          <ActionRow margin="m-0">
            <ButtonLink href="/cohort" arrow>
              Apply for the Founding Cohort
            </ButtonLink>
            <ButtonLink href="/cohort" variant="secondary">
              See what a simulation involves
            </ButtonLink>
          </ActionRow>
          <Label tone="soft" className="mt-[22px]">
            Delivered by <span className="text-orange">Career Bridge Foundation</span> · powered by{" "}
            <span className="text-orange">Evidentize.io</span>
          </Label>
        </div>
      </Split>
    </Band>
  );
}
