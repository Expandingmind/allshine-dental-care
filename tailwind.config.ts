import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eefcfb",
          100: "#d3f6f3",
          200: "#aceeea",
          300: "#73dfd9",
          400: "#3ec8c2",
          500: "#1aada8",
          600: "#0f8b88",
          700: "#0f6f6e",
          800: "#11595a",
          900: "#124a4b",
          950: "#042a2c",
        },
        accent: {
          400: "#f7c873",
          500: "#e8a93a",
          600: "#c98a1f",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
