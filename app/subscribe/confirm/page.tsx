import type { Metadata } from "next";
import { Suspense } from "react";
import { ActionRow } from "@/components/ui/ActionRow";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ConfirmSubscription } from "@/components/shared/ConfirmSubscription";
import { StatusScreen } from "@/components/shared/StatusScreen";
import { readToken } from "@/lib/subscribe-token";

export const metadata: Metadata = { title: "Confirm your subscription | Victor Sonde", robots: { index: false } };

export default function ConfirmSubscriptionPage({ searchParams }: PageProps<"/subscribe/confirm">) {
  return (
    <main>
      {/* The token is only known per request, so it's read inside Suspense and the shell stays static. */}
      <Suspense
        fallback={
          <StatusScreen
            tone="dark"
            eyebrow={<Badge variant="open">One more step</Badge>}
            title="Confirm your subscription"
            titleSize="d2"
            lede="Checking your link…"
          >
            {null}
          </StatusScreen>
        }
      >
        <ConfirmContent searchParams={searchParams} />
      </Suspense>
    </main>
  );
}

async function ConfirmContent({ searchParams }: Pick<PageProps<"/subscribe/confirm">, "searchParams">) {
  const { token } = await searchParams;
  const read = typeof token === "string" ? readToken(token) : ({ error: "invalid" } as const);

  if ("error" in read) {
    return (
      <StatusScreen
        tone="dark"
        eyebrow={<Badge variant="soon">{read.error === "expired" ? "Link expired" : "Link not valid"}</Badge>}
        title={read.error === "expired" ? "This link has expired." : "We couldn't read this link."}
        titleSize="d2"
        lede="Confirmation links work for 7 days. Sign up again from the homepage and we'll send you a fresh one."
      >
        <ActionRow margin="mt-[26px]" className="justify-center">
          <ButtonLink href="/" arrow>
            Back to the site
          </ButtonLink>
        </ActionRow>
      </StatusScreen>
    );
  }

  return (
    <StatusScreen
      tone="dark"
      eyebrow={<Badge variant="open">One more step</Badge>}
      title="Confirm your subscription"
      titleSize="d2"
      lede={
        <>
          Get cohort dates, new simulations and Decision Intelligence Lab news at <strong>{read.email}</strong>.
          Unsubscribe any time.
        </>
      }
    >
      <ConfirmSubscription token={token as string} />
    </StatusScreen>
  );
}
