/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  options: {
    safelist: ['bg-custom-image'], // Ajoutez bg-custom-image à la liste sûre si nécessaire
  },
  darkMode: 'class', // Ajout du mode sombre ici
  theme: {
    extend: {
      backgroundImage: {
        'custom-about': "url('/src/assets/53.PNG')",
        'custom-contact': "url('/src/assets/2.PNG')",
      },
      fontFamily: {
        signature: ["Great Vibes"],
        default: ["Poppins", "sans-serif"],
        display: ["Krona One", "sans-serif"],
      },
      keyframes: {
        scroll: {
          from: { transform: 'translateX(0)' },
          to: {
            transform: 'translateX(calc(-100% - var(--gap)))',
          },
        }
      },
      animation: {
        scroll: '20s scroll linear infinite'
      },
      colors: {
        "custom-pink": "#FCFFFC",
        primary: {
          DEFAULT: "#222831",
          50: "#E7EAEE",
          100: "#CCD2DB",
          200: "#9CA8BA",
          300: "#687B97",
          400: "#455163",
          500: "#1B2027",
          600: "#15191E",
          700: "#0F1115",
          800: "#060709",
        },
        secondary: {
          DEFAULT: "#663EFF",
          50: "#EFEBFF",
          100: "#DED6FF",
          200: "#C2B3FF",
          300: "#A18AFF",
          400: "#8566FF",
          500: "#3300FF",
          600: "#2600BD",
          700: "#1A0080",
          800: "#0C003D",
        },
      },
    },
  },
  plugins: [],
};
