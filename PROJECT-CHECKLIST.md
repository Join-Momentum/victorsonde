# victorsonde.com — Project Checklist

Derived from the 10 planning docs (`01-strategy` → `10-quality-and-launch`). Organized by workstream, roughly in build order within each section. Items marked **(non-eng)** are content/legal/business work that doesn't depend on code — they gate what can *render*, not what can be *built*.

---

## 0. Repo, Tooling & Configs

- [ ] Confirm Next.js version (repo currently has 16.2.10; specs say "14+" — verify App Router APIs used are compatible)
- [ ] `tsconfig.json` — strict mode confirmed on
- [ ] `tailwind.config.ts` — extend block mapping brand tokens via CSS variables (`07-design-system.md` §3.4), not raw hex
- [ ] `app/globals.css` — full CSS custom property token set (`07-design-system.md` §3.3): colors, spacing, radii, containers, breakpoints, type scale, motion durations, z-index, icon sizes
- [ ] `next.config.ts` — image domains/formats (AVIF/WebP), security headers wiring
- [ ] `middleware.ts` — CSP (nonce-based scripts, `frame-src` limited to youtube-nocookie/vimeo), HSTS, `X-Content-Type-Options`, `Referrer-Policy: strict-origin-when-cross-origin`, minimal Permissions-Policy
- [ ] `.env.example` — GA4 ID, Turnstile site/secret keys, Upstash Redis URL/token, Sentry DSN, email provider API key, CRM webhook URL(s)
- [ ] ESLint config reviewed (already present — confirm it covers a11y rules, e.g. `eslint-plugin-jsx-a11y`)
- [ ] Prettier / formatting config (if wanted — not yet decided)
- [ ] `.github/CODEOWNERS` — `content/financial/**` requires compliance owner; `content/metrics.ts` + `content/testimonials.ts` require verification owner
- [ ] `.github/workflows/ci.yml` — typecheck, lint, `validate:content`, unit tests, Playwright smoke, Lighthouse CI, axe
- [ ] `.github/workflows/fs-expiry.yml` — daily scheduled check (`scripts/check-fs-expiry.ts`)
- [ ] Dependabot config + `npm audit` as a CI gate
- [ ] Branch protection on `main` (required reviews, required CI checks) — **(non-eng: needs repo owner to configure in GitHub settings)**
- [ ] Vercel project linked; env vars set per environment (preview/production)
- [ ] Secondary remote/backup for the repo — `[DEVELOPER DECISION REQUIRED]` on where
- [ ] Testing setup: unit test runner, Playwright, axe-core wired into CI
- [ ] Pagefind build step wired into the build pipeline
- [ ] Sentry project created + wired in
- [ ] Upstash Redis instance created (rate limiting)
- [ ] Cloudflare Turnstile site registered
- [ ] GA4 property created, consent-mode v2 configured
- [ ] Email/newsletter provider account chosen + connected — `[DEVELOPER DECISION REQUIRED: Brevo vs ConvertKit]`
- [ ] CRM adapter target chosen — Phase 1 = generic webhook, Phase 3 = real CRM `[DEVELOPER DECISION REQUIRED]`
- [ ] Payment provider chosen for books (Phase 3) — Stripe Payment Links vs Lemon Squeezy `[DEVELOPER DECISION REQUIRED]`
- [ ] Storybook adoption decision `[DEVELOPER DECISION REQUIRED]`
- [ ] Media storage decision: `public/` vs Vercel Blob `[DEVELOPER DECISION REQUIRED]`

---

## 1. Design System & Brand

