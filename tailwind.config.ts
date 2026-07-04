import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "oklch(var(--bg) / <alpha-value>)",
        surface: "oklch(var(--surface) / <alpha-value>)",
        panel: "oklch(var(--panel) / <alpha-value>)",
        ink: "oklch(var(--ink) / <alpha-value>)",
        muted: "oklch(var(--muted) / <alpha-value>)",
        primary: "oklch(var(--primary) / <alpha-value>)",
        accent: "oklch(var(--accent) / <alpha-value>)",
        plum: "oklch(var(--plum) / <alpha-value>)",
        clay: "oklch(var(--clay) / <alpha-value>)",
        line: "oklch(var(--line) / <alpha-value>)",
        danger: "oklch(var(--danger) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 50px oklch(var(--ink) / 0.08)",
        lift: "0 20px 42px oklch(var(--ink) / 0.12)",
        glow: "0 16px 36px oklch(var(--primary) / 0.18)"
      },
      borderRadius: {
        "4xl": "2rem"
      }
    }
  },
  plugins: []
};

export default config;
