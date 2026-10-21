import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Band } from "@/components/ui/Band";
import { Card } from "@/components/ui/Card";
import { Kicker } from "@/components/ui/Kicker";
import { Label } from "@/components/ui/Label";
import { Lede } from "@/components/ui/Lede";
import { Quote } from "@/components/ui/Quote";
import { Rule } from "@/components/ui/Rule";
import { Split } from "@/components/ui/Split";
import { Todo } from "@/components/ui/Todo";
import { PageHeader } from "@/components/shared/PageHeader";
import { images } from "@/lib/images";

export const metadata: Metadata = { title: "A CV describes you. Evidence shows you. | Victor Sonde" };

export default function ArticlePage() {
  return (
    <main>
      <PageHeader
        tone="paper"
        container="narrow"
        padding="pt-(--band-y) pb-[clamp(24px,4vw,40px)]"
        titleSize="d2"
        eyebrow={
          <>
            <Link href="/insights" className="no-underline">
              <Label as="span" tone="amber">
                ← Insights
              </Label>
            </Link>
            <Label className="mb-0 mt-[18px]">
              Newsletter edition · <Todo>date to confirm</Todo>
            </Label>
          </>
        }
        title="A CV describes you. Evidence shows you."
        titleClassName="mt-3 mb-[18px]"
        lede="Why the hiring signal is broken at both ends, and what actually fixes it."
        ledeClassName=""
      />
      <Band tone="white" container="narrow" padding="pt-[clamp(30px,4vw,50px)] pb-(--band-y)">
        <Image
          src={images.presentingLectern}
          alt="Victor Sonde presenting"
          sizes="820px"
          className="mb-7 aspect-video h-auto w-full object-cover"
        />
        <Lede>
          A CV is a claim, written by the person being assessed. A certificate proves you completed a course. Neither
          tells an employer how you handle the messy middle of a real project.
        </Lede>
        <p>
          This is the article template: full-width lede, a single supporting image, generous measure and 19px type.
          Editions are pulled from your LinkedIn newsletter with title, date and canonical link, so the archive stays in
          sync without anyone re-keying it.
        </p>
        <Quote cite="Victor Sonde" className="my-8">
          &quot;Talent is evenly distributed. Evidence of talent is not.&quot;
        </Quote>
        <p>
          Body copy continues at the same measure. Pull quotes, subheadings, images and links all inherit the design
          system, so a long edition reads as comfortably as a short one.
        </p>
        {/* <Card variant="flag" className="mt-7">
          <Kicker>Content note</Kicker>
          <p className="m-0">
            <Todo>
              Real editions to be imported. Nothing is republished in full without your say. The default is an excerpt
              with a link to the LinkedIn original.
            </Todo>
          </p>
        </Card> */}
        <Rule className="my-9" />
        <Split>
          <div>
            <Label>Keep reading</Label>
            <p className="mt-2">
              <Link href="/insights" className="text-orange-ink">
                More editions and frameworks →
              </Link>
            </p>
          </div>
          <div>
            <Label>Get the next one</Label>
            <p className="mt-2">
              <Link href="/insights" className="text-orange-ink">
                Join 3,600+ readers on LinkedIn →
              </Link>
            </p>
          </div>
        </Split>
      </Band>
    </main>
  );
}
