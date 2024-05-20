/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:'selector',
  theme: {
    screens: {
      tablet: "560px",
      desktop: "1024px",
    },
    extend: {
      backgroundImage: {
        "mobile-light-bg": "url(./assets/pattern-background-mobile-light.svg)",
        "tablet-light-bg": "url(./assets/pattern-background-tablet-light.svg)",
        "desktop-light-bg":
          "url(./assets/pattern-background-desktop-light.svg)",

        "mobile-dark-bg":"url(./assets/pattern-background-mobile-dark.svg)",
        "tablet-dark-bg": "url(./assets/pattern-background-tablet-dark.svg)",
        "desktop-dark-bg":
          "url(./assets/pattern-background-desktop-dark.svg)"
      },
    },
  },
  plugins: [],
};
