# Lead routes

One `LeadRoute` config per form (`types/models.ts`), consumed by the
`EnquiryWizard` component and `lib/crm/router.ts`. Field lists and pipeline
mappings come from `09-seo-analytics-crm.md` §3.2 and each page's own
spec doc — don't invent fields beyond what's specified there.

**Built so far:** `dil-participant-waitlist`, `dil-participant-application`,
`speaking`, `join-momentum`, `cb-talent`, `cb-employer`, `demo` (Evidentize,
splits employer/provider), `advisory`, `general`, `dil-sponsor`,
`dil-challenge`, `dil-mentor`, `dil-city`. All 5 DIL involvement pipelines
are wired into `/design-intelligence-lab` (`app/(site)/design-intelligence-lab/page.tsx`,
`content/pages/dil.ts`) — the Phase 3 flagship page from
`PROJECT-CHECKLIST.md` §4c.

**Still to add** (build alongside the page that uses them, per
`PROJECT-CHECKLIST.md` §5): `sponsor-funder`, `mentor` (Community, distinct
from `dil-mentor` — same vetting workflow, different entry point per
`dil-mentor.ts`'s doc comment), `financial` (fields only — copy is
compliance-owned, see `content/financial/`), `media`, `books-bulk`,
`newsletter`, `partnership`, `contact` (the generic router step 1 on
`/contact` that deep-links into the above).
