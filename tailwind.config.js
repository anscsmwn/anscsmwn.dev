const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', ...fontFamily.sans],
        doodle: ['Virgil', ...fontFamily.sans],
        lato: ['Lato', ...fontFamily.sans],
      },
      colors: {
        dark: '#1d1d1d',
        light: '#2f2f2f',
        gray: colors.neutral,
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
      },
    },
    cursor: {
      pencil: "url('/pencil.png') 0 24, auto",
      'pencil-dark': "url('/pencil-invert.png') 0 24, auto",
    },
  },
  plugins: [],
};
