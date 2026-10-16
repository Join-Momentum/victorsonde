import { Label } from "@/components/ui/Label";
import { Todo } from "@/components/ui/Todo";
import type { LegalDoc } from "@/content/legal";

/** Renders one legal document's required-coverage list or statement. */
export function LegalDocument({ doc }: { doc: LegalDoc }) {
  const { content } = doc;

  if (content.kind === "statement") {
    return (
      <div>
        <Label tone="amber">{content.heading}</Label>
        <p className="mt-2.5">{content.body}</p>
        <p>
          <Todo>{content.todo}</Todo>
        </p>
      </div>
    );
  }

  return (
    <div>
      <Label tone="amber">What this document must cover</Label>
      <ul className="mt-2.5">
        {content.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
