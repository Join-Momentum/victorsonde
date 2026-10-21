"use client";

import { useActionState, type ReactNode } from "react";
import { buttonClasses } from "@/components/ui/buttonClasses";
import { TextField } from "@/components/ui/TextField";
import { submitEnquiry } from "@/lib/form-actions";
import { forms, idleState, type FormKind } from "@/lib/forms";
import { cn } from "@/lib/cn";
import { FormTraps } from "./FormTraps";

type Props = {
  /** Which form definition to render and submit. */
  form: FormKind;
  submitLabel: string;
  light?: boolean;
  note: ReactNode;
};

/** Stacked fields with a full-width submit, delivered by email through the enquiry Server Action. */
export function EnquiryForm({ form, submitLabel, light, note }: Props) {
  const [state, action, pending] = useActionState(submitEnquiry.bind(null, form), idleState);
  const muted = light ? "text-muted" : "text-muted-dk";

  if (state.status === "success") {
    return (
      <p role="status" className="m-0 font-display text-[1.1rem] font-semibold">
        Thanks, your message has been sent.
      </p>
    );
  }

  return (
    <form action={action} noValidate className="relative">
      <FormTraps />
      {forms[form].fields.map((field, i) => (
        <TextField
          key={field.name}
          {...field}
          light={light}
          error={state.errors?.[field.name]}
          defaultValue={state.values?.[field.name]}
          margin={i === 0 ? "mt-0" : undefined}
        />
      ))}
      <button
        type="submit"
        disabled={pending}
        className={buttonClasses("primary", "sm", "mt-3 w-full justify-center disabled:cursor-wait disabled:opacity-70")}
      >
        {pending ? "Sending…" : submitLabel}
      </button>
      {state.status === "error" && state.message && (
        <p role="alert" className="mb-0 mt-3 text-[.92rem] font-medium text-orange-ink inv:text-orange">
          {state.message}
        </p>
      )}
      <p className={cn("mb-0 mt-3 font-mono text-[.66rem]", muted)}>{note}</p>
    </form>
  );
}
