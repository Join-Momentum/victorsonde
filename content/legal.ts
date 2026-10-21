export type LegalDocKey = "privacy" | "terms" | "cookies" | "access";

type Requirements = { kind: "requirements"; items: string[] };
type Statement = { kind: "statement"; heading: string; body: string; todo: string };

export type LegalDoc = {
  key: LegalDocKey;
  chip: string;
  title: string;
  content: Requirements | Statement;
};

export const legalDocs: LegalDoc[] = [
  {
    key: "privacy",
    chip: "Privacy",
    title: "Privacy notice",
    content: {
      kind: "requirements",
      items: [
        "Who the data controller is, with registered company details",
        "What's collected: application forms, enquiry forms, update-list emails, analytics",
        "Lawful basis for each, and how long each is kept",
        "Third parties involved: form handler, email provider, analytics, Evidentize.io",
        "How someone accesses, corrects or deletes their data, and how to complain",
      ],
    },
  },
  {
    key: "terms",
    chip: "Terms",
    title: "Terms of use",
    content: {
      kind: "requirements",
      items: [
        "Who operates the site and under which registered entity",
        "Programme terms: eligibility, places, payment or funding, withdrawal and refunds",
        "Ownership of work produced in simulations, and of the resulting portfolio",
        "Acceptable use, intellectual property and limitation of liability",
        "Governing law and jurisdiction",
      ],
    },
  },
  {
    key: "cookies",
    chip: "Cookies",
    title: "Cookie notice",
    content: {
      kind: "requirements",
      items: [
        "Which cookies are set, by whom, and for what purpose",
        "Analytics and any advertising or attribution tags",
        "How UTM parameters are stored and for how long",
        "How to change consent after the first choice",
      ],
    },
  },
  {
    key: "access",
    chip: "Accessibility",
    title: "Accessibility statement",
    content: {
      kind: "statement",
      heading: "Accessibility statement",
      body: "The build targets WCAG 2.2 AA: semantic structure, keyboard navigation with visible focus, contrast checked against the brand palette, reduced-motion support, captions on video, and forms with labels and clear error states.",
      todo: "Add the date of the last audit, any known gaps, and a contact route for reporting barriers. That's what makes a statement credible rather than decorative.",
    },
  },
];
