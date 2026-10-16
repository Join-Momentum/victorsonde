import { Display } from "@/components/ui/Display";
import { SectionHead } from "@/components/ui/SectionHead";
import { Todo } from "@/components/ui/Todo";
import { NotesTable } from "@/components/shared/NotesTable";

/** Quick-reference facts table for journalists and organisers. */
export function QuickFacts() {
  return (
    <>
      <SectionHead num="Facts" className="mb-[clamp(26px,4vw,52px)] mt-[clamp(38px,5vw,60px)]">
        <Display size="d3">Quick reference</Display>
      </SectionHead>
      <NotesTable
        headers={["Field", "Detail"]}
        rows={[
          ["Name", "Victor Sonde"],
          ["Title", "Founder · product and delivery leader · educator and speaker"],
          ["Based", <Todo key="based">To confirm</Todo>],
          ["Ventures", "Career Bridge Foundation · Evidentize.io · Decision Intelligence Lab · Join Momentum Inc"],
          ["Newsletter", "3,600+ subscribers on LinkedIn"],
          [
            "Speaking topics",
            "Careers and employability · AI and work · delivery leadership · defence and institutional capability",
          ],
          ["Press contact", <Todo key="press">Email to confirm</Todo>],
        ]}
      />
    </>
  );
}
