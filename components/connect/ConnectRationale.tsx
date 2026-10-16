import { Grid } from "@/components/ui/Grid";
import { Label } from "@/components/ui/Label";
import { FrameworkCard } from "@/components/shared/FrameworkCard";

const rationale = [
  {
    title: "Header cut to ~200px",
    text: "Logo, 64px avatar, name, positioning, two supporting lines, social row. The first offer is visible without scrolling.",
  },
  {
    title: "One dominant offer",
    text: "The founding cohort takes the only dark card and the only primary button. The Lab sits below as a partner-facing row, not a competing apply button.",
  },
  {
    title: "Free calls demoted",
    text: 'No 15-minute calls, no "explore all offers" catch-all. Email capture sits third, where intent is highest.',
  },
  {
    title: "Tracking built in",
    text: "UTM parameters are read on arrival, stored, and appended to every outbound link and form submission.",
  },
];

/** Design notes explaining the storefront decisions. */
export function ConnectRationale() {
  return (
    <>
      <Label>What changed and why</Label>
      <Grid gap="gap-3.5" className="mt-3.5">
        {rationale.map((r) => (
          <FrameworkCard key={r.title} title={r.title} size="sm">
            {r.text}
          </FrameworkCard>
        ))}
      </Grid>
    </>
  );
}
