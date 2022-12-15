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
          transform: 'translateX(20px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0)',
        }
      }
    },
    animation: {
      'fade-in': 'fade-in .2s ease-out'
    }
  },
  plugins: [],
}