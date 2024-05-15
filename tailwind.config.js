/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "480px",
      desktop: "1044px",
    },
    extend: {
      backgroundImage: {
        "mobile-light-bg": "url(./assets/pattern-background-mobile-light.svg)",
        "tablet-light-bg": "url(./assets/pattern-background-tablet-light.svg)",
        "desktop-light-bg":
          "url(./assets/pattern-background-desktop-light.svg)",
      },
    },
  },
  plugins: [],
};
