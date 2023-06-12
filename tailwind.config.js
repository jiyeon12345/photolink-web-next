/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        brand: '#001BDE',
        black: '#000000',
        white: '#ffffff',
        dark: '#191a20',
        primary: '#3f4150',
        secondary: '#f5f5f5',
        border: '#e0e2e7',
        red: '#ED2040',
      },
    },
  },
  plugins: [],
}
