import { Card } from "@/components/ui/Card";
import { Display } from "@/components/ui/Display";
import { Grid } from "@/components/ui/Grid";
import { Kicker } from "@/components/ui/Kicker";
import { SectionHead } from "@/components/ui/SectionHead";
import { Todo } from "@/components/ui/Todo";

/** Approved short, medium and long biographies. */
export function Biographies() {
  return (
    <>
      <SectionHead num="Bio">
        <Display size="d3">Approved biographies</Display>
      </SectionHead>
      <Grid cols={3}>
        <Card>
          <Kicker>Short · 25 words</Kicker>
          <p className="m-0">
            Victor Sonde is an entrepreneur, product and delivery leader and educator building products, programmes and
            institutions that turn potential into proof.
          </p>
        </Card>
        <Card>
          <Kicker>Medium · 60 words</Kicker>
          <p className="m-0">
            Victor Sonde is a founder, product and delivery leader, educator and speaker working across careers, AI,
            transformation and institutional development. He founded Career Bridge Foundation, Evidentize.io, the
            Decision Intelligence Lab and Join Momentum Inc, a defence and security consultancy, and writes a LinkedIn
            newsletter read by more than 3,600 professionals.
          </p>
        </Card>
        <Card>
          <Kicker>Long · 150 words</Kicker>
          <p className="m-0">
            <Todo>
              Long-form biography to be written and approved by you — including career history, notable programmes
              and current focus.
            </Todo>
          </p>
        </Card>
      </Grid>
    </>
  );
}
