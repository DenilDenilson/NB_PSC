const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./**/*.{html, js}",
    //"./*.{html, js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Franklin', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
