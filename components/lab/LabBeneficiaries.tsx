import { Band } from "@/components/ui/Band";
import { DefinitionList } from "@/components/ui/DefinitionList";
import { Display } from "@/components/ui/Display";
import { Grid } from "@/components/ui/Grid";
import { Label } from "@/components/ui/Label";
import { Split } from "@/components/ui/Split";
import { FrameworkCard } from "@/components/shared/FrameworkCard";

const audiences = [
  { title: "Job-seekers", text: "Graduates and school-leavers seeking the first real foothold." },
  { title: "Early-career", text: "Working youth who want to grow faster and decide better." },
  { title: "Founders & hustlers", text: "Aspiring and early entrepreneurs building under uncertainty." },
  { title: "Community builders", text: "Young leaders solving problems where institutions fall short." },
];

/** Who the Lab serves, what they leave with, and the pilot plan. */
export function LabBeneficiaries() {
  return (
    <Band tone="white">
      <Split className="items-start">
        <div>
          <Label tone="amber">Who it serves</Label>
          <Display size="d2" className="mb-[18px] mt-2.5">
            African youth, ages 18–45
          </Display>
          <Grid cols={2}>
            {audiences.map((a) => (
              <FrameworkCard key={a.title} title={a.title} size="sm">
                {a.text}
              </FrameworkCard>
            ))}
          </Grid>
          <Label className="mt-[18px]">Delivered across Africa, the UK and global diaspora communities</Label>
        </div>
        <div>
          <Label tone="amber">What participants leave with</Label>
          <Display size="d2" className="mb-[18px] mt-2.5">
            Proof, not just participation
          </Display>
          <DefinitionList
            items={[
              { term: "Portfolio", detail: "Worked challenges with the decision trail behind each one." },
              { term: "Credentials", detail: "Verifiable digital credentials and skill badges." },
              { term: "Profile", detail: "A capability profile employers can actually trust." },
              { term: "Reach", detail: "Shareable to recruiters, investors and programmes." },
            ]}
          />
          <Label tone="amber" className="mt-[22px]">
            Pilot plan
          </Label>
          <p className="mt-2">
            A focused pilot cohort of <strong>100 participants</strong> over approximately six months: design and
            recruit, run the lab, present and assess, then report with a blueprint for cohort two.
          </p>
        </div>
      </Split>
    </Band>
  );
}
