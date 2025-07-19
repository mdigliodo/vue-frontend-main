const { addDynamicIconSelectors } = require('@iconify/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {
      colors: {
        // primary: '#25272D',
        // secondary: '#FFAE00',

        primary: {
          50: '#f5f5f6',
          100: '#e5e6e8',
          200: '#cbced2',
          300: '#a7acb4',
          400: '#7a828f',
          500: '#5d6570',
          600: '#4c525c',
          700: '#3f434c',
          800: '#363a42',
          900: '#25272d',
        },
        secondary: {
          50: '#fffbeb',
          100: '#fff3c6',
          200: '#ffe588',
          300: '#ffd143',
          400: '#ffb91d',
          500: '#ffae00',
          600: '#e69c00',
          700: '#bf8200',
          800: '#996700',
          900: '#7d5400',
        },
        wsmoke: '#F5F5F5',
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}
