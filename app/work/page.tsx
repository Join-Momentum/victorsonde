import type { Metadata } from "next";
import { Label } from "@/components/ui/Label";
import { PageHeader } from "@/components/shared/PageHeader";
import { CaseList } from "@/components/work/CaseList";

export const metadata: Metadata = { title: "Work & impact — Victor Sonde" };

export default function WorkPage() {
  return (
    <main>
      <PageHeader
        tone="ink"
        eyebrow={<Label tone="inverse">Work &amp; impact</Label>}
        title="Problems, decisions, delivery"
        lede="Not a list of job titles. This is what the problem was, what I was responsible for, what I decided and what changed."
      />
      <CaseList />
    </main>
  );
}
