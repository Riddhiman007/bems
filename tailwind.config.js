/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["app/**/*.tsx", "./app/**/*.{html,js,jsx,ts,tsx}"],
  theme: {},
  // important: true,
  darkMode: "class",
  corePlugins: {
    preflight: false,
  },
  important: true,
};
