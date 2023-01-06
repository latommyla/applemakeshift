/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
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
      },
      'fade-down': {
        '0%': {
          opacity: '0',
          transform: 'translateY(-30px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        }
      }
    },
    animation: {
      'fade-in': 'fade-in .6s ease-out',
      'fade-down': 'fade-down .5s ease-in',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}