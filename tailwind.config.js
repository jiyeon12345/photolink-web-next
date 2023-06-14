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
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        black: '#000000',
        white: '#ffffff',
        dark: '#160e28',
        border: '#e0e2e7',
        primary: '#1b2bf0',
        primaryDark: '#2526c4',
        secondary: '#CCCCCC',
        tertiary: '#EFEFEF',
        red: '#ED2040',
      },
      fontSize: {
        12: '12px',
        13: '13px',
        14: '14px',
        16: '16px',
        18: '18px',
        24: '24px',
      },
      lineHeight: {
        12: '16px',
        13: '20px',
        14: '24px',
        16: '24px',
        18: '28px',
        24: '34px',
      },
      letterSpacing: {
        12: '-0.5px',
        13: '-1px',
        14: '-1px',
        16: '-1px',
        18: '-2px',
        24: '-1px',
      },
    },
  },
  plugins: [],
}
