import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue:  "#1241FF",
        red:   "#E02020",
        cream: "#F5F2EC",
        ink:   "#0A0A0A",
        muted: "#888888",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "Arial Narrow", "sans-serif"],
        mono:    ["var(--font-mono)", "Courier New", "monospace"],
        script:  ["var(--font-caveat)", "cursive"],
        body:    ["var(--font-dm-sans)", "Helvetica Neue", "Arial", "sans-serif"],
        sans:    ["var(--font-dm-sans)", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
