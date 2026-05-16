import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue:  "#1B3A6B",
        ink:   "#111111",
        muted: "#888888",
        // legacy
        cream: "#ffffff",
        pink:  { hot: "#1B3A6B", light: "#1B3A6B" },
      },
      fontFamily: {
        display:     ["var(--font-bebas)", "Impact", "sans-serif"],
        body:        ["var(--font-dm-sans)", "Helvetica Neue", "Arial", "sans-serif"],
        sans:        ["var(--font-dm-sans)", "Helvetica Neue", "Arial", "sans-serif"],
        hero:        ["var(--font-bebas)", "Impact", "sans-serif"],
        editorial:   ["var(--font-dm-sans)", "Helvetica Neue", "Arial", "sans-serif"],
        condensed:   ["var(--font-bebas)", "Impact", "sans-serif"],
        handwriting: ["var(--font-dm-sans)", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
