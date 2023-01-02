/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lightSage: '#d2d5ce',
        darkSage: '#959d90',
        grayGreen: '#8c9086',
        lightGrey: '#a7afac',
        blueGrey: '#97a2a7',
        lightBrown: '#e8d9cd',
        regGrey: '#d4d7db',
        darkGreen: '#223030',
        offWhite: '#f9f4f1',
        logo: '#374237',
        filmRoll: '#231e0b',
      },
      fontFamily: {
        logo: ['Beth Ellen', 'cursive'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
