import type { Metadata } from "next";
import { Label } from "@/components/ui/Label";
import { PageHeader } from "@/components/shared/PageHeader";
import { VentureMap } from "@/components/ventures/VentureMap";
import { VentureProfiles } from "@/components/ventures/VentureProfiles";

export const metadata: Metadata = { title: "Ventures — Victor Sonde" };

export default function VenturesPage() {
  return (
    <main>
      <PageHeader
        tone="dark"
        eyebrow={<Label tone="inverse">Ventures</Label>}
        title="One mission, five vehicles"
        titleClassName="mt-3.5 mb-[22px] max-w-[15ch]"
        lede="I build platforms, programmes and ventures that help people and institutions develop capability, turn it into meaningful progress, and make that progress more resilient. Five vehicles, five distinct jobs — here's how they connect, and which are live today."
        ledeClassName="max-w-[64ch]"
      />
      <VentureMap />
      <VentureProfiles />
    </main>
  );
}
