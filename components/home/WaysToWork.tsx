import { Band } from "@/components/ui/Band";
import { Display } from "@/components/ui/Display";
import { Label } from "@/components/ui/Label";
import { PathList } from "@/components/ui/PathList";
import { SectionHead } from "@/components/ui/SectionHead";
import { waysToWork } from "@/content/paths";

/** Homepage section 09: every route into working together. */
export function WaysToWork() {
  return (
    <Band tone="white">
      <SectionHead num="09">
        <Label>Ways to work with me</Label>
        <Display size="d2">Pick your door</Display>
      </SectionHead>
      <PathList items={waysToWork} />
    </Band>
  );
}
