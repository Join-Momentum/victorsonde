import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Selection rule (07-design-system.md §3.3b): Pry/Black on white/light
 * surfaces, White/Inverted on --brand-dark or photography. Never place
 * Pry on a mid-tone or orange background. Minimum sizes: icon 24px,
 * horizontal lockup 120px wide — enforced here via the height classes.
 */
const ICON_SRC = {
  primary: "/brand/VSIconPry.png",
  black: "/brand/VSIconBlack.png",
  white: "/brand/VSIconWhite.png",
  inverted: "/brand/VSIconInverted.png",
} as const;

const HORIZONTAL_SRC = {
  primary: "/brand/VSLogoPryHor.png",
  black: "/brand/VSLogoBlackHor.png",
  white: "/brand/VSLogoWhiteHor.png",
  inverted: "/brand/VSLogoInvertedHor.png",
} as const;

export type LogoVariant = keyof typeof ICON_SRC;

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  priority?: boolean;
}

/**
 * Horizontal lockup ≥ md, icon only below (07-design-system.md §3.3b).
 * Both link home with the accessible name "Victor Sonde — home".
 */
export function Logo({ variant = "primary", className, priority }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Victor Sonde — home"
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      <Image
        src={ICON_SRC[variant]}
        alt=""
        width={32}
        height={37}
        priority={priority}
        className="h-8 w-auto md:hidden"
      />
      <Image
        src={HORIZONTAL_SRC[variant]}
        alt=""
        width={245}
        height={76}
        priority={priority}
        className="hidden h-10 w-auto md:block"
      />
    </Link>
  );
}
