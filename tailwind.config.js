const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./**/*.{html, js}",
    //"./*.{html, js}",
  ],
  theme: {
    screen: {
      'xl': '1440px',
    },
    extend: {
      fontFamily: {
        'sans': ['Franklin', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
