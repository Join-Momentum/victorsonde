import { Band } from "@/components/ui/Band";
import { Card } from "@/components/ui/Card";
import { Display } from "@/components/ui/Display";
import { Lede } from "@/components/ui/Lede";
import { Split } from "@/components/ui/Split";
import { EnquiryForm } from "@/components/shared/EnquiryForm";

/** Event enquiry form band. */
export function SpeakingEnquiry() {
  return (
    <Band tone="dark">
      <Split cols="1.1fr .9fr" className="items-center">
        <div>
          <Display size="d2" className="text-white">
            Enquire about an event
          </Display>
          <Lede inverse>Tell me the audience, the date and what you need them to leave with.</Lede>
        </div>
        <Card>
          <EnquiryForm form="speaking" submitLabel="Send enquiry" note="I read every enquiry myself." />
        </Card>
      </Split>
    </Band>
  );
}
