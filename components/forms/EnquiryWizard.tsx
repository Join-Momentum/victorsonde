"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { trackDynamic } from "@/lib/analytics";
import { stepSchema } from "@/lib/validation/enquiry";
import type { FormField, LeadRoute } from "@/types/models";

/**
 * The multi-step form engine behind every routed enquiry
 * (07-design-system.md §5.7) — Contact, Speaking, DIL, Join Momentum,
 * Evidentize demo, Career Bridge, etc. all pass a different `LeadRoute`
 * config into the same component rather than each hand-building a form.
 *
 * Not yet implemented (flagged rather than faked): Turnstile on the final
 * step — no site key is provisioned yet, so only the honeypot field is
 * live; drop a <Turnstile> widget into the marked slot once
 * NEXT_PUBLIC_TURNSTILE_SITE_KEY exists. Rate limiting happens server-side
 * once Upstash is provisioned (see app/api/contact/route.ts).
 */
/**
 * `pipeline` is deliberately excluded: it's resolved server-side in
 * app/api/contact/route.ts, and on some routes (e.g. demoRoute,
 * joinMomentumRoute) it's a function — functions can't cross the
 * Server→Client Component prop boundary. Pass routes through
 * `content/routes/toClientRoute()` at each call site.
 */
export type ClientLeadRoute = Omit<LeadRoute, "pipeline">;

interface EnquiryWizardProps {
  route: ClientLeadRoute;
}

type FormValues = Record<string, string | boolean | string[]>;
type Status = "active" | "submitting" | "success" | "error";

const STORAGE_PREFIX = "enquiry:";

