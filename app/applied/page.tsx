import type { Metadata } from "next";
import { ActionRow } from "@/components/ui/ActionRow";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Steps } from "@/components/ui/Steps";
import { Todo } from "@/components/ui/Todo";
import { StatusScreen } from "@/components/shared/StatusScreen";

export const metadata: Metadata = { title: "Application received — Victor Sonde" };

const nextSteps = [
  { title: "We review your application", detail: <Todo>Timescale to confirm</Todo> },
  { title: "A short conversation", detail: "To match you to the right discipline and confirm the commitment." },
  { title: "Your place and start date", detail: "Confirmed in writing, with everything you need before day one." },
];

export default function AppliedPage() {
  return (
    <main>
      <StatusScreen
        tone="dark"
        width="max-w-[720px]"
        eyebrow={<Badge variant="open">Application received</Badge>}
        title="That's in. Here's what happens next."
        titleSize="d2"
        lede="You'll get a confirmation email within minutes. If it doesn't arrive, check your spam folder before assuming something broke."
      >
        <Steps steps={nextSteps} className="mt-7 text-left" />
        <ActionRow margin="mt-[30px]" className="justify-center">
          <ButtonLink href="/insights" arrow>
            Read the newsletter meanwhile
          </ButtonLink>
          <ButtonLink href="/" variant="secondary">
            Back to the site
          </ButtonLink>
        </ActionRow>
      </StatusScreen>
    </main>
  );
}
