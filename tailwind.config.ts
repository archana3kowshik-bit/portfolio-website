import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink:   "#111111",
        blue:  "#1B3A6B",
        muted: "#999999",
        cream: "#ffffff",
        pink:  { hot: "#1B3A6B", light: "#1B3A6B" },
      },
      fontFamily: {
        display:     ["var(--font-playfair)", "Georgia", "serif"],
        script:      ["var(--font-caveat)", "cursive"],
        body:        ["var(--font-dm-sans)", "Helvetica Neue", "Arial", "sans-serif"],
        sans:        ["var(--font-dm-sans)", "Helvetica Neue", "Arial", "sans-serif"],
        hero:        ["var(--font-playfair)", "Georgia", "serif"],
        editorial:   ["var(--font-dm-sans)", "Helvetica Neue", "Arial", "sans-serif"],
        condensed:   ["var(--font-dm-sans)", "Helvetica Neue", "Arial", "sans-serif"],
        handwriting: ["var(--font-caveat)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
