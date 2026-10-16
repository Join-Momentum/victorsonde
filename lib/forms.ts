import { disciplines } from "@/content/disciplines";

/**
 * Enquiry form definitions, shared by the form UI and the server action that validates and
 * delivers each submission. The server only ever reads the fields listed here.
 */

export type FieldDef = {
  name: string;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "textarea" | "select";
  required?: boolean;
  /** Maximum length in characters. */
  max?: number;
  autoComplete?: string;
  /** Choices for a select field. */
  options?: string[];
};

export type FormDef = {
  /** Shown in the email subject line. */
  title: string;
  fields: FieldDef[];
  /** Page to land on after a successful send; omit to confirm inline. */
  successHref?: string;
};

const name: FieldDef = { name: "name", label: "Your name", placeholder: "Your name", required: true, max: 120, autoComplete: "name" };
const email: FieldDef = {
  name: "email",
  label: "Email address",
  placeholder: "Email address",
  type: "email",
  required: true,
  max: 200,
  autoComplete: "email",
};

export const forms = {
  contact: {
    title: "General enquiry",
    successHref: "/sent",
    fields: [
      name,
      email,
      { name: "organisation", label: "Organisation", placeholder: "Organisation (optional)", max: 160, autoComplete: "organization" },
      { name: "subject", label: "Subject", placeholder: "What's this about?", required: true, max: 160 },
      { name: "message", label: "Message", placeholder: "Your message", type: "textarea", required: true, max: 4000 },
    ],
  },
  speaking: {
    title: "Speaking enquiry",
    successHref: "/sent",
    fields: [
      name,
      email,
      { name: "organisation", label: "Organisation", placeholder: "Organisation", required: true, max: 160, autoComplete: "organization" },
      { name: "date", label: "Event date", placeholder: "Event date (or rough timing)", max: 80 },
      {
        name: "message",
        label: "About the event",
        placeholder: "Audience, format and what they should leave with",
        type: "textarea",
        max: 4000,
      },
    ],
  },
  application: {
    title: "Founding Cohort application",
    successHref: "/applied",
    fields: [
      name,
      email,
      {
        name: "discipline",
        label: "Discipline",
        placeholder: "Discipline you're interested in",
        type: "select",
        required: true,
        options: disciplines.map((d) => d.title),
      },
      {
        name: "message",
        label: "Why now",
        placeholder: "Where you are now and what you want to prove (optional)",
        type: "textarea",
        max: 2000,
      },
    ],
  },
} satisfies Record<string, FormDef>;

export type FormKind = keyof typeof forms;

export type FormState = {
  status: "idle" | "error" | "success";
  message?: string;
  /** Per-field error messages, keyed by field name. */
  errors?: Record<string, string>;
  /** What was submitted, so fields can be refilled after React resets the form. */
  values?: Record<string, string>;
};

export const idleState: FormState = { status: "idle" };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isEmail(value: string) {
  return EMAIL.test(value);
}

/** Validates one field's value; returns an error message or nothing. */
export function fieldError(field: FieldDef, value: string): string | undefined {
  if (!value) return field.required ? `Enter ${field.label.toLowerCase()}.` : undefined;
  if (field.max && value.length > field.max) return `Keep this under ${field.max} characters.`;
  if (field.type === "email" && !isEmail(value)) return "Enter a valid email address.";
  if (field.options && !field.options.includes(value)) return "Choose one of the options.";
}
