const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|avatar|button|card|dropdown|input|modal|navbar|select|spinner|table|user|divider|ripple|menu|popover|listbox|scroll-shadow|checkbox|spacer).js",
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
  // important: true,
  plugins: [
    
    nextui(),
  ],
};
