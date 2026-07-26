# Lead routes

One `LeadRoute` config per form (`types/models.ts`), consumed by the
`EnquiryWizard` component and `lib/crm/router.ts`. Field lists and pipeline
mappings come from `09-seo-analytics-crm.md` §3.2 and each page's own
spec doc — don't invent fields beyond what's specified there.

**Built so far:** `dil-participant-waitlist`, `dil-participant-application`,
`speaking`, `join-momentum`, `cb-talent`.

**Still to add** (build alongside the page that uses them, per
`PROJECT-CHECKLIST.md` §5): `dil-sponsor`, `dil-challenge`, `dil-city`,
`dil-mentor`, `cb-employer`, `demo` (Evidentize, splits employer/provider),
`advisory`, `sponsor-funder`, `mentor` (Community), `financial` (fields
only — copy is compliance-owned, see `content/financial/`), `media`,
`books-bulk`, `newsletter`, `partnership`, `contact` (the generic router
step 1 on `/contact` that deep-links into the above).
