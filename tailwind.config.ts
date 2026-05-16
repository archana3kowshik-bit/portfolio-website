import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        linen:  "#FAFAF8",
        ink:    "#111111",
        terra:  "#C85535",
        yellow: "#EDD853",
        muted:  "#999490",
        cream:  "#FAFAF8",
        pink: { hot: "#C85535", light: "#F2C4A8" },
      },
      fontFamily: {
        // Instrument Serif — section headings, labels
        display:     ["var(--font-instrument-serif)", "Georgia", "serif"],
        // Awesome Serif Italic — hero name only
        hero:        ["var(--font-awesome-serif)", "Georgia", "serif"],
        // Helvetica Neue — everything else
        sans:        ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        editorial:   ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        condensed:   ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        handwriting: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight:   "-0.03em",
        normal:  "-0.02em",
        wide:    "0.005em",
        wider:   "0.02em",
        widest:  "0.06em",
      },
      animation: {
        marquee:           "marquee 28s linear infinite",
        "marquee-reverse": "marquee-reverse 28s linear infinite",
      },
      keyframes: {
        marquee:           { "0%": { transform: "translateX(0%)" },   "100%": { transform: "translateX(-50%)" } },
        "marquee-reverse": { "0%": { transform: "translateX(-50%)" }, "100%": { transform: "translateX(0%)" }  },
      },
    },
  },
  plugins: [],
};

export default config;
