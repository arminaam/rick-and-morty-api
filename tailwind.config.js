/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "80%  20%",
      },
      screens: {
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
    },
    screens: {

      mobile_l: "425px",

      tablet: "768px",
      // => @media (min-width: 640px) { ... }

      desktop_1024: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop_1440: "1440px",
      // => @media (min-width: 1280px) { ... }

      desktop_4k: "2560px",
    },
  },
  plugins: [require("daisyui")],
};
