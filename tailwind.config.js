const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgLight: '#D7EDF1',
        bgDark: '#CFDEDF',
        bgGray: '#CCD7DC',
        lakeBlue: '#2E92AF',
        sky: colors.sky
      }
    },
  },
  variants: {
    extend: {
      borderColor: ['active', 'hover'],
      borderWidth: ['active', 'hover'],
      borderStyle: ['active', 'hover']
    },
  },
  plugins: [],
}
