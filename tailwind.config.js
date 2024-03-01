/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(232, 83, 130, 1)',
        secondary: 'rgba(57, 186, 223, 1)',
        tertiary: 'rgba(225, 167, 37, 1)'
      }
    },
  },
  plugins: [],
}