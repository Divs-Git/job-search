/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme') // This is used for the theme extending purpose

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
