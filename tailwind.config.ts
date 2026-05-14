import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Rich saturated gold — anchored on the Allshine logo mark
        brand: {
          50: "#fdf6e0",
          100: "#fae3a8",
          200: "#f4cb66",
          300: "#ecae28",
          400: "#d59313",
          500: "#b8801a",
          600: "#946513",
          700: "#754f12",
          800: "#5a3d12",
          900: "#3a280f",
          950: "#150d05",
        },
        // Bright champagne for CTAs / highlight pops
        accent: {
          300: "#fde08f",
          400: "#f6c84a",
          500: "#e0b332",
          600: "#b8801a",
        },
        // Cream — matches the logo card background, used very sparingly
        cream: {
          50: "#fdfaf0",
          100: "#f7f0db",
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
