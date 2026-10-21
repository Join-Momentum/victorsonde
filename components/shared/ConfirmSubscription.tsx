"use client";

import { useActionState } from "react";
import { buttonClasses } from "@/components/ui/buttonClasses";
import { confirmSubscription } from "@/lib/form-actions";
import { idleState } from "@/lib/forms";

/**
 * Confirm button for the double opt-in. Confirming takes a click rather than happening on page
 * load, so mail scanners that open links can't subscribe anyone.
 */
export function ConfirmSubscription({ token }: { token: string }) {
  const [state, action, pending] = useActionState(confirmSubscription.bind(null, token), idleState);

  if (state.status === "success") {
    return (
      <p role="status" className="mb-0 mt-[26px] font-medium text-orange">
        You&apos;re on the list. A welcome email is on its way.
      </p>
    );
  }

  return (
    <form action={action} className="mt-[26px]">
      <button
        type="submit"
        disabled={pending}
        className={buttonClasses("primary", "md", "justify-center disabled:cursor-wait disabled:opacity-70")}
      >
        {pending ? "Confirming…" : "Confirm my subscription"}
      </button>
      {state.status === "error" && (
        <p role="alert" className="mb-0 mt-3 text-[.92rem] text-orange">
          {state.message}
        </p>
      )}
    </form>
  );
}
