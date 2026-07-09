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
        "primary-hover": "oklch(var(--primary-hover) / <alpha-value>)",
        accent: "oklch(var(--accent) / <alpha-value>)",
        plum: "oklch(var(--plum) / <alpha-value>)",
        clay: "oklch(var(--clay) / <alpha-value>)",
        line: "oklch(var(--line) / <alpha-value>)",
        danger: "oklch(var(--danger) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Lato", "sans-serif"],
        display: ["var(--font-display)", "Cormorant Garamond", "serif"]
      },
      boxShadow: {
        soft: "0 12px 30px oklch(var(--ink) / 0.07)",
        lift: "0 18px 38px oklch(var(--ink) / 0.11)",
        glow: "0 12px 28px oklch(var(--primary) / 0.14)"
      },
      borderRadius: {
        "2xl": "0.75rem",
        "3xl": "1rem",
        "4xl": "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
