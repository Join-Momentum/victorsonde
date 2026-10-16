import { Tag } from "@/components/ui/Tag";
import { TagList } from "@/components/ui/TagList";

/** The brand palette as labelled swatches. */
export function BrandSwatches({ includeWhite, className }: { includeWhite?: boolean; className?: string }) {
  return (
    <TagList className={className}>
      <Tag variant="orange">#F19817</Tag>
      <Tag variant="dark">#241A18</Tag>
      <Tag variant="ink">#1A1A1A</Tag>
      {includeWhite && <Tag>#FFFFFF</Tag>}
    </TagList>
  );
}