- [ ] Export SVGs from `favicon.pdf` / `vsLogo2.pdf` (never scale the PNGs up)
- [ ] Regenerate full favicon set + `manifest.ts` icons from the vector source
- [ ] Logo asset inventory placed in `public/brand/` (Pry/Black/White/Inverted × icon/horizontal/vertical)
- [ ] **(non-eng)** Typography decision — no typeface confirmed yet (`[BRAND ASSET REQUIRED]`)
- [ ] Self-host chosen fonts once confirmed; `font-display: swap`; confirm licences
- [ ] Header component reveal pattern built to spec: **collapsed by default on all breakpoints** (confirmed decision, overrides the doc's literal always-visible nav), links present in DOM for a11y/SEO
- [ ] **(non-eng)** Venture logos (Join Momentum, Career Bridge, Evidentize, DIL, Financial Resilience) — `[BRAND ASSET REQUIRED]`
- [ ] **(non-eng)** Brand shoot completed (shot list in `07-design-system.md` §4.3 — 13 photo setups + 6 video setups)

---

## 2. Content Architecture (the "CMS")

- [ ] `types/models.ts` — every content type + `ContentBase` shared fields
- [ ] zod schemas mirroring `types/models.ts`, used for MDX frontmatter validation
- [ ] `content/site.ts` — nav, footer, announcement, social URLs
- [ ] `content/builds.ts` — the 5 Builds (locked taxonomy)
- [ ] `content/ventures.ts`
- [ ] `content/ctas.ts` — canonical CTA registry (`01-strategy.md` §4.3)
- [ ] `content/routes/` — `LeadRoute` configs (one per form route, ~16 routes)
- [ ] `content/pages/` — per-page structured content (`home.ts`, `about.ts`, `dil.ts`, `speaking.ts`, …)
- [ ] `content/insights/` — MDX article structure + frontmatter schema
- [ ] `content/case-studies/` — MDX + `outcomeVerified`/`clearedForRelease` fields
- [ ] `content/videos.ts`
- [ ] `content/galleries/` — one file per album (11 albums)
- [ ] `content/books.ts`
- [ ] `content/timeline.ts` — `TimelineEntry[]` for Career Portfolio
- [ ] `content/journey/` — `JourneyStage` sets (DIL 11-stop, talent pathway 5-stop, JM delivery 4-stop, theory of change)
- [ ] `content/tracks.ts`, `content/topics.ts` — DIL's 13 tracks, Speaking's 12 topics
- [ ] `content/metrics.ts` — `ImpactMetric[]`, `source` + `verifiedDate` required
- [ ] `content/testimonials.ts` — `permission` flag required
- [ ] `content/people.ts`, `content/locations.ts`
- [ ] `content/financial/disclosures.ts` — `ComplianceBlock[]` with full `ComplianceRecord`
- [ ] `content/financial/APPROVALS.md` — signed approval log
- [ ] `lib/content.ts` — typed loaders (`getVentures()`, `getArticles()`, `resolveRefs()`)
- [ ] `lib/mdx.ts` — MDX pipeline
- [ ] `lib/analytics.ts` — typed event helper matching the canonical event dictionary
- [ ] `lib/metadata.ts`
- [ ] `lib/crm/router.ts` + `lib/crm/adapters/`
- [ ] `lib/validation/schemas.ts`
- [ ] `scripts/validate-content.ts` — all 8 CI checks (types compile, metrics sourced, testimonials permissioned, FS gate, media alt+rights, case-study verification, link/CTA integrity, book purchase options)
- [ ] `scripts/banned-phrases.ts` — seeded from the final compliance-approved word list
- [ ] `scripts/check-fs-expiry.ts` — scheduled Action entry point

---

## 3. Core/Signature Components (build early — most Tier-1 pages depend on these)

- [ ] `Header` — collapsed-by-default nav, mega-menu panels, `cta.work` button, scroll-condensed state
- [ ] `MobileNav` / unified nav drawer
- [ ] `Footer` — 5 link columns, newsletter micro-form, social row, legal line
- [ ] `Hero` family (`Hero`, `VideoHero`, `SplitHero`) — statement/image/cinematic/split/product variants
- [ ] `ImpactPortfolioMap` — compact + full variants, SVG canvas + accordion fallback, fully data-driven
- [ ] `JourneyDiagram` — horizontal-rail/vertical-rail/condensed-strip variants, reused across DIL/CB/JM/Impact
- [ ] `EnquiryWizard` — schema-driven multi-step form engine consuming `LeadRoute` configs
- [ ] `VentureCard` / `InitiativeCard` / `ServiceCard` (one shared component, 4 variants)
- [ ] `ComplianceDisclosure` — fail-safe render-gated component
- [ ] `Testimonial` — permission-gated
- [ ] `MetricCard` — verified-only, count-up (reduced-motion safe)
- [ ] `FaqAccordion` — schema-synced with visible content
- [ ] `Timeline` + `FilterBar` — condensed/full variants, URL-synced filters
- [ ] `GalleryGrid` + `Lightbox`
- [ ] `VideoPlayer` — consent-aware facade (youtube-nocookie/Vimeo DNT)
- [ ] `NewsletterForm`
- [ ] `SearchOverlay` (Pagefind-backed)
- [ ] `AudienceRouter`, `CtaBand`, `StatementBlock`, `ManifestoBeats`, `PhotoBand`, `SplitOffer` — editorial section blocks
- [ ] Remaining component library table (`07-design-system.md` §5.13) — AnnouncementBar, CTA Button, ArticleCard, VideoCard, BookCard, CaseStudyCard, ImpactStoryCard, LogoWall, MapModule, DownloadCard, MediaKit, CookieConsent, EmptyState, ErrorState, SkeletonLoader, Toast, Modal, ConfirmationPage, RelatedContent, Breadcrumb, Tag/Chip, EventCard, OpportunityCard, TeamCard, YouTubeSubscribe, LinkedInNewsletter

---

## 4. Pages — Phase 1 (Foundation)

- [ ] Home (`/`) — all 26 sections per `03-homepage.md`
- [ ] About (`/about`)
- [ ] Victor's Story (`/about/story`)
- [ ] Career Journey (`/about/career`)
- [ ] Leadership Philosophy (`/about/leadership`)
- [ ] Impact Portfolio (`/portfolio`) — full `ImpactPortfolioMap`
- [ ] Ventures Overview (`/ventures`)
- [ ] Join Momentum (`/ventures/join-momentum`)
- [ ] Career Bridge Foundation (`/ventures/career-bridge`)
- [ ] Evidentize.IO (`/ventures/evidentize`)
- [ ] Financial Resilience (`/financial-resilience`) — **holding state only**, architecture ready, content gated on compliance
- [ ] Career Portfolio (`/portfolio/career`) — timeline v1
- [ ] Speaking (`/speaking`) — full spec
- [ ] Contact (`/contact`) — router + webhook adapter
- [ ] Insights hub (`/insights`) + article template — **(non-eng)** needs ≥6 launch articles
- [ ] Legal set: Privacy, Cookies, Terms, Accessibility, Safeguarding, Complaints, FS Disclosures, Brand Usage
- [ ] 404 page
- [ ] Thank-you page template (`/thanks/[route]`)
- [ ] Analytics baseline wired site-wide
- [ ] SEO foundations: sitemap.ts, robots.ts, StructuredData component, canonical/OG per page

## 4b. Pages — Phase 2 (Authority & Media)

- [ ] Videos hub (`/videos`) + detail (`/videos/[slug]`) + transcripts
- [ ] Gallery hub (`/gallery`) + album pages — 11 albums as populated
- [ ] Media Room (`/media-room`)
- [ ] Newsletter (`/newsletter`) + provider integration (double opt-in)
- [ ] Books index (`/books`) + detail (`/books/[slug]`) — pre-launch states
- [ ] Case Studies (`/case-studies`) + detail
- [ ] Campaign Landing Template (`/c/[slug]`)
- [ ] Pagefind search live
- [ ] Impact & Philanthropy (`/impact`)

## 4c. Pages — Phase 3 (Commercial & Programme Conversion)

- [ ] Design Intelligence Lab (`/design-intelligence-lab`) — full 34-section build, all 5 forms, `programmeState` machine
- [ ] Advisory hub (`/advisory`) + offer pages (`/advisory/founders-executives`, `/advisory/organisational-transformation`)
- [ ] Capability pillar pages: Product & Transformation, AI & Automation, Defence & Security, International Delivery
- [ ] Opportunities (`/opportunities`)
- [ ] Partnerships (`/partnerships`)
- [ ] `EnquiryWizard` rolled out to every remaining route + real CRM adapter live
- [ ] Speaking automation (auto-sent speaker kit)
- [ ] Books commerce turned on (if any title reaches Pre-Order)
- [ ] Search Results page (`/search`)

## 4d. Pages — Phase 4 (backlog, as prioritized)

- [ ] Financial Resilience full publish (once compliance approvals land)
- [ ] Localisation framework (if needed)
- [ ] Save-and-resume applications (magic-link)
- [ ] Dynamic OG image generation
- [ ] Audience-route personalisation
- [ ] Venture microsite theming

---

## 5. Forms, Leads & CRM

- [ ] `LeadRoute` config per route (~16): dil-participant, dil-sponsor, dil-challenge, dil-city, cb-talent, cb-employer, demo (employer/provider), join-momentum, advisory, speaking, sponsor/funder, mentor, financial, media, books-bulk, newsletter
- [ ] Route Handler(s) with zod validation → webhook/CRM adapter + email ack
- [ ] Honeypot + Turnstile + Upstash rate limiting on every form
- [ ] Thank-you page per route with tailored next step
- [ ] 21 CRM pipelines set up in whatever CRM/webhook target is chosen
- [ ] **(non-eng)** SLA owners assigned per pipeline (currently unnamed)
- [ ] **(non-eng)** Financial Resilience: authorised individual, ack wording, SLA, consent wording — all `[COMPLIANCE INPUT REQUIRED]`

---

## 6. SEO

- [ ] `StructuredData.tsx` covering WebSite, Person, Organization (×5 ventures), Article, VideoObject, Book, ImageGallery, Service, Event, FAQPage, BreadcrumbList, Course
- [ ] Dynamic sitemap enumerating `content/` at build
- [ ] robots.txt with staging-noindex safeguard
- [ ] Redirect table (content-managed) + Next.js middleware
- [ ] **(non-eng)** 20 topic-cluster pillar articles planned/written over time (`09-seo-analytics-crm.md` §1.2)
- [ ] Structured-data validation as a CI check (Rich Results test pass)

---

## 7. Analytics

- [ ] `lib/analytics.ts` typed helper covering the full canonical event dictionary
- [ ] Every `cta_click`, `page_view`, `scroll_depth`, `nav_click`, `outbound_click` wired at the layout level
- [ ] Conversion events wired per form/route
- [ ] Engagement events wired per interactive component (map, journey, gallery, video, FAQ, filters)
- [ ] GA4 dashboards / Looker Studio templates — **(non-eng)** ownership `[DEVELOPER DECISION REQUIRED]`
- [ ] **(non-eng)** Weekly/monthly review cadence + named owner

---

## 8. Accessibility

- [ ] axe-core wired into CI, zero serious/critical required to merge
- [ ] Manual NVDA + VoiceOver pass per page template before launch
- [ ] Keyboard-only run recorded for the 5 key conversion flows
- [ ] `/legal/accessibility` page with known-issues log
- [ ] **(non-eng)** Third-party accessibility audit vendor chosen + booked for end of Phase 1
- [ ] Quarterly re-check scheduled post-launch

---

## 9. Performance

- [ ] Bundle-analyzer CI gate for JS weight budget
- [ ] Lighthouse CI wired per PR, budgets enforced (`10-quality-and-launch.md` §2)
- [ ] Facade pattern implemented for every third-party embed (video, maps)
- [ ] All media in reserved aspect boxes (CLS discipline)
- [ ] Vercel Speed Insights + monthly RUM review process

---

## 10. Security & Privacy

- [ ] Security headers verified (target: securityheaders.com A grade)
- [ ] Cookie consent banner — equal-prominence accept/reject, preference centre
- [ ] Consent-mode analytics gating verified
- [ ] **(non-eng)** Privacy policy drafted: legal entity names, DPO/contact, lawful basis per form
- [ ] **(non-eng)** SAR export procedure + process owner named
- [ ] **(non-eng)** Per-pipeline data retention schedule defined
- [ ] DIL age-gate (18+) enforced via age-band field
- [ ] **(non-eng)** Safeguarding policy published before any DIL youth recruitment begins

---

## 11. Financial Resilience Compliance Pod (highest-risk section)

- [ ] `ComplianceRecord` schema implemented in `types/models.ts`
- [ ] `CODEOWNERS` rule: `content/financial/**` requires compliance-owner review
- [ ] Gate 1 (CI): build fails if any FS content is non-Approved/expired/contains a banned phrase
- [ ] Gate 2 (render): `ComplianceDisclosure.tsx` refuses to render non-approved content even if queried directly
- [ ] Gate 3 (time): daily scheduled Action flags expired approvals + triggers rebuild
- [ ] Hash check: editing approved content without bumping `version` fails CI
- [ ] **(non-eng)** Authorised firm name, FCA reference number, AR disclosure, approved risk warning, complaints procedure — all currently unfilled, must come from compliance/legal
- [ ] **(non-eng)** Compliance owner sign-off that git history + `APPROVALS.md` is an adequate audit record
- [ ] **(non-eng)** Final banned-phrase list confirmed by compliance

---

## 12. Content Production (non-engineering — parallel track, owned by Victor/team)

- [ ] Verified bio (50/100/250-word versions) + career timeline entries
- [ ] Testimonials + written permission per quote
- [ ] Verified metrics with source + date for every published stat
- [ ] Case studies (≥1 verified for Phase 2, `outcomeVerified: true`)
- [ ] Brand photo/video shoot completed and curated into galleries with rights records
- [ ] Venture logos and one-line descriptions (Financial Resilience copy is compliance-reviewed)
- [ ] DIL programme facts: eligibility policy, diaspora eligibility, hours/week commitment, language policy, rubric, sponsor package definitions
- [ ] ≥6 launch Insights articles
- [ ] Approved bios for Media Room + press fact sheet + story angles
- [ ] Speaker kit PDF, bio PDF, impact prospectus PDF
- [ ] Named owners: content calendar, analytics review, FS compliance, safeguarding lead, DPO/privacy contact

---

## 13. Pre-Launch QA (checklist C from `10-quality-and-launch.md`, condensed)

- [ ] Cross-browser + real-device sweep (Chrome/Safari/Firefox/Edge, iOS Safari, Android Chrome)
- [ ] 360px–1920px responsive sweep, no horizontal scroll
- [ ] All forms: happy path, validation errors, spam-bot test, rate limit, ack email, CRM/webhook record, single thank-you event fire
- [ ] Analytics event QA against the dictionary (GA4 debug view)
- [ ] Structured data Rich Results test pass on every schema type
- [ ] 404/redirects/sitemap/robots/canonicals verified, staging noindex removed
- [ ] FS pod explicitly tested with expired + draft docs — confirm nothing renders
- [ ] Backup + rollback rehearsal; Sentry confirmed receiving events

## 14. Launch Day (checklist D)

- [ ] DNS + SSL + www/apex redirects
- [ ] Production env vars set; webhook endpoints verified in prod
- [ ] GA4 + Search Console live, sitemap submitted
- [ ] Monitoring/uptime alerts on
- [ ] Social profiles linked; link-in-bio updated
- [ ] 48h post-launch watch rota staffed

---

## Notes

- Any item tagged `[DEVELOPER DECISION REQUIRED]` above still needs an explicit choice before that piece is built — don't default silently.
- Any item tagged **(non-eng)** cannot be accelerated by coding faster — it's the actual gating factor on when sections of the site can go live for real, per the phase-timeline discussion in this conversation.
- Full detail behind every line item lives in the memory files saved during this planning conversation (see `MEMORY.md` in the project's memory directory) and in the original 10 source docs.
