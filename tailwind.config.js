/**
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        underline: "url('/src/assets/images/underline.png')",
      },
      colors: {
        f7f7f7: '#f7f7f7',
        bgwred: '#e22219',
        ededed: '#ededed',
        '2e2e2e': '#2e2e2e',
        d9d9d9: '#d9d9d9',
        512314: '#512314',
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      JUA: ['BMJUA', 'san-serif'],
    },
  },
  plugins: [],
};
