import type { SiteConfig } from "@/types/models";

/**
 * Site-wide nav/footer/announcement/social singleton.
 * Nav order + mega-menu groupings: 07-design-system.md §2.1–2.2.
 * Footer columns: 03-homepage.md §26, 07-design-system.md §5.12.
 * Nav REVEAL BEHAVIOUR (collapsed-by-default on every breakpoint) is a
 * Header component concern, not a content concern — this file only
 * lists what the nav contains, not how/when it's shown.
 */
export const siteConfig: SiteConfig = {
  nav: [
    {
      label: "About",
      href: "/about",
      children: [
        { label: "About Victor", href: "/about" },
        { label: "Victor's Story", href: "/about/story" },
        { label: "Career Journey", href: "/about/career" },
        { label: "Leadership Philosophy", href: "/about/leadership" },
        { label: "Media Room", href: "/media-room" },
      ],
    },
    {
      label: "Portfolio",
      href: "/portfolio",
      children: [
        { label: "Impact Portfolio", href: "/portfolio", description: "The Five Builds map" },
        { label: "Career Portfolio", href: "/portfolio/career" },
        { label: "Product & Transformation", href: "/portfolio/product-transformation" },
        { label: "AI & Automation", href: "/portfolio/ai-automation" },
        { label: "Defence & Security", href: "/portfolio/defence-security" },
        { label: "International Delivery", href: "/portfolio/international" },
        { label: "Case Studies", href: "/case-studies" },
      ],
    },
    {
      label: "Ventures",
      href: "/ventures",
      // Rich panel: 5 venture rows are rendered from content/ventures.ts,
      // not duplicated here, plus a "How it all connects" rail to /portfolio.
    },
    { label: "Design Intelligence Lab", href: "/design-intelligence-lab" },
    {
      label: "Insights",
      href: "/insights",
      children: [
        { label: "Articles", href: "/insights" },
        { label: "Frameworks", href: "/insights?type=framework" },
        { label: "Videos", href: "/videos" },
        { label: "Newsletter", href: "/newsletter" },
        { label: "Books", href: "/books" },
        { label: "Gallery", href: "/gallery" },
      ],
    },
    { label: "Speaking", href: "/speaking" },
    { label: "Contact", href: "/contact" },
  ],
  footer: {
    columns: [
      {
        title: "Explore",
        links: [
          { label: "About", href: "/about" },
          { label: "Impact Portfolio", href: "/portfolio" },
          { label: "Impact & Philanthropy", href: "/impact" },
          { label: "Speaking", href: "/speaking" },
          { label: "Insights", href: "/insights" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Ventures",
        links: [
          { label: "Join Momentum", href: "/ventures/join-momentum" },
          { label: "Career Bridge Foundation", href: "/ventures/career-bridge" },
          { label: "Evidentize.IO", href: "/ventures/evidentize" },
          { label: "Design Intelligence Lab", href: "/design-intelligence-lab" },
          { label: "Financial Resilience & Protection", href: "/financial-resilience" },
        ],
      },
      {
        title: "Programmes",
        links: [
          { label: "Design Intelligence Lab", href: "/design-intelligence-lab" },
          { label: "Opportunities", href: "/opportunities" },
          { label: "Partnerships", href: "/partnerships" },
        ],
      },
      {
        title: "Media",
        links: [
          { label: "Videos", href: "/videos" },
          { label: "Gallery", href: "/gallery" },
          { label: "Books", href: "/books" },
          { label: "Newsletter", href: "/newsletter" },
          { label: "Media Room", href: "/media-room" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "/legal/privacy" },
          { label: "Cookie Policy", href: "/legal/cookies" },
          { label: "Terms of Use", href: "/legal/terms" },
          { label: "Accessibility Statement", href: "/legal/accessibility" },
          { label: "Safeguarding Policy", href: "/legal/safeguarding" },
          { label: "Complaints Procedure", href: "/legal/complaints" },
          { label: "Financial Services Disclosures", href: "/legal/financial-disclosures" },
          { label: "Media & Brand Usage", href: "/legal/brand-usage" },
        ],
      },
    ],
  },
  // No announcement currently active.
  announcement: undefined,
  // [VERIFIED CONTENT REQUIRED: canonical social profile URLs]
  social: [],
};
