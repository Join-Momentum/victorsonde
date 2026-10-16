/** Monogram and game-intro style gradient for each discipline, shared by the cohort banner and /connect. */
export const disciplineLooks: Record<string, { mono: string; gradient: string }> = {
  pm: { mono: "PM", gradient: "linear-gradient(115deg, #ff1f6b 0%, #ff5a36 48%, #ffb800 100%)" },
  ba: { mono: "BA", gradient: "linear-gradient(115deg, #00d2ff 0%, #3a5bff 52%, #7b1fff 100%)" },
  cti: { mono: "CTI", gradient: "linear-gradient(115deg, #00f5a0 0%, #00b4d8 50%, #2843ff 100%)" },
  proj: { mono: "PjM", gradient: "linear-gradient(115deg, #ffd000 0%, #ff7a00 50%, #ff2d2d 100%)" },
  va: { mono: "VA", gradient: "linear-gradient(115deg, #b31fff 0%, #ff2fb4 55%, #ff6a88 100%)" },
};

/** Fine diagonal light streaks laid over the gradient surfaces. */
export const lightStreaks =
  "repeating-linear-gradient(115deg, transparent 0 18px, rgb(255 255 255 / .1) 18px 20px, transparent 20px 46px)";
