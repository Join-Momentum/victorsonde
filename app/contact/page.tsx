import type { Metadata } from "next";
import { Band } from "@/components/ui/Band";
import { Card } from "@/components/ui/Card";
import { Display } from "@/components/ui/Display";
import { Kicker } from "@/components/ui/Kicker";
import { Label } from "@/components/ui/Label";
import { PathList } from "@/components/ui/PathList";
import { Split } from "@/components/ui/Split";
import { Todo } from "@/components/ui/Todo";
import { EnquiryForm } from "@/components/shared/EnquiryForm";
import { PageHeader } from "@/components/shared/PageHeader";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { contactRoutes } from "@/content/paths";

export const metadata: Metadata = { title: "Contact — Victor Sonde" };

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        tone="dark"
        padding="pt-(--band-y) pb-[clamp(34px,5vw,60px)]"
        eyebrow={<Label tone="inverse">Contact</Label>}
        title="Tell me what you're trying to do"
        titleClassName="mt-3.5 mb-5 max-w-[14ch]"
        lede="Pick the route that matches — it reaches the right place faster than a general enquiry."
        ledeClassName="max-w-[58ch]"
      />
      <Band tone="white">
        <Split cols="1.05fr .95fr" className="items-start">
          <div>
            <PathList items={contactRoutes} topRule={false} />
            <Label tone="amber" className="mt-7">
              Direct
            </Label>
            <p className="mt-2">
              <Todo>Public email address, phone and office details to confirm.</Todo> Response time and who reads the
              inbox should be stated here so people know what to expect.
            </p>
            <SocialLinks tone="light" className="mt-5" />
          </div>
          <Card>
            <Kicker>General enquiry</Kicker>
            <Display as="h3" size="d4" className="mb-1.5">
              Send a message
            </Display>
            <EnquiryForm
              light
              form="contact"
              submitLabel="Send message"
              note="Protected against spam. Replies come from a real person."
            />
          </Card>
        </Split>
      </Band>
    </main>
  );
}
