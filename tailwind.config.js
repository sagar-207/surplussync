/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f1f8f3",
          100: "#dcefe1",
          200: "#b8dfc4",
          300: "#8cc8a0",
          400: "#5cab78",
          500: "#398f57",
          600: "#287142",
          700: "#225938",
          800: "#1d4730",
          900: "#143120",
          950: "#0b1c12",
        },
        rust: {
          50: "#fef6ed",
          100: "#fde9d2",
          200: "#fad0a4",
          300: "#f6ae6c",
          400: "#f1873b",
          500: "#e7691c",
          600: "#cc5314",
          700: "#a93f14",
          800: "#883418",
          900: "#702c17",
        },
        sand: "#f6f1e7",
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
