import { ActionRow } from "@/components/ui/ActionRow";
import { Badge } from "@/components/ui/Badge";
import { Band } from "@/components/ui/Band";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Display } from "@/components/ui/Display";
import { Label } from "@/components/ui/Label";
import { Lede } from "@/components/ui/Lede";
import { Markers } from "@/components/ui/Markers";
import { Todo } from "@/components/ui/Todo";

/** Founding Cohort page header with the programme pitch and logistics markers. */
export function CohortHeader() {
  return (
    <Band tone="dark" as="header" container="wide" padding="pt-(--band-y) pb-[clamp(34px,5vw,60px)]">
      <Badge variant="open">Applications open</Badge>
      <Label tone="inverse" className="mb-0 mt-4">
        Career Bridge Foundation · powered by Evidentize.io
      </Label>
      <Display as="h1" size="d1" className="mb-5 mt-3.5 max-w-[17ch] text-white">
        Simulation-Based Work Experience Programme
      </Display>
      <Lede inverse className="max-w-[60ch]">
        Real professional work, in a realistic environment, assessed as you go. You finish with a portfolio that shows
        an employer what you can do — not a certificate that says you turned up.
      </Lede>
      <ActionRow>
        <ButtonLink href="/cohort" arrow>
          Apply for the Founding Cohort
        </ButtonLink>
        <ButtonLink href="/cohort" variant="secondary">
          Ask a question first
        </ButtonLink>
      </ActionRow>
      <Markers
        className="mt-2.5"
        items={[
          { value: "5", label: "disciplines" },
          { value: <Todo>TBC</Todo>, label: "cohort starts" },
          { value: <Todo>TBC</Todo>, label: "time commitment" },
          { value: <Todo>TBC</Todo>, label: "places available" },
        ]}
      />
    </Band>
  );
}
