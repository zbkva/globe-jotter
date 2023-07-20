/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      "little-victories": "url('../PUBLIC/littleVictories.jpeg')",
    },
    colors: {
      "orange-fawn": "#fdba74",
      "blue-columbia": "#b8d3e0",
      "black-rich": "#001524",
    },
  },
  plugins: [],
};
