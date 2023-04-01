/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      black: "#261f22",
      accent: "#FC3A79",
      secondary: "#FE572E",
      light: "#F3F2F1",
    },
    screens: {
      ...defaultTheme.screens,
      phone: { max: "600px" },
      tablet: { min: "600px", max: "1200px" },
      laptop: { min: "1200px" },
    },

    extend: {},
  },
  plugins: [],
};
