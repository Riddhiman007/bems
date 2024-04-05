const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "app/**/*.tsx",
    "./app/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/**/*.{js, mjs}",
  ],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        "slow-spin": "spin 2s linear infinite",
      },
    },
  },
  // important: true,
  darkMode: "class",

  corePlugins: {
    preflight: false,
  },
  important: true,
  plugins: [
    nextui({
      themes: {},
    }),
  ],
};
