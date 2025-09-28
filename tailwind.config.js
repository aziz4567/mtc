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
        },
        base: {
          1: "#f8fafc",
          2: "#f1f5f9",
          3: "#3b82f6",
          4: "#1d4ed8"
        }
      },
      fontFamily: {
        mainfont: ["mainFont", "sans-serif"],
        secondaryFont: ["secondaryFont", "sans-serif"],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounce 2s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};
