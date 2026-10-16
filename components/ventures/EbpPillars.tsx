const pillars = [
  {
    name: "EARN",
    text: "Strengthen earning capability through careers, skills, entrepreneurship, personal branding, digital products and other income opportunities.",
  },
  {
    name: "BUILD",
    text: "Turn earning capability into sustainable value — businesses, assets, career capital, reserves and greater financial resilience.",
  },
  {
    name: "PROTECT",
    text: "Understand the risks that could disrupt what you have built, and recognise when planning or a professional conversation may be useful.",
  },
];

/** The three Earn.Build.Protect dimensions and the regulatory disclaimer. */
export function EbpPillars() {
  return (
    <>
      <div className="mt-5 grid grid-cols-1 gap-3.5 min-[761px]:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.name} className="border border-paper-2 bg-white p-[18px]">
            <b className="mb-2 block font-mono text-[.7rem] tracking-[.2em] text-orange-ink">{p.name}</b>
            <p className="m-0 text-[.96rem]">{p.text}</p>
          </div>
        ))}
      </div>
      <p className="mt-[18px] border-l-2 border-paper-2 pl-3.5 font-mono text-[.72rem] leading-[1.7] text-muted">
        Earn.Build.Protect is an educational and insight platform. It does not provide regulated financial advice,
        investment advice, automated product recommendations or insurance comparison services. Where a potential
        protection need is identified, users may be directed separately into an appropriate professional adviser
        journey.
      </p>
    </>
  );
}
