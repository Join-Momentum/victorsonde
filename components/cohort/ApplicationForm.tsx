import { Band } from "@/components/ui/Band";
import { Card } from "@/components/ui/Card";
import { Display } from "@/components/ui/Display";
import { Label } from "@/components/ui/Label";
import { Lede } from "@/components/ui/Lede";
import { Split } from "@/components/ui/Split";
import { EnquiryForm } from "@/components/shared/EnquiryForm";

/** Founding cohort application band. */
export function ApplicationForm() {
  return (
    <Band tone="ink">
      <Split cols="1.1fr .9fr" className="items-center">
        <div>
          <Label tone="inverse">Applications</Label>
          <Display size="d2" className="mb-3.5 mt-2.5 text-white">
            Join the founding cohort
          </Display>
          <Lede inverse>
            Founding participants shape the programme. Smaller group, more direct access, and your work becomes part
            of the evidence that this model works.
          </Lede>
        </div>
        <Card>
          <EnquiryForm form="application" submitLabel="Apply now" note="Applications go straight to the cohort team." />
        </Card>
      </Split>
    </Band>
  );
}
