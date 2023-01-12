/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
<<<<<<< HEAD
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
=======
      backgroundImage: {
        underline: "url('/src/assets/images/underline.png')",
      },
      colors: {
        f7f7f7: "#f7f7f7",
        bgwred: "#e22219",
        ededed: "#ededed",
        "2e2e2e": "#2e2e2e",
        d9d9d9: "#d9d9d9",
        512314: "#512314",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      JUA: ["BMJUA", "san-serif"],
    },
>>>>>>> master
  },
  plugins: [],
};
