/**
 * FS-pod banned-phrase list (05-key-pages.md §4.2). Seeded from the spec
 * doc; compliance owns the final list — treat this as provisional until
 * they confirm it (`[COMPLIANCE INPUT REQUIRED: final list]`).
 */
export const bannedPhrases: string[] = [
  "guaranteed financial freedom",
  "guaranteed wealth",
  "guaranteed savings",
  "guaranteed returns",
  "guaranteed growth",
  "guaranteed protection",
  "beat the market",
  "risk-free investment",
  "make more money quickly",
  "protect every investment",
  "never lose money",
];

export function findBannedPhrases(text: string): string[] {
  const lower = text.toLowerCase();
  return bannedPhrases.filter((phrase) => lower.includes(phrase));
}
