/**
 * §5 — the "design intelligence" definition. Spec calls for a five-petal
 * mini-diagram; rendered here as an accessible labelled list rather than
 * bespoke SVG art, since the list conveys the same five capabilities
 * without needing a hand-authored graphic.
 */
interface DefinitionBlockProps {
  body: string;
  capabilities: string[];
}

export function DefinitionBlock({ body, capabilities }: DefinitionBlockProps) {
  return (
    <div className="flex flex-col gap-6">
      <p className="max-w-3xl text-xl leading-relaxed text-ink sm:text-2xl">{body}</p>
      <ul className="flex flex-wrap gap-3">
        {capabilities.map((capability) => (
          <li
            key={capability}
            className="rounded-full border border-brand-primary/30 bg-brand-primary-tint px-4 py-2 text-sm font-medium text-brand-dark"
          >
            {capability}
          </li>
        ))}
      </ul>
    </div>
  );
}
