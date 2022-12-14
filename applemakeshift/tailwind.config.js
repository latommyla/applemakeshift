/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sourcesans': ["'Silkscreen'", 'cursive'],
      'lato': ["'Lato'", 'sans-serif'],
    },
    keyframes: {
      'fade-in': {
        '0%': {
          opacity: '0',
          transforms: 'translateX(10px)'
        },
      }
    },
    animation: {
      'fade-in': 'fade-in .7s ease-out'
    }
  },
  plugins: [],
}