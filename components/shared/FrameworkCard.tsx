import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { Display } from "@/components/ui/Display";
import { Kicker } from "@/components/ui/Kicker";
import { cn } from "@/lib/cn";

type Props = {
  kicker?: ReactNode;
  title?: ReactNode;
  /** Body copy size: "md" is .98rem, "sm" is .96rem. */
  size?: "md" | "sm";
  variant?: "default" | "accent" | "placeholder";
  children: ReactNode;
  /** Extra content under the copy, e.g. a link. */
  footer?: ReactNode;
};

/** The common card shape: kicker, optional small heading, and a short paragraph. */
export function FrameworkCard({ kicker, title, size = "md", variant, children, footer }: Props) {
  return (
    <Card variant={variant}>
      {kicker && <Kicker>{kicker}</Kicker>}
      {title && (
        <Display as="h3" size="d4">
          {title}
        </Display>
      )}
      <p className={cn("m-0", size === "md" ? "text-[.98rem]" : "text-[.96rem]")}>{children}</p>
      {footer}
    </Card>
  );
}
