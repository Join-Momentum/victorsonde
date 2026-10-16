import { ActionRow } from "@/components/ui/ActionRow";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Label } from "@/components/ui/Label";
import { StatusScreen } from "@/components/shared/StatusScreen";

export default function NotFound() {
  return (
    <main>
      <StatusScreen
        tone="ink"
        eyebrow={<Label tone="inverse">404</Label>}
        title="No evidence of that page."
        titleSize="d1"
        lede="The link is broken or the page has moved. Here's where most people are heading."
      >
        <ActionRow margin="mt-[26px]" className="justify-center">
          <ButtonLink href="/cohort" arrow>
            Apply for the Founding Cohort
          </ButtonLink>
          <ButtonLink href="/" variant="secondary">
            Home
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact
          </ButtonLink>
        </ActionRow>
      </StatusScreen>
    </main>
  );
}
