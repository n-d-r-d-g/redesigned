/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
      xs: '375px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'times': ['Times New Roman', 'Times', 'serif'],
      },
      screens: {
        print: {
          raw: 'print'
        }
      }
    },
  },
  darkMode: 'media',
  plugins: [
    require('flowbite/plugin'),
  ],
}
