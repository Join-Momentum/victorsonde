import type { Metadata } from "next";
import { Band } from "@/components/ui/Band";
import { EvidenceFigure } from "@/components/ui/EvidenceFigure";
import { Grid } from "@/components/ui/Grid";
import { Split } from "@/components/ui/Split";
import { Todo } from "@/components/ui/Todo";
import { SpeakingEnquiry } from "@/components/speaking/SpeakingEnquiry";
import { SpeakingFormats } from "@/components/speaking/SpeakingFormats";
import { SpeakingHeader } from "@/components/speaking/SpeakingHeader";
import { SpeakingThemes } from "@/components/speaking/SpeakingThemes";
import { images } from "@/lib/images";

export const metadata: Metadata = { title: "Speaking | Victor Sonde" };

export default function SpeakingPage() {
  return (
    <main>
      <SpeakingHeader />
      <Band tone="white">
        <Split className="items-start">
          <SpeakingThemes />
          <SpeakingFormats />
        </Split>
        <Grid cols={3} className="mt-[clamp(34px,5vw,60px)]">
          <EvidenceFigure
            image={{ src: images.presentingLectern, alt: "" }}
            tab="EX-08"
            title="Workshop facilitation"
            rows={[{ label: "Where", value: <Todo>To confirm</Todo> }]}
          />
          <EvidenceFigure
            image={{ src: images.taskForceBriefing, alt: "" }}
            tab="EX-09"
            title="Institutional briefing"
            rows={[{ label: "What", value: "Joint Task Force session" }]}
          />
          <EvidenceFigure
            image={{ src: images.workingSession, alt: "" }}
            tab="EX-10"
            title="Panel & roundtable"
            rows={[{ label: "Where", value: <Todo>To confirm</Todo> }]}
          />
        </Grid>
      </Band>
      <SpeakingEnquiry />
    </main>
  );
}
