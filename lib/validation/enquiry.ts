import { z } from "zod";
import type { FormField, LeadRoute } from "@/types/models";

/**
 * Builds a zod schema from a route's FormField[] metadata rather than
 * hand-writing one per route — EnquiryWizard uses this per-step
 * client-side, and the /api/contact route handler uses the full-route
 * version server-side, so both stay derived from the same source
 * (07-design-system.md §5.7: "per-step client validation, zod schema
 * shared with server").
 */
export function fieldSchema(field: FormField): z.ZodTypeAny {
  let schema: z.ZodTypeAny;

  switch (field.type) {
    case "email":
      schema = z.string().email("Enter a valid email address");
      break;
    case "checkbox":
      schema = z.boolean();
      break;
    case "multiselect":
      schema = z.array(z.string());
      break;
    default: {
      let str = z.string();
      if (field.maxLength) str = str.max(field.maxLength);
      schema = str;
    }
  }

  if (field.required) {
    if (field.type === "checkbox") {
      schema = (schema as z.ZodBoolean).refine((v) => v === true, "Required");
    } else if (field.type !== "email") {
      schema = (schema as z.ZodString).min(1, "Required");
    }
  } else {
    schema = schema.optional();
  }

  return schema;
}

export function stepSchema(fields: FormField[]) {
  const shape: Record<string, z.ZodTypeAny> = {};
  for (const field of fields) shape[field.name] = fieldSchema(field);
  return z.object(shape);
}

export function routeSchema(route: LeadRoute) {
  const shape: Record<string, z.ZodTypeAny> = {};
  for (const step of route.steps) {
    for (const field of step.fields) shape[field.name] = fieldSchema(field);
  }
  return z.object(shape);
}
