import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Warm brown — matches the business-card palette (logo brown / cocoa)
        brand: {
          50: "#f7f1e6",
          100: "#ece0c9",
          200: "#dcc8a3",
          300: "#c9ad7f",
          400: "#b08f57",
          500: "#8f6b3c",
          600: "#7d5a36",
          700: "#6e4a2a",
          800: "#5a3d22",
          900: "#4a3119",
          950: "#3d2815",
        },
        // Gold — warm metallic accent for CTA pops and highlights
        accent: {
          300: "#e3d0a0",
          400: "#dcc58a",
          500: "#c2a052",
          600: "#a8863c",
        },
        // Cream — exact match for the logo's card background (#faf3e6)
        cream: {
          50: "#fdfbf6",
          100: "#faf3e6",
          200: "#f0e4cc",
        },
        // Tan — warm sand tones for full-width section backgrounds
        tan: {
          100: "#f0e4cc",
          200: "#e7d8bb",
          300: "#dcc8a3",
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
