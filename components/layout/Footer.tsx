import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { BandBackdrop } from "@/components/ui/BandBackdrop";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Todo } from "@/components/ui/Todo";
import { footerColumns, legalLinks, primaryCta } from "@/content/navigation";
import { images } from "@/lib/images";

const linkClass = "block py-1.5 text-sand-2 no-underline transition-colors hover:text-orange";

/** Site footer: brand statement, link columns and legal line. */
export function Footer() {
  return (
    <footer data-tone="ink" className="relative isolate overflow-hidden bg-ink pb-10 pt-[clamp(72px,9vw,128px)] text-muted-dk">
      <BandBackdrop glow="top-left" />
      <Container size="wide">
        <div className="grid gap-x-12 gap-y-14 border-b border-white/10 pb-[clamp(48px,6vw,80px)] min-[1025px]:grid-cols-12">
          <div className="min-[1025px]:col-span-5">
            <Image src={images.logoWhite} alt="Victor Sonde" className="h-10 w-auto" />
            <p className="mb-8 mt-8 max-w-[18ch] font-display text-[clamp(1.6rem,1.2rem+1.4vw,2.4rem)] font-semibold leading-[1.1] tracking-[-.03em] text-white">
              I build people, products and platforms that turn potential into proof.
            </p>
            <ButtonLink href={primaryCta.href} size="sm" arrow>
              {primaryCta.label}
            </ButtonLink>
            <SocialLinks className="mt-8" />
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 min-[1025px]:col-span-7 min-[1025px]:pl-8">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <h4 className="mb-5 font-mono text-[.68rem] font-medium uppercase tracking-[.18em] text-orange">
                  {col.heading}
                </h4>
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={linkClass}
                    {...(link.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 pt-8 font-mono text-[.68rem] leading-[1.9] tracking-[.04em] text-legal md:flex-row">
          <p className="m-0 text-legal">
            <Todo>Registered company names, numbers and addresses to be supplied.</Todo>
            <br />© 2026 Victor Sonde. Design preview — not the live site.
          </p>
          <p className="m-0 text-legal">
            {legalLinks.map((link, i) => (
              <Fragment key={link.label}>
                {i > 0 && " · "}
                <Link href={link.href} className="inline text-sand-2 no-underline hover:text-orange">
                  {link.label}
                </Link>
              </Fragment>
            ))}
          </p>
        </div>
      </Container>
    </footer>
  );
}
