import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import { Band } from "@/components/ui/Band";
import { Card } from "@/components/ui/Card";
import { Display } from "@/components/ui/Display";
import { Grid } from "@/components/ui/Grid";
import { Kicker } from "@/components/ui/Kicker";
import { EbpMark } from "@/components/shared/EbpMark";
import { cn } from "@/lib/cn";

type Node = { kicker: ReactNode; name: ReactNode; text: string; topBorder: string };

const heading = (text: string, badge?: boolean) => (
  <Display as="h3" size="d4" className={cn(badge && "mt-1.5")}>
    {text}
  </Display>
);

const nodes: Node[] = [
  {
    kicker: "You are here",
    name: heading("Victor Sonde"),
    text: "The founder and guide. Everything below is something I started and lead.",
    topBorder: "border-t-dark",
  },
  {
    kicker: <Badge variant="open">Live now</Badge>,
    name: heading("Career Bridge Foundation", true),
    text: "Helps people develop practical capability and access opportunity. Founding cohort applications are open across five disciplines.",
    topBorder: "border-t-orange",
  },
  {
    kicker: "The technology",
    name: heading("Evidentize.io"),
    text: "Helps people demonstrate and prove capability through simulations and evidence.",
    topBorder: "border-t-dark-soft",
  },
  {
    kicker: <Badge variant="soon">Launching soon</Badge>,
    name: heading("Decision Intelligence Lab", true),
    text: "Experiments with new approaches to capability, technology and human performance. Seeking founding partners.",
    topBorder: "border-t-orange-ink",
  },
  {
    kicker: "Defence & security",
    name: heading("Join Momentum Inc"),
    text: "Develops and deploys capability inside organisations and institutions.",
    topBorder: "border-t-ink",
  },
  {
    kicker: "Financial resilience",
    name: <EbpMark className="mb-2 mt-0.5" />,
    text: "Connects earning capability, wealth building and financial resilience for individuals.",
    topBorder: "border-t-muted",
  },
];

/** Overview of how the founder and the five vehicles relate. */
export function VentureMap() {
  return (
    <Band tone="white">
      <Grid cols={3} className="items-stretch">
        {nodes.map((n, i) => (
          <Card key={i} className={cn("border-t-4", n.topBorder)}>
            <Kicker>{n.kicker}</Kicker>
            {n.name}
            <p className="m-0 text-[.96rem]">{n.text}</p>
          </Card>
        ))}
      </Grid>
      <p className="mb-0 mt-[22px] font-mono text-[.78rem] text-muted">
        One founder, one overarching mission, five distinct vehicles. They are different expressions of the same idea,
        not five versions of the same thing.
      </p>
    </Band>
  );
}
