import { Card } from "@/components/ui/Card";
import { Display } from "@/components/ui/Display";
import { Kicker } from "@/components/ui/Kicker";

/** The open "Design vs Decision" naming question. */
export function NamingDecision() {
  return (
    <Card variant="flag" className="mb-[clamp(34px,5vw,52px)]">
      <Kicker>Needs your decision</Kicker>
      <Display size="d3" className="mb-3 mt-2">
        &quot;Design&quot; or &quot;Decision&quot; Intelligence Lab?
      </Display>
      <p className="m-0">
        Your brief says <strong>Design</strong> Intelligence Lab. The pitch deck you supplied is titled{" "}
        <strong>Decision</strong> Intelligence Lab throughout, and the method it describes (diagnose, map, decide,
        design, feedback, evidence) is literally decision intelligence. This preview uses &quot;Design&quot; because
        that&apos;s what you wrote, but the name appears in the domain, the deck, funder conversations and every CTA.
        It needs settling before build, not after.
      </p>
    </Card>
  );
}
