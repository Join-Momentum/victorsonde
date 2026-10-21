import type { Metadata } from "next";
import Link from "next/link";
import { Band } from "@/components/ui/Band";
import { Label } from "@/components/ui/Label";
import { Biographies } from "@/components/presskit/Biographies";
import { Downloads } from "@/components/presskit/Downloads";
import { QuickFacts } from "@/components/presskit/QuickFacts";
import { PageHeader } from "@/components/shared/PageHeader";

export const metadata: Metadata = { title: "Press & speaker kit | Victor Sonde" };

export default function PressKitPage() {
  return (
    <main>
      <PageHeader
        tone="dark"
        padding="pt-(--band-y) pb-[clamp(34px,5vw,56px)]"
        eyebrow={
          <Link href="/media" className="no-underline">
            <Label as="span" tone="inverse">
              ← Media
            </Label>
          </Link>
        }
        title="Press & speaker kit"
        titleClassName="mt-4 mb-5 max-w-[14ch]"
        lede="Everything an event organiser, journalist or partner needs, without emailing to ask for it."
        ledeClassName="max-w-[58ch]"
      />
      <Band tone="white">
        <Biographies />
        <Downloads />
        <QuickFacts />
      </Band>
    </main>
  );
}
