import Image from "next/image";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { images } from "@/lib/images";

/** Link-in-bio identity block: portrait, name, positioning and social profiles. */
export function ConnectProfile() {
  return (
    <header className="flex flex-col items-center text-center motion-safe:animate-rise">
      <div className="relative">
        <Image
          src={images.editorialHeadshot}
          alt="Victor Sonde"
          sizes="104px"
          priority
          className="h-[104px] w-[104px] rounded-full object-cover object-[50%_20%] ring-2 ring-orange ring-offset-4 ring-offset-dark"
        />
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-orange px-2.5 py-1 font-mono text-[.56rem] font-medium uppercase leading-none tracking-[.14em] text-dark shadow-float">
          Cohort open
        </span>
      </div>
      <h1 className="mt-6 font-display text-[clamp(1.6rem,1.3rem+1vw,2rem)] font-extrabold tracking-[-.03em] text-white">
        Victor Sonde
      </h1>
      <p className="mb-0 mt-1.5 max-w-[34ch] text-[.98rem] leading-[1.45] text-sand-2">
        Founder · Product &amp; delivery leader · Educator. Turning potential into proof.
      </p>
      <SocialLinks className="mt-5 justify-center" />
    </header>
  );
}
