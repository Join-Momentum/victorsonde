import Link from "next/link";
import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { DefinitionList, type Definition } from "@/components/ui/DefinitionList";
import { Kicker } from "@/components/ui/Kicker";

type Props = {
  kicker: ReactNode;
  /** Logo, heading or wordmark identifying the venture. */
  brand: ReactNode;
  facts: Definition[];
  link: { href: string; label: string };
  accent?: boolean;
};

/** Compact venture card: problem / building / role facts and a link onward. */
export function VentureSummaryCard({ kicker, brand, facts, link, accent }: Props) {
  return (
    <Card as="article" variant={accent ? "accent" : "default"}>
      <Kicker>{kicker}</Kicker>
      {brand}
      <DefinitionList items={facts} />
      <Link
        href={link.href}
        className="mt-auto font-mono text-[.7rem] font-medium uppercase tracking-[.18em] text-orange-ink no-underline"
      >
        {link.label}
      </Link>
    </Card>
  );
}
