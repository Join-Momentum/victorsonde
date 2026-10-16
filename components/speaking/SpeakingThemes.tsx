import { Display } from "@/components/ui/Display";
import { Label } from "@/components/ui/Label";
import { cn } from "@/lib/cn";

const themes = [
  {
    title: "Turning potential into proof",
    text: "Why evidence beats claims, and what that means for how we hire and develop people.",
  },
  {
    title: "AI, work and what actually changes",
    text: "Beyond the hype: where AI genuinely shifts how careers and delivery work.",
  },
  {
    title: "Delivery leadership under pressure",
    text: "Getting complex programmes over the line with real constraints.",
  },
  {
    title: "Building institutions, not just products",
    text: "What it takes to build something that outlasts its founder.",
  },
];

/** Ruled list of the talk themes most often requested. */
export function SpeakingThemes() {
  return (
    <div>
      <Label>Themes I&apos;m asked for</Label>
      <div className="mt-3.5 grid">
        {themes.map((t, i) => (
          <div
            key={t.title}
            className={cn(
              "flex flex-col gap-2.5 py-[clamp(20px,2.4vw,32px)]",
              i < themes.length - 1 && "border-b border-paper-2",
            )}
          >
            <Display as="h3" size="d4">
              {t.title}
            </Display>
            <p className="m-0 text-[.98rem]">{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
