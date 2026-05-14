import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Deep forest green — the new brand anchor
        brand: {
          50: "#ecf5f0",
          100: "#cfe5d8",
          200: "#9fcbb1",
          300: "#69ad88",
          400: "#3f8d63",
          500: "#216f4a",
          600: "#175a3a",
          700: "#0e4a35",
          800: "#0c3a2c",
          900: "#0a2c20",
          950: "#061a13",
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
