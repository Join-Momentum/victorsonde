export type SocialPlatform = "linkedin" | "youtube" | "instagram" | "threads" | "facebook" | "email";

export type Social = {
  platform: SocialPlatform;
  label: string;
  /** Profile URL (or `mailto:`). Profiles left empty are hidden until confirmed. */
  url: string;
};

const all: Social[] = [
  { platform: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/victorsonde" },
  { platform: "youtube", label: "YouTube", url: "https://www.youtube.com/@victorsonde" },
  { platform: "instagram", label: "Instagram", url: "https://www.instagram.com/victorsondeofficial/" },
  { platform: "threads", label: "Threads", url: "https://www.threads.com/@victorsondeofficial" },
  { platform: "facebook", label: "Facebook", url: "https://www.facebook.com/victorsondeglobal" },
  // TODO(victor): public email address, e.g. "mailto:hello@victorsonde.com".
  { platform: "email", label: "Email", url: "" },
];

/** Profiles with a confirmed URL, in display order. */
export const socials = all.filter((s) => s.url);

/** Where a social link points, plus whether it leaves the site. */
export function socialHref(social: Social): { href: string; external: boolean } {
  return { href: social.url, external: !social.url.startsWith("mailto:") };
}
