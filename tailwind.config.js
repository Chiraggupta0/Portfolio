/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["'DM Serif Display'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        ink: {
          50:  "#faf9f7",
          100: "#f0ede6",
          200: "#ddd8ce",
          300: "#b8b0a0",
          400: "#8f8474",
          500: "#736860",
          600: "#5c5048",
          700: "#3d3530",
          800: "#2e2820",
          900: "#1e1a16",
          950: "#141009",
        },
        accent: {
          DEFAULT: "#c17f4a",
          light: "#d4996a",
          dark: "#a6672f",
        },
      },
      animation: {
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: 0.5 },
          "50%": { opacity: 0.9 },
        },
      },
    },
  },
  plugins: [],
};