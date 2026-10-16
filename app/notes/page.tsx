import type { Metadata } from "next";
import { Band } from "@/components/ui/Band";
import { Display } from "@/components/ui/Display";
import { Grid } from "@/components/ui/Grid";
import { Label } from "@/components/ui/Label";
import { SectionHead } from "@/components/ui/SectionHead";
import { DesignSystemSummary } from "@/components/notes/DesignSystemSummary";
import { NamingDecision } from "@/components/notes/NamingDecision";
import { FrameworkCard } from "@/components/shared/FrameworkCard";
import { NotesTable } from "@/components/shared/NotesTable";
import { PageHeader } from "@/components/shared/PageHeader";
import { assetRequests, contentToConfirm, versionChanges } from "@/content/notes";

export const metadata: Metadata = { title: "Build notes — Victor Sonde" };

export default function NotesPage() {
  return (
    <main>
      <PageHeader
        tone="dark"
        eyebrow={<Label tone="inverse">Build notes</Label>}
        title="Decisions, gaps and one naming question"
        titleClassName="mt-3.5 mb-[22px] max-w-[15ch]"
        lede="Nothing on this preview is invented. Every gap is listed here instead — one thing needs a decision from you before anything is built."
      />
      <Band tone="white">
        <NamingDecision />

        <SectionHead num="Changes">
          <Display size="d2">What moved in this version</Display>
        </SectionHead>
        <Grid cols={3} className="mb-[clamp(34px,5vw,52px)]">
          {versionChanges.map((c) => (
            <FrameworkCard key={c.title} kicker={c.kicker} title={c.title} size="sm">
              {c.text}
            </FrameworkCard>
          ))}
        </Grid>

        <Display size="d3" className="mb-7">
          Asset requests
        </Display>
        <NotesTable headers={["Priority", "Asset", "Spec", "Where it goes"]} rows={assetRequests} />

        <Display size="d3" className="mb-[18px] mt-[clamp(38px,5vw,60px)]">
          Content to confirm
        </Display>
        <NotesTable headers={["Item", "Needed", "Why"]} rows={contentToConfirm} />

        <DesignSystemSummary />
      </Band>
    </main>
  );
}
