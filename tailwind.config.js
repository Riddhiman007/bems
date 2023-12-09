/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["app/**/*.tsx", "./app/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "0", // mobile
      md: "600", // tablet
      lg: "900px", // lapt
      xl: "1024px", // big screens
      xxl: "1440px",
    },
    container: {
      screens: {
        xs: "100%",
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        xxl: "1320px",
      },
      center: false,
    },
  },
  // important: true,
  darkMode: "class",
  corePlugins: {
    preflight: false,
  },
};
