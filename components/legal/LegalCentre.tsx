"use client";

import { useState } from "react";
import { Band } from "@/components/ui/Band";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { ChipRow } from "@/components/ui/ChipRow";
import { Display } from "@/components/ui/Display";
import { Kicker } from "@/components/ui/Kicker";
import { Label } from "@/components/ui/Label";
import { Todo } from "@/components/ui/Todo";
import { legalDocs, type LegalDocKey } from "@/content/legal";
import { LegalDocument } from "./LegalDocument";

/** Legal page: document switcher header and the selected document. */
export function LegalCentre() {
  const [active, setActive] = useState<LegalDocKey>("privacy");
  const doc = legalDocs.find((d) => d.key === active) ?? legalDocs[0];

  return (
    <>
      <Band tone="paper" as="header" padding="pt-(--band-y) pb-[clamp(20px,3vw,32px)]">
        <Label>Legal</Label>
        <Display as="h1" size="d2" className="mb-[18px] mt-3">
          {doc.title}
        </Display>
        <ChipRow label="Legal documents">
          {legalDocs.map((d) => (
            <Chip key={d.key} pressed={d.key === active} onClick={() => setActive(d.key)}>
              {d.chip}
            </Chip>
          ))}
        </ChipRow>
      </Band>
      <Band tone="white" container="narrow" padding="pt-[clamp(30px,4vw,48px)] pb-(--band-y)">
        <Card variant="flag" className="mb-7">
          <Kicker>Not drafted here</Kicker>
          <p className="m-0">
            Legal copy is yours to supply or have reviewed. I&apos;ve built the page, the navigation and the structure,
            not the wording. <Todo>Each document below needs your approved text.</Todo>
          </p>
        </Card>
        <LegalDocument doc={doc} />
      </Band>
    </>
  );
}
