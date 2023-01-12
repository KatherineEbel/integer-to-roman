/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#3ABEF8',
        'lightest-blue': '#B2C4EE',
        'medium-blue': '#012B3C',
        'darkest-blue': '#101729',
        'dull-blue': '#273448',
      },
      fontFamily: {
        sans: ['Open Sans', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
