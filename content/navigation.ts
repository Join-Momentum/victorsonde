import { socialHref, socials } from "./socials";

export type NavLink = { href: string; label: string };

export const primaryCta: NavLink = { href: "/cohort", label: "Apply for the Founding Cohort" };

export const mainNav: NavLink[] = [
  { href: "/cohort", label: "Founding Cohort" },
  { href: "/lab", label: "The Lab" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/ventures", label: "Ventures" },
  { href: "/speaking", label: "Speaking" },
  { href: "/media", label: "Media" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
  { href: "/connect", label: "/connect" },
  { href: "/notes", label: "Notes" },
];

export const footerColumns: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Site",
    links: [
      { href: "/cohort", label: "Founding Cohort" },
      { href: "/lab", label: "The Lab" },
      { href: "/about", label: "About" },
      { href: "/work", label: "Work & impact" },
      { href: "/ventures", label: "Ventures" },
      { href: "/speaking", label: "Speaking" },
      { href: "/media", label: "Media" },
      { href: "/insights", label: "Insights" },
      { href: "/contact", label: "Contact" },
      { href: "/presskit", label: "Press kit" },
    ],
  },
  {
    heading: "Ventures",
    links: [
      { href: "/cohort", label: "Career Bridge Foundation" },
      { href: "/ventures", label: "Evidentize.io" },
      { href: "/lab", label: "Decision Intelligence Lab" },
      { href: "/ventures", label: "Join Momentum Inc" },
    ],
  },
  {
    heading: "Elsewhere",
    links: [
      ...socials.map((s) => ({ href: socialHref(s).href, label: s.label })),
      { href: "/connect", label: "/connect" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { href: "/legal", label: "Privacy" },
  { href: "/legal", label: "Terms" },
  { href: "/legal", label: "Cookies" },
  { href: "/legal", label: "Accessibility" },
];
