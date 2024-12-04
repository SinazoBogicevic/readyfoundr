import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "email-fly": "email-fly 2s ease-in-out",
        "svg-fly": "svg-fly 2s ease-in-out",
      },
      keyframes: {
        "email-fly": {
          "0%": { transform: "translate(0, 0) scale(1)", opacity: "1" },
          "50%": {
            transform: "translate(200px, -200px) scale(0.5)",
            opacity: "0",
          },
          "100%": { transform: "translate(0, 0) scale(1)", opacity: "1" },
        },
        "svg-fly": {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(-45deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
