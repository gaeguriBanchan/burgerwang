/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        bg: '#f1ebe6',
        burgerRed: '#d81d09',
        ligthBrown: '#c0afa6',
        btBrown: '#4e2312',
        fakeBlack: '#2e2e2e',
      },
    },
  },
  plugins: [],
};
