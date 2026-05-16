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
        cream: "#ffffff",
        pink:  { hot: "#1B3A6B", light: "#1B3A6B" },
      },
      fontFamily: {
        display:     ["var(--font-playfair)", "Georgia", "serif"],
        body:        ["var(--font-dm-sans)", "Helvetica Neue", "Arial", "sans-serif"],
        sans:        ["var(--font-dm-sans)", "Helvetica Neue", "Arial", "sans-serif"],
        // legacy aliases
        hero:        ["var(--font-playfair)", "Georgia", "serif"],
        editorial:   ["var(--font-dm-sans)", "Helvetica Neue", "Arial", "sans-serif"],
        condensed:   ["var(--font-dm-sans)", "Helvetica Neue", "Arial", "sans-serif"],
        handwriting: ["var(--font-dm-sans)", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
