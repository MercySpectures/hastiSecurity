/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        bg2: "var(--color-bg2)",
        bg3: "var(--color-bg3)",
        accent: "rgb(var(--color-accent-rgb) / <alpha-value>)",
        accent2: "var(--color-accent2)",
        "accent-soft": "var(--color-accent-soft)",
        "accent-muted": "var(--color-accent-muted)",
        foreground: "var(--color-foreground)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
        card: "var(--color-card)",
        "cta-text": "var(--color-cta-text)",
        "cta-muted": "var(--color-cta-muted)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        pill: "2rem",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, var(--color-grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-grid-line) 1px, transparent 1px)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        ripple: {
          "0%": { transform: "scale(1)", opacity: "0.45" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        marqueeReverse: "marqueeReverse 22s linear infinite",
        ripple: "ripple 2.4s ease-out infinite",
      },
    },
  },
  plugins: [],
};
