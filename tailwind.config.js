/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue1: "#BDD8F1",
          blue2: "#82A6CB",
          blue3: "#3667A6",
          blue4: "#214177"
        }
      },
      fontFamily: {
        mainfont: ["mainFont", "sans-serif"],
        secondaryfont: ["secondaryFont", "sans-serif"],
      }
    },
  },
  plugins: [],
};
