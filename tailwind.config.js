/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'Kalameh': ['Kalameh', 'sans-serif'],
      },
    },
    container: {
      center: true,
      screens: {
        xl:'1280px',
      }
    }
  },
  plugins: [],
}