"use client";

import { useActionState } from "react";
import { buttonClasses } from "@/components/ui/buttonClasses";
import { TextInput } from "@/components/ui/TextInput";
import { subscribe } from "@/lib/form-actions";
import { idleState } from "@/lib/forms";
import { cn } from "@/lib/cn";
import { FormTraps } from "./FormTraps";

type Props = {
  light?: boolean;
  /** Stack the button under the input instead of beside it. */
  stacked?: boolean;
  className?: string;
};

/** Single email field that adds the visitor to the cohort-updates contact list. */
export function SubscribeForm({ light, stacked, className }: Props) {
  const [state, action, pending] = useActionState(subscribe, idleState);

  if (state.status === "success") {
    return (
      <p role="status" className={cn("mb-0 mt-3.5 font-medium text-orange-ink inv:text-orange", className)}>
        {state.message}
      </p>
    );
  }

  return (
    <form action={action} noValidate className={cn("relative", className)}>
      <FormTraps />
      <div className={cn("gap-2.5", stacked ? "grid" : "flex flex-wrap")}>
        <TextInput
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          label="Email address"
          light={light}
          error={state.errors?.email}
        />
        <button
          type="submit"
          disabled={pending}
          className={buttonClasses("primary", "sm", cn("justify-center disabled:cursor-wait disabled:opacity-70", stacked && "w-full"))}
        >
          {pending ? "Adding…" : "Notify me"}
        </button>
      </div>
      {state.status === "error" && !state.errors && (
        <p role="alert" className="mb-0 mt-2 text-[.88rem] text-orange-ink inv:text-orange">
          {state.message}
        </p>
      )}
    </form>
  );
}
