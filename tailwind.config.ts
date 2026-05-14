import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Deep forest green — tuned to match Reserve Padel's "Inquire Here" green
        brand: {
          50: "#edf5ee",
          100: "#cee5d3",
          200: "#9fcdab",
          300: "#6cae7d",
          400: "#3f8e58",
          500: "#23733e",
          600: "#1c6235",
          700: "#185a31",
          800: "#114229",
          900: "#0a2d1d",
          950: "#04190e",
        },
        // Lighter green for CTA pops on dark sections
        accent: {
          300: "#bfe7cf",
          400: "#8dd1a8",
          500: "#56b87f",
          600: "#2e9d5a",
        },
        // Cream — straight from the logo's card background
        cream: {
          50: "#fdfaf0",
          100: "#f7f0db",
          200: "#eadcb3",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        "fade-up-slow": "fade-up 1.4s ease-out forwards",
        "fade-in": "fade-in 1s ease-out forwards",
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
