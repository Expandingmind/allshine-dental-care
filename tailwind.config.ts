import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Warm gold spectrum — from the Allshine logo gold mark
        brand: {
          50: "#fbf6e7",
          100: "#f5e6c2",
          200: "#ebd28a",
          300: "#ddb555",
          400: "#c79a35",
          500: "#b08330",
          600: "#8e6824",
          700: "#6e5020",
          800: "#543c1c",
          900: "#3e2c16",
          950: "#221608",
        },
        // Lighter honey for CTAs / highlights
        accent: {
          400: "#e8c87a",
          500: "#d8b06a",
          600: "#b08330",
        },
        // Cream backdrop matching the logo card
        cream: {
          50: "#fdfaf0",
          100: "#f7f0db",
          200: "#f0e5be",
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
