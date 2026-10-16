import { Band } from "@/components/ui/Band";
import { Display } from "@/components/ui/Display";
import { Grid } from "@/components/ui/Grid";
import { Kicker } from "@/components/ui/Kicker";
import { Label } from "@/components/ui/Label";
import { Split } from "@/components/ui/Split";
import { Steps } from "@/components/ui/Steps";
import { Todo } from "@/components/ui/Todo";
import { Card } from "@/components/ui/Card";
import { FrameworkCard } from "@/components/shared/FrameworkCard";

const process = [
  { title: "Apply and choose a discipline", detail: "Tell us where you're heading; pick the track that matches." },
  { title: "Get your brief", detail: "A realistic scenario with a client, constraints and a deadline." },
  { title: "Do the work", detail: "Produce the artefacts the role produces — not multiple-choice answers." },
  { title: "Get assessed", detail: "Structured feedback on the work and the thinking behind it." },
  { title: "Build the portfolio", detail: "Your evidence is compiled into a shareable, verifiable record." },
  { title: "Take it to market", detail: "Applications, interviews, promotion conversations — with proof attached." },
];

/** The six-step process, who the programme is for, and open logistics questions. */
export function HowItWorks() {
  return (
    <Band tone="paper">
      <Split cols="1.05fr .95fr" className="items-start">
        <div>
          <Label>How it works</Label>
          <Display size="d2" className="mb-5 mt-2.5">
            Six steps, one portfolio
          </Display>
          <Steps steps={process} tone="light" />
        </div>
        <Grid gap="gap-[18px]">
          <FrameworkCard kicker="Who it's for" title="People who can do the work but can't prove it">
            Career changers, graduates, returners, and people already in a job who need evidence to move up rather
            than sideways.
          </FrameworkCard>
          <FrameworkCard kicker="What you leave with" title="Four things, all yours">
            A completed simulation, assessed artefacts, a structured digital portfolio, and a clear account of how you
            made your decisions.
          </FrameworkCard>
          <Card variant="flag">
            <Kicker>To confirm before launch</Kicker>
            <p className="m-0 text-[.98rem]">
              <Todo>
                Start date, duration, weekly time commitment, cost or funding, eligibility, cohort size, assessment
                model and certification status.
              </Todo>{" "}
              Nothing is stated here until you&apos;ve confirmed it.
            </p>
          </Card>
        </Grid>
      </Split>
    </Band>
  );
}
