import type { Config } from "tailwindcss";
import { blue, amber, slate } from "tailwindcss/colors";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: blue,
        accent: amber,
        surface: slate,
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-plus-jakarta)", "var(--font-inter)", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          sm: "1.5rem",
          lg: "2rem",
        },
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "fade-in": "fade-in 0.3s ease-out",
      },
      boxShadow: {
        card: "0 1px 3px rgba(15,23,42,0.06), 0 8px 24px rgba(15,23,42,0.06)",
        lift: "0 4px 12px rgba(29,78,216,0.18), 0 16px 40px rgba(29,78,216,0.16)",
      },
    },
  },
  plugins: [typography],
};

export default config;