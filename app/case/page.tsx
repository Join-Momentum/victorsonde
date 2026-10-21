import type { Metadata } from "next";
import Link from "next/link";
import { Band } from "@/components/ui/Band";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { EvidenceFigure } from "@/components/ui/EvidenceFigure";
import { Grid } from "@/components/ui/Grid";
import { Label } from "@/components/ui/Label";
import { Split } from "@/components/ui/Split";
import { Todo } from "@/components/ui/Todo";
import { CaseNarrative } from "@/components/case/CaseNarrative";
import { PageHeader } from "@/components/shared/PageHeader";
import { images } from "@/lib/images";

export const metadata: Metadata = { title: "Joint task force capability programme | Victor Sonde" };

export default function CasePage() {
  return (
    <main>
      <PageHeader
        tone="ink"
        padding="pt-(--band-y) pb-[clamp(34px,5vw,56px)]"
        eyebrow={
          <>
            <Link href="/work" className="no-underline">
              <Label as="span" tone="inverse">
                ← Work &amp; impact
              </Label>
            </Link>
            <Label tone="soft" className="mb-0 mt-[18px]">
              Case study 01 · Institutional capability
            </Label>
          </>
        }
        title="Joint task force capability programme"
        titleClassName="mt-3 mb-5 max-w-[16ch]"
        lede="Multiple agencies needed to operate as one capability, not several parallel ones. My remit was to design and facilitate the sessions that made that possible."
      />
      <Band tone="white">
        <Split cols="1.05fr .95fr" className="items-start">
          <CaseNarrative />
          <Grid gap="gap-[18px]">
            <EvidenceFigure
              image={{ src: images.taskForceBriefing, alt: "Joint Task Force briefing" }}
              tab="CASE-01"
              title="Briefing the task force"
              rows={[
                { label: "What", value: '"Working together for a safer future"' },
                { label: "Where", value: <Todo>To confirm</Todo> },
                { label: "Role", value: "Facilitator / delivery lead" },
              ]}
            />
            <EvidenceFigure
              image={{ src: images.workingSession, alt: "Working session" }}
              tab="CASE-01b"
              title="Planning session"
              rows={[{ label: "Role", value: "Product & delivery lead" }]}
            />
            <ButtonLink href="/work" variant="secondary" arrow className="justify-center">
              All case studies
            </ButtonLink>
          </Grid>
        </Split>
      </Band>
    </main>
  );
}
