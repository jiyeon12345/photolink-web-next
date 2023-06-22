const { colors } = require('./styles/theme/colors')
const { screens } = require('./styles/theme/devices')
const {
  fontSize,
  lineHeight,
  letterSpacing,
} = require('./styles/theme/typography')
const { borderRadius } = require('./styles/theme/borderRadius')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors,
    screens,
    fontSize,
    lineHeight,
    letterSpacing,
    borderRadius,
  },
  plugins: [],
}
