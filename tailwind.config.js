/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme') // This is used for the theme extending purpose

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans] // Theme extends here
      },
      // extending color, No need to import like theme because there is no order required
      colors: {
        'brand-gray-1': '#dadce0',
        'brand-blue-1': '#1967d2',
        'brand-green-1': '#137333'
      }
    }
  },
  plugins: []
}
