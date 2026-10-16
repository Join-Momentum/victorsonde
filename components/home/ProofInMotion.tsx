import Link from "next/link";
import { Band } from "@/components/ui/Band";
import { Display } from "@/components/ui/Display";
import { EvidenceFigure } from "@/components/ui/EvidenceFigure";
import { Grid } from "@/components/ui/Grid";
import { Label } from "@/components/ui/Label";
import { SectionHead } from "@/components/ui/SectionHead";
import { Todo } from "@/components/ui/Todo";
import { images } from "@/lib/images";

/** Homepage section 05: three captioned photographs of the work. */
export function ProofInMotion() {
  return (
    <Band tone="white">
      <SectionHead num="05">
        <Label>Proof in motion</Label>
        <Display size="d2">Where the work actually happens</Display>
      </SectionHead>
      <Grid cols={3}>
        <EvidenceFigure
          image={{ src: images.taskForceBriefing, alt: "Victor Sonde briefing at a Joint Task Force session" }}
          tab="EX-02"
          title="Joint Task Force briefing"
          rows={[
            { label: "What", value: 'Institutional capability session — "Working together for a safer future"' },
            { label: "Where", value: <Todo>Location &amp; date to confirm</Todo> },
            { label: "Role", value: "Facilitator / delivery lead" },
          ]}
        />
        <EvidenceFigure
          image={{ src: images.speakingLectern, alt: "Victor Sonde speaking at a lectern" }}
          tab="EX-03"
          title="Speaking to practitioners"
          rows={[
            { label: "What", value: "Keynote on evidence-based employability" },
            { label: "Where", value: <Todo>Event name to confirm</Todo> },
            { label: "Role", value: "Speaker" },
          ]}
        />
        <EvidenceFigure
          image={{ src: images.workingSession, alt: "Victor Sonde in a working session" }}
          tab="EX-04"
          title="Programme working session"
          rows={[
            { label: "What", value: "Design and delivery planning with partners" },
            { label: "Where", value: <Todo>Programme name to confirm</Todo> },
            { label: "Role", value: "Product & delivery lead" },
          ]}
        />
      </Grid>
      <p className="mt-[26px]">
        <Link href="/media" className="no-underline">
          <Label as="span" tone="amber">
            See the full media archive →
          </Label>
        </Link>
      </p>
    </Band>
  );
}
