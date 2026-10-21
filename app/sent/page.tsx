import type { Metadata } from "next";
import { ActionRow } from "@/components/ui/ActionRow";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Todo } from "@/components/ui/Todo";
import { StatusScreen } from "@/components/shared/StatusScreen";

export const metadata: Metadata = { title: "Message sent | Victor Sonde" };

export default function SentPage() {
  return (
    <main>
      <StatusScreen
        tone="dark"
        eyebrow={<Badge variant="open">Message sent</Badge>}
        title="Thanks, it's landed."
        titleSize="d2"
        lede={
          <>
            I read enquiries myself. <Todo>Expected response time to confirm</Todo>, and it&apos;ll come from a real
            address you can reply to.
          </>
        }
      >
        <ActionRow margin="mt-[26px]" className="justify-center">
          <ButtonLink href="/cohort" arrow>
            See the founding cohort
          </ButtonLink>
          <ButtonLink href="/" variant="secondary">
            Back to the site
          </ButtonLink>
        </ActionRow>
      </StatusScreen>
    </main>
  );
}
