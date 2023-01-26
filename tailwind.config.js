/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        564: "36rem",
      },
      backgroundImage: {
        underline: "url('/src/assets/images/bg_underline.png')",
        "icon-deli": "url('/src/assets/images/icon_deli.png')",
        "icon-menu": "url('/src/assets/images/icon_menu.png')",
        "icon-pay": "url('/src/assets/images/icon_pay.png')",
        "icon-arrow1": "url('/src/assets/images/icon_arrow_1.png')",
        "icon-arrow2": "url('/src/assets/images/icon_arrow_2.png')",
        "icon-check": "url('/src/assets/images/icon_check.png')",
        "icon-key": "url('/src/assets/images/icon_key.png')",
        "icon-key1": "url('/src/assets/images/icon_key_1.png')",
        "icon-coupon": "url('/src/assets/images/icon_coupon.png')",
        "icon-order": "url('/src/assets/images/icon_order.png')",
        "icon-welcome": "url('/src/assets/images/icon_welcome.png')",
        "icon-person": "url('/src/assets/images/icon_person.png')",
        "icon-eye": "url('/src/assets/images/icon_eye.png')",
        "icon-eye-blind": "url('/src/assets/images/icon_eye_blind.png')",
        "icon-out": "url('/src/assets/images/icon_out.png')",
        "icon-close": "url('/src/assets/images/icon_close.png')",
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
      JUA: ["BMJUA", "san-serif"],
    },
  },
};
