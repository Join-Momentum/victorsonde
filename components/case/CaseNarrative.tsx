import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { Kicker } from "@/components/ui/Kicker";
import { Label } from "@/components/ui/Label";
import { Lede } from "@/components/ui/Lede";
import { Todo } from "@/components/ui/Todo";

function Part({ label, children }: { label: string; children: ReactNode }) {
  return (
    <>
      <Label tone="amber">{label}</Label>
      {children}
    </>
  );
}

/** Problem → remit → decisions → outcome narrative for the joint task force case. */
export function CaseNarrative() {
  const body = "mb-6 mt-2.5";
  return (
    <div>
      <Part label="The problem">
        <Lede className={body}>
          Agencies with overlapping mandates, separate planning cycles and no shared view of progress. Coordination
          happened in meetings and evaporated between them.
        </Lede>
      </Part>
      <Part label="What I was responsible for">
        <p className={body}>
          Designing the capability sessions, facilitating them across organisational boundaries, and putting structure
          around how work was planned, tracked and reported afterwards.
        </p>
      </Part>
      <Part label="Decisions I made">
        <p className={body}>
          <Todo>
            The two or three calls that changed the outcome: what you chose, what you rejected, and why. This is the
            part readers actually want.
          </Todo>
        </p>
      </Part>
      <Part label="What changed">
        <p className={body}>
          <Todo>
            Outcome to confirm, and confirmation of what may be published. Nothing goes here unless it&apos;s
            verifiable and cleared.
          </Todo>
        </p>
      </Part>
      <Card variant="flag">
        <Kicker>Template note</Kicker>
        <p className="m-0">
          This is the shape every case study follows: problem → remit → decisions → outcome. Two more (digital
          transformation, international training) use the same structure once you supply the detail.
        </p>
      </Card>
    </div>
  );
}
