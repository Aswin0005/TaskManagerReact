/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mina: 'Mina',
        mukta: 'Mukta',
        nunito: 'Nunito',
        robotoCondensed: 'Roboto Condensed'
      }
    },
  },
  plugins: [],
};
