import { cn } from "@/lib/cn";

export type TextInputProps = {
  label: string;
  placeholder: string;
  name?: string;
  type?: "text" | "email" | "textarea" | "select";
  required?: boolean;
  autoComplete?: string;
  /** Choices when `type` is "select". */
  options?: string[];
  /** Validation message; marks the control invalid and is announced with it. */
  error?: string;
  /** Initial value, e.g. what was typed before a failed submit. */
  defaultValue?: string;
  /** Light input for use on white cards. */
  light?: boolean;
};

/** Bare labelled text control (input, textarea or select) that grows to fill its row. */
export function TextInput({
  label,
  placeholder,
  name,
  type = "text",
  required,
  autoComplete,
  options,
  error,
  defaultValue,
  light,
}: TextInputProps) {
  const errorId = error && name ? `${name}-error` : undefined;
  const className = cn(
    "min-h-[3.25rem] w-full min-w-0 rounded-xs border px-4 font-body text-[1.02rem] outline-none transition-colors duration-300 focus:border-orange focus-visible:outline-none",
    light
      ? "border-paper-2 bg-paper/60 text-fg placeholder:text-muted/70 focus:bg-white"
      : "border-white/12 bg-white/[.04] text-white placeholder:text-placeholder focus:bg-white/[.07]",
    error && "border-orange",
  );
  const shared = {
    name,
    required,
    "aria-label": label,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": errorId,
    defaultValue,
  };

  return (
    <div className="min-w-0 flex-[1_1_240px]">
      {type === "textarea" ? (
        <textarea {...shared} placeholder={placeholder} rows={4} className={cn(className, "resize-y py-3.5 leading-normal")} />
      ) : type === "select" ? (
        <select
          {...shared}
          defaultValue={defaultValue ?? ""}
          style={{ backgroundImage: selectArrow }}
          className={cn(className, "cursor-pointer appearance-none bg-[length:12px] bg-[position:right_1rem_center] bg-no-repeat pr-10",
            light ? "invalid:text-muted/70" : "invalid:text-placeholder")}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options?.map((option) => (
            <option key={option} value={option} className="text-fg">
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input {...shared} type={type} placeholder={placeholder} autoComplete={autoComplete} className={className} />
      )}
      {error && (
        <p id={errorId} className="mb-0 mt-1.5 font-mono text-[.68rem] tracking-[.04em] text-orange-ink inv:text-orange">
          {error}
        </p>
      )}
    </div>
  );
}

// Chevron drawn in the muted tone so it reads on both light and dark cards.
const selectArrow = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' fill='none' stroke='%239c8c86' stroke-width='1.6'/></svg>")`;
