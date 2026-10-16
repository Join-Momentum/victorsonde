import { decisionLoop } from "@/content/lab";

/** The six-stage learning loop, with the final "Evidence" stage highlighted. */
export function DecisionLoop() {
  return (
    <div className="grid grid-cols-2 gap-2.5 min-[521px]:grid-cols-3 min-[901px]:grid-cols-6">
      {decisionLoop.map((stage, i) => (
        <div
          key={stage.title}
          className="border border-line-dark bg-dark-soft px-3.5 py-4 last:border-orange"
        >
          <i className="font-mono text-[.8rem] not-italic text-orange">{i + 1}</i>
          <b className="mb-0.5 mt-2 block font-display text-[1.05rem] text-white">{stage.title}</b>
          <span className="block text-[.86rem] leading-[1.4] text-sand-3">{stage.detail}</span>
        </div>
      ))}
    </div>
  );
}
