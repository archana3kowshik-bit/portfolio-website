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
        // Awesome Serif Italic — headers, subheaders, and highlight text only
        display:     ["var(--font-awesome-serif)", "Georgia", "serif"],

        // Helvetica Neue — everything else: body, labels, captions, UI text
        editorial:   ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        condensed:   ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        handwriting: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        sans:        ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
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
