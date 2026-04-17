import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F0E8",
        pink: { hot: "#FF2D78", light: "#FFD6E5" },
        ink: "#1A1A1A",
      },
      fontFamily: {
        // Awesome Serif Italic — the actual font, Tall (700) for big headings, Regular (400) for annotations
        display:    ["var(--font-awesome-serif)", "Georgia", "serif"],
        editorial:  ["var(--font-awesome-serif)", "Georgia", "serif"],

        // Helvetica Neue — clean system sans for ALL subheadings + labels
        // (system font — pre-installed on Mac, falls back gracefully elsewhere)
        condensed:  ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        sans:       ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],

        // Caveat — handwriting, scrapbook annotations (unchanged)
        handwriting: ["var(--font-caveat)", "cursive"],
      },
      letterSpacing: {
        tighter:  "-0.05em",
        tight:    "-0.035em",
        normal:   "-0.02em",
        wide:     "0.005em",
        wider:    "0.015em",
        widest:   "0.04em",
      },
      animation: {
        marquee:          "marquee 18s linear infinite",
        "marquee-reverse":"marquee-reverse 18s linear infinite",
      },
      keyframes: {
        marquee:          { "0%": { transform: "translateX(0%)" },    "100%": { transform: "translateX(-50%)" } },
        "marquee-reverse":{ "0%": { transform: "translateX(-50%)" },  "100%": { transform: "translateX(0%)" }  },
      },
    },
  },
  plugins: [],
};

export default config;
