import type { Build } from "@/types/models";

/**
 * The Five Builds — locked taxonomy (01-strategy.md §2.2). Every
 * venture/page/article/CTA is tagged builds[] with at least one of these.
 * This list does not change without a strategy decision.
 */
export const builds: Build[] = [
  {
    id: "build-people",
    name: "Build People",
    definition:
      "Talent, leadership, careers, problem-solving capability, economic participation.",
    primaryExpressions: [
      "Career Bridge",
      "Design Intelligence Lab",
      "Mentoring",
      "Speaking on employability",
    ],
  },
  {
    id: "build-platforms",
    name: "Build Platforms",
    definition:
      "Technology and simulation infrastructure to practise, demonstrate and verify capability.",
    primaryExpressions: [
      "Evidentize.IO",
      "Portfolio Simulations",
      "AI & Automation page",
    ],
  },
  {
    id: "build-institutions",
    name: "Build Institutions",
    definition:
      "Ventures, programmes, partnerships, operating models that sustain impact.",
    primaryExpressions: [
      "Join Momentum",
      "Advisory services",
      "Organisational transformation",
    ],
  },
  {
    id: "build-ideas",
    name: "Build Ideas",
    definition: "Frameworks, books, videos, research, speeches, thought leadership.",
    primaryExpressions: ["Insights hub", "Books", "Speaking", "Media Room"],
  },
  {
    id: "build-legacies",
    name: "Build Legacies",
    definition:
      "African youth empowerment, economic mobility, family strength, social impact.",
    primaryExpressions: [
      "Design Intelligence Lab",
      "Career Bridge philanthropy",
      "Financial Resilience",
      "Impact & Philanthropy page",
    ],
  },
];

export function getBuild(id: string): Build | undefined {
  return builds.find((b) => b.id === id);
}
