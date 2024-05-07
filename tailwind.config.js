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
          50: "#ffeae3",
          100: "#ffd1b4",
          200: "#feb585",
          300: "#fb9b54",
          400: "#f88727",
          500: "#f57700",
          600: "#ea7000",
          700: "#dd6800",
          800: "#d06000",
          900: "#b95200",
        },
      },
      backgroundImage: {
        heroImage:
          "linear-gradient(rgba(0,0,0, 0.9), rgba(0, 0, 0, 0.9)), url('/src/assets/woman-8164186_1280-removebg-preview.png')",
        // "linear-gradient(45deg, rgba(48, 48, 48, 1), rgba(48,48,48, 0.8), url('/src/woman-8164186_1280-removebg-preview.png')",
        // "linear-gradient(45deg, rgba(48, 48, 48, 1) 84%, rgba(48,48,48, 0.8) 88%, rgba(48, 48, 48, 0.9) 100%)",
      },
    },
  },
  plugins: [],
};
