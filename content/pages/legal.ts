import type { LegalPageContent } from "@/types/models";

/**
 * The 7 Tier-3 legal pages that use LegalPageTemplate (Financial Services
 * Disclosures is separate — it renders ComplianceDisclosure blocks, not
 * generic prose, see app/legal/financial-disclosures/page.tsx).
 * Accessibility and Brand Usage have real content (statements about our
 * own commitment/rules, already approved elsewhere in the spec docs);
 * Privacy/Cookies/Terms/Safeguarding/Complaints are legally binding
 * documents that don't exist yet — sections are structural placeholders
 * only, never drafted speculatively (02-sitemap.md §5).
 */
export const privacyContent: LegalPageContent = {
  seo: { title: "Privacy Policy", metaDescription: "How victorsonde.com collects, uses and protects personal data." },
  title: "Privacy Policy",
  sections: [
    { heading: "Who we are" },
    { heading: "What we collect and why" },
    { heading: "Lawful bases for processing" },
    { heading: "Data processors" },
    { heading: "Retention" },
    { heading: "Your rights" },
    { heading: "How to make a request" },
  ],
};

export const cookiesContent: LegalPageContent = {
  seo: { title: "Cookie Policy", metaDescription: "How cookies and similar technologies are used on victorsonde.com." },
  title: "Cookie Policy",
  sections: [{ heading: "Types of cookies we use" }, { heading: "Managing your preferences" }],
};

export const termsContent: LegalPageContent = {
  seo: { title: "Terms of Use", metaDescription: "Terms governing use of victorsonde.com." },
  title: "Terms of Use",
  sections: [
    { heading: "Acceptance of terms" },
    { heading: "Use of this site" },
    { heading: "Intellectual property" },
    { heading: "Limitation of liability" },
    { heading: "Governing law" },
  ],
};

export const accessibilityContent: LegalPageContent = {
  seo: {
    title: "Accessibility Statement",
    metaDescription: "victorsonde.com's commitment to WCAG 2.2 AA accessibility.",
  },
  title: "Accessibility Statement",
  sections: [
    {
      heading: "Our commitment",
      body: [
        "This site is built to meet WCAG 2.2 AA. Semantic structure, full keyboard operability, visible focus states and reduced-motion support are built in from the start rather than retrofitted.",
      ],
    },
    {
      heading: "Known issues",
      body: ["No known issues are logged at this time. If you find one, please let us know — see Questions below."],
    },
    {
      heading: "Feedback",
      body: ["If any part of this site is difficult to use, tell us — see Questions below."],
    },
    {
      heading: "Review cadence",
      body: ["This statement is reviewed quarterly as new pages and features are added."],
    },
  ],
};

export const safeguardingContent: LegalPageContent = {
  seo: { title: "Safeguarding Policy", metaDescription: "Safeguarding policy for youth-facing programmes, including the Design Intelligence Lab." },
  title: "Safeguarding Policy",
  sections: [
    { heading: "Our commitment to safeguarding" },
    { heading: "Reporting a concern" },
    { heading: "Vetting for mentors and reviewers" },
  ],
};

export const complaintsContent: LegalPageContent = {
  seo: { title: "Complaints Procedure", metaDescription: "How to raise a complaint, including Financial Services complaints." },
  title: "Complaints Procedure",
  sections: [
    { heading: "How to raise a complaint" },
    { heading: "What happens next" },
    { heading: "Financial Services complaints" },
  ],
};

export const brandUsageContent: LegalPageContent = {
  seo: { title: "Media & Brand Usage", metaDescription: "Permitted usage of the Victor Sonde logo and brand assets." },
  title: "Media & Brand Usage",
  sections: [
    {
      heading: "Using the Victor Sonde logo",
      body: [
        "Use the primary colour lockup or the black variant on white or light backgrounds. Use the white or inverted variant on dark backgrounds or over photography. Never place the primary colour lockup on a mid-tone or orange background.",
      ],
    },
    {
      heading: "Minimum size and clear space",
      body: [
        "Keep clear space around the logo equal to the height of the icon's centre bar. The icon should never render below 24px, and the horizontal lockup should never render narrower than 120px.",
      ],
    },
    {
      heading: "What's not permitted",
      body: [
        "Don't recolour, distort, rotate or add effects to the logo. Don't recreate it. Don't use it in a way that implies endorsement without permission.",
      ],
    },
    { heading: "Requesting assets" },
  ],
};
