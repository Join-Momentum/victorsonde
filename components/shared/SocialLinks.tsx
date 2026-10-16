import Link from "next/link";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { socialHref, socials } from "@/content/socials";
import { cn } from "@/lib/cn";

const tones = {
  dark: "border-line-dark text-sand hover:border-orange hover:bg-orange hover:text-dark",
  light: "border-paper-2 text-fg hover:border-dark hover:bg-dark hover:text-white",
};

type Props = {
  tone?: keyof typeof tones;
  /** Square button size. */
  size?: "sm" | "md";
  className?: string;
};

/** Row of square icon buttons, one per social profile. */
export function SocialLinks({ tone = "dark", size = "md", className }: Props) {
  return (
    <ul className={cn("m-0 flex list-none flex-wrap gap-2 p-0", className)}>
      {socials.map((social) => {
        const { href, external } = socialHref(social);
        return (
          <li key={social.platform} className="m-0 p-0">
            <Link
              href={href}
              aria-label={social.label}
              title={social.label}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              className={cn(
                "grid place-items-center border no-underline transition-colors duration-300",
                size === "sm" ? "h-9 w-9" : "h-11 w-11",
                tones[tone],
              )}
            >
              <SocialIcon platform={social.platform} className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