export function EnquiryWizard({ route }: EnquiryWizardProps) {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [values, setValues] = useState<FormValues>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("active");
  const [serverError, setServerError] = useState<string | null>(null);
  const startedRef = useRef(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const storageKey = `${STORAGE_PREFIX}${route.route}`;
  const step = route.steps[stepIndex];
  const isLastStep = stepIndex === route.steps.length - 1;

  useEffect(() => {
    // One-off restore from sessionStorage on mount (07-design-system.md
    // §5.7: "refresh mid-form preserves data") — sessionStorage isn't
    // available during SSR, so this can't be derived at render time.
    const saved = sessionStorage.getItem(storageKey);
    if (saved) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setValues(JSON.parse(saved));
      } catch {
        // ignore malformed cache
      }
    }
  }, [storageKey]);

  useEffect(() => {
    headingRef.current?.focus();
  }, [stepIndex]);

  useEffect(() => {
    function onBeforeUnload() {
      if (startedRef.current && status === "active") {
        trackDynamic("form_abandon", { route: route.route, lastStep: step.id });
      }
    }
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, [route.route, step.id, status]);

  function updateValue(name: string, value: string | boolean | string[]) {
    if (!startedRef.current) {
      startedRef.current = true;
      trackDynamic("form_start", { route: route.route });
    }
    const next = { ...values, [name]: value };
    setValues(next);
    sessionStorage.setItem(storageKey, JSON.stringify(next));
  }

  function validateStep(fields: FormField[]) {
    const schema = stepSchema(fields);
    const result = schema.safeParse(values);
    if (result.success) {
      setErrors({});
      return true;
    }
    const fieldErrors: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const name = String(issue.path[0]);
      fieldErrors[name] = issue.message;
    }
    setErrors(fieldErrors);
    trackDynamic("form_error", { route: route.route, field: Object.keys(fieldErrors)[0] });
    return false;
  }

  function handleNext() {
    if (!validateStep(step.fields)) return;
    trackDynamic("form_step", { route: route.route, step: step.id });
    setStepIndex((i) => Math.min(i + 1, route.steps.length - 1));
  }

  function handleBack() {
    setStepIndex((i) => Math.max(i - 1, 0));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateStep(step.fields)) return;

    setStatus("submitting");
    setServerError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          route: route.route,
          data: values,
          honeypot: values._website ?? "",
          consentVersion: route.consentCopyVersion,
        }),
      });

      if (!res.ok) {
        setStatus("error");
        setServerError("Something went wrong submitting this — your details are still here, try again.");
        return;
      }

      sessionStorage.removeItem(storageKey);
      trackDynamic(`${route.route}_submit`, { route: route.route });
      setStatus("success");
      router.push(route.thankYouPath);
    } catch {
      setStatus("error");
      setServerError("Something went wrong submitting this — your details are still here, try again.");
    }
  }

  const errorEntries = Object.entries(errors);

  return (
    <form onSubmit={isLastStep ? handleSubmit : (e) => e.preventDefault()} noValidate className="flex flex-col gap-6">
      <p className="text-sm text-ink-muted">
        Step {stepIndex + 1} of {route.steps.length} — {step.title}
      </p>

      {errorEntries.length > 0 && (
        <div role="alert" className="rounded-lg border border-error/40 bg-error/5 p-4 text-sm text-error">
          <p className="font-semibold">Check the following:</p>
          <ul className="mt-2 list-inside list-disc">
            {errorEntries.map(([name, message]) => (
              <li key={name}>
                <a href={`#field-${name}`} className="underline">
                  {message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <fieldset className="flex flex-col gap-5" disabled={status === "submitting"}>
        <legend className="sr-only">{step.title}</legend>
        <h3 ref={headingRef} tabIndex={-1} className="text-xl font-semibold text-ink outline-none">
          {step.title}
        </h3>

        {step.fields.map((field) => (
          <FieldInput
            key={field.name}
            field={field}
            value={values[field.name]}
            error={errors[field.name]}
            onChange={(v) => updateValue(field.name, v)}
          />
        ))}

        {isLastStep && (
          <input
            type="text"
            name="_website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute h-0 w-0 opacity-0"
            value={(values._website as string) ?? ""}
            onChange={(e) => updateValue("_website", e.target.value)}
          />
        )}
      </fieldset>

      {serverError && (
        <p role="alert" className="text-sm text-error">
          {serverError}
        </p>
      )}

      <div className="flex items-center gap-4">
        {stepIndex > 0 && (
          <Button type="button" variant="ghost" onClick={handleBack} disabled={status === "submitting"}>
            Back
          </Button>
        )}
        {isLastStep ? (
          <Button type="submit" isLoading={status === "submitting"}>
            Submit
          </Button>
        ) : (
          <Button type="button" onClick={handleNext}>
            Continue
          </Button>
        )}
      </div>
    </form>
  );
}

function FieldInput({
  field,
  value,
  error,
  onChange,
}: {
  field: FormField;
  value: string | boolean | string[] | undefined;
  error?: string;
  onChange: (value: string | boolean | string[]) => void;
}) {
  const id = `field-${field.name}`;
  const describedBy = [error && `${id}-error`, field.helpText && `${id}-help`].filter(Boolean).join(" ") || undefined;

  const label = (
    <label htmlFor={id} className="text-sm font-medium text-ink">
      {field.label}
      {field.required && <span aria-hidden="true"> *</span>}
    </label>
  );

  const commonInputClasses =
    "h-11 w-full rounded-md border border-border bg-surface px-4 text-sm text-ink";

  let control: React.ReactNode;

  if (field.type === "checkbox") {
    control = (
      <label className="flex items-start gap-3 text-sm text-ink">
        <input
          id={id}
          type="checkbox"
          checked={Boolean(value)}
          onChange={(e) => onChange(e.target.checked)}
          aria-describedby={describedBy}
          aria-invalid={Boolean(error) || undefined}
          className="mt-0.5 h-5 w-5 shrink-0"
        />
        <span>
          {field.label}
          {field.required && <span aria-hidden="true"> *</span>}
        </span>
      </label>
    );
  } else if (field.type === "textarea") {
    control = (
      <textarea
        id={id}
        required={field.required}
        maxLength={field.maxLength}
        value={(value as string) ?? ""}
        onChange={(e) => onChange(e.target.value)}
        aria-describedby={describedBy}
        aria-invalid={Boolean(error) || undefined}
        rows={4}
        className={commonInputClasses}
      />
    );
  } else if (field.type === "select") {
    control = (
      <select
        id={id}
        required={field.required}
        value={(value as string) ?? ""}
        onChange={(e) => onChange(e.target.value)}
        aria-describedby={describedBy}
        aria-invalid={Boolean(error) || undefined}
        className={commonInputClasses}
      >
        <option value="">Select…</option>
        {field.options?.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    );
  } else if (field.type === "multiselect") {
    const selected = Array.isArray(value) ? value : [];
    control = (
      <div className="flex flex-col gap-2">
        {field.options?.map((opt) => (
          <label key={opt.value} className="flex items-center gap-2 text-sm text-ink">
            <input
              type="checkbox"
              checked={selected.includes(opt.value)}
              onChange={(e) =>
                onChange(e.target.checked ? [...selected, opt.value] : selected.filter((v) => v !== opt.value))
              }
              className="h-4 w-4"
            />
            {opt.label}
          </label>
        ))}
      </div>
    );
  } else {
    control = (
      <input
        id={id}
        type={field.type === "date" ? "date" : field.type === "tel" ? "tel" : field.type}
        required={field.required}
        maxLength={field.maxLength}
        value={(value as string) ?? ""}
        onChange={(e) => onChange(e.target.value)}
        aria-describedby={describedBy}
        aria-invalid={Boolean(error) || undefined}
        className={commonInputClasses}
      />
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {field.type !== "checkbox" && label}
      {control}
      {field.helpText && (
        <p id={`${id}-help`} className="text-xs text-ink-muted">
          {field.helpText}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="text-xs text-error">
          {error}
        </p>
      )}
    </div>
  );
}
