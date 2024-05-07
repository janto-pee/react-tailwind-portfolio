/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f7f7f7",
          100: "#ededed",
          200: "#e1e1e1",
          300: "#cecece",
          400: "#a9a9a9",
          500: "#888888",
          600: "#616161",
          700: "#4e4e4e",
          800: "#303030",
          900: "#101010",
        },
        secondary: {
          50: "#e8f5ed",
          100: "#c7e6d2",
          200: "#a4d5b6",
          300: "#80c69a",
          400: "#65ba86",
          500: "#4bae71",
          600: "#449f67",
          700: "#3c8d5a",
          800: "#357b4f",
          900: "#2b5c3c",
        },
      },
    },
  },
  plugins: [],
};
