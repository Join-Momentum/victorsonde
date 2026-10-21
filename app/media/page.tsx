import type { Metadata } from "next";
import Link from "next/link";
import { ActionRow } from "@/components/ui/ActionRow";
import { Band } from "@/components/ui/Band";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Kicker } from "@/components/ui/Kicker";
import { Label } from "@/components/ui/Label";
import { MediaGallery } from "@/components/media/MediaGallery";
import { PageHeader } from "@/components/shared/PageHeader";

export const metadata: Metadata = { title: "Media | Victor Sonde" };

export default function MediaPage() {
  return (
    <main>
      <PageHeader
        tone="dark"
        padding="pt-(--band-y) pb-[clamp(34px,5vw,60px)]"
        eyebrow={<Label tone="inverse">Media</Label>}
        title="The archive, and the press kit"
        lede="Photographs, video, appearances and approved assets for event organisers, journalists and partners. Every item carries context, not just a caption."
      >
        <ActionRow>
          <ButtonLink href="/presskit" size="sm" arrow>
            Open the press kit
          </ButtonLink>
          <ButtonLink href="/presskit" variant="secondary" size="sm">
            Headshots
          </ButtonLink>
          <ButtonLink href="/presskit" variant="secondary" size="sm">
            Logo pack
          </ButtonLink>
          <ButtonLink href="/presskit" variant="secondary" size="sm">
            Speaker one-pager
          </ButtonLink>
        </ActionRow>
      </PageHeader>
      <Band tone="paper">
        <MediaGallery />
      </Band>
    </main>
  );
}
