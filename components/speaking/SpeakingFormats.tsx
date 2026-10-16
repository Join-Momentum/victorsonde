import { Card } from "@/components/ui/Card";
import { Kicker } from "@/components/ui/Kicker";
import { Label } from "@/components/ui/Label";
import { Tag } from "@/components/ui/Tag";
import { TagList } from "@/components/ui/TagList";
import { Todo } from "@/components/ui/Todo";

const formats = [
  "Keynote (20–45 min)",
  "Workshop (half / full day)",
  "Panel",
  "Masterclass",
  "Programme design",
  "Fireside",
];

const audiences = [
  "Professionals & career changers",
  "Universities",
  "Employers & HR leaders",
  "Government & public bodies",
  "Founders",
];

/** Formats, audiences and the placeholder for past appearances. */
export function SpeakingFormats() {
  return (
    <div>
      <Label>Formats</Label>
      <TagList className="mb-7 mt-3.5">
        {formats.map((f) => (
          <Tag key={f}>{f}</Tag>
        ))}
      </TagList>
      <Label>Audiences</Label>
      <TagList className="mb-7 mt-3.5">
        {audiences.map((a) => (
          <Tag key={a}>{a}</Tag>
        ))}
      </TagList>
      <Card variant="flag">
        <Kicker>Past appearances</Kicker>
        <p className="m-0">
          <Todo>
            To be populated from your confirmed list only — event name, date, location, audience. Nothing goes here
            that can&apos;t be verified.
          </Todo>
        </p>
      </Card>
    </div>
  );
}
