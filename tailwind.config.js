/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-beige': '#f8f4ee',
        'custom-orange': '#dd622b',
        'custom-light-orange': '#e6c0af',
      },
    },
  },
  plugins: [],
}