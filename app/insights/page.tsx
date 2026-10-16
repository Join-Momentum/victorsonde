import type { Metadata } from "next";
import { Band } from "@/components/ui/Band";
import { Label } from "@/components/ui/Label";
import { FrameworkLibrary } from "@/components/insights/FrameworkLibrary";
import { NewsletterFeature } from "@/components/insights/NewsletterFeature";
import { PageHeader } from "@/components/shared/PageHeader";

export const metadata: Metadata = { title: "Insights — Victor Sonde" };

export default function InsightsPage() {
  return (
    <main>
      <PageHeader
        tone="ink"
        eyebrow={<Label tone="inverse">Insights</Label>}
        title="Thinking out loud, in public"
        titleClassName="mt-3.5 mb-[22px] max-w-[14ch]"
        lede="Writing, video and frameworks on careers, AI, delivery and building institutions."
        ledeClassName="max-w-[58ch]"
      />
      <Band tone="white">
        <NewsletterFeature />
        <FrameworkLibrary />
      </Band>
    </main>
  );
}
