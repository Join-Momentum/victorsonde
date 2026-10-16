export type SocialPlatform = "linkedin" | "tiktok" | "instagram" | "youtube" | "email";

export type Social = {
  platform: SocialPlatform;
  label: string;
  /** Profile URL (or `mailto:`). Empty until confirmed; links fall back to /connect meanwhile. */
  url: string;
};

// TODO(victor): confirm each profile URL and the public email address.
export const socials: Social[] = [
  { platform: "linkedin", label: "LinkedIn", url: "" },
  { platform: "tiktok", label: "TikTok", url: "" },
  { platform: "instagram", label: "Instagram", url: "" },
  { platform: "youtube", label: "YouTube", url: "" },
  { platform: "email", label: "Email", url: "" },
];

/** Where a social link points, plus whether it leaves the site. */
export function socialHref(social: Social): { href: string; external: boolean } {
  if (!social.url) return { href: "/connect", external: false };
  return { href: social.url, external: !social.url.startsWith("mailto:") };
}
