import { cn } from "@/lib/cn";
import { TextInput, type TextInputProps } from "./TextInput";

type Props = TextInputProps & {
  /** Replaces the default top margin. */
  margin?: string;
};

/** A text input on its own row. */
export function TextField({ margin = "mt-3.5", ...input }: Props) {
  return (
    <div className={cn("flex flex-wrap gap-2.5", margin)}>
      <TextInput {...input} />
    </div>
  );
}
