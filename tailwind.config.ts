import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:    "#FFFFFF",
        ink:   "#111111",
        terra: "#C85535",
        muted: "#888888",
        // legacy
        cream: "#FFFFFF",
        pink: { hot: "#C85535", light: "#F2C4A8" },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        body:    ["var(--font-dm-sans)", "Helvetica Neue", "Arial", "sans-serif"],
        sans:    ["var(--font-dm-sans)", "Helvetica Neue", "Arial", "sans-serif"],
        // legacy aliases so nothing hard-crashes
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
