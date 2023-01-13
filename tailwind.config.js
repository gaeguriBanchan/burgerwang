/**
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        underline: "url('/src/assets/images/bg_underline.png')",
        "icon-deli": "url('/src/assets/images/icon_deli.png')",
        "icon-menu": "url('/src/assets/images/icon_menu.png')",
        "icon-pay": "url('/src/assets/images/icon_pay.png')",
      },
      colors: {
        f7f7f7: "#f7f7f7",
        bgwred: "#e22219",
        ededed: "#ededed",
        "2e2e2e": "#2e2e2e",
        d9d9d9: "#d9d9d9",
        512314: "#512314",
        "8d8d8d": "#8d8d8d",
        737373: "#737373",
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
