/**
 * Typed first-party event helper (08-technical.md §1, 09-seo-analytics-crm.md
 * §2.2). Every event name/param used in the app should go through `track()`
 * rather than calling `window.gtag` directly, so the canonical event
 * dictionary stays enforceable at compile time as it's filled in.
 *
 * Only the globally-required baseline events are typed so far
 * (page_view/scroll_depth/cta_click/nav_click/outbound_click/consent_update).
 * Add the remaining dictionary entries alongside the component/page that
 * first needs them, rather than pre-declaring events nothing fires yet.
 */

export interface EventMap {
  page_view: { template: string; builds?: string[]; venture?: string };
  scroll_depth: { pct: 25 | 50 | 75 | 100 };
  cta_click: { ctaId: string; position: string };
  nav_click: { item: string };
  outbound_click: { domain: string };
  consent_update: { state: "granted" | "denied" };
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function track<E extends keyof EventMap>(event: E, params: EventMap[E]): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, params);
}

/**
 * Form telemetry (09-seo-analytics-crm.md §2.2) and the per-route
 * `{route}_submit` conversion events are dynamically named — there's no
 * finite union to type them against, so this escape hatch exists
 * specifically for those. Prefer `track()` for anything in `EventMap`.
 */
export function trackDynamic(event: string, params: Record<string, unknown>): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, params);
}
