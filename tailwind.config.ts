import { nextui } from "@nextui-org/theme";
import { Config, PluginAPI } from "tailwindcss/types/config";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
// import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
// const flattenColorPalette: any = (colors: any) =>
//   Object.assign(
//     {},
//     ...Object.entries(colors !== null && colors !== void 0 ? colors : {}).flatMap(
//       ([color, values]) =>
//         typeof values == "object"
//           ? Object.entries(flattenColorPalette(values)).map(([number, hex]) => ({
//               [color + (number === "DEFAULT" ? "" : `-${number}`)]: hex,
//             }))
//           : [
//               {
//                 [`${color}`]: values,
//               },
//             ],
//     ),
//   );

const config: Config = {
  content: [
    "./app/**/*.{tsx,ts,jsx,js}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|autocomplete|avatar|button|card|chip|divider|dropdown|input|modal|navbar|select|skeleton|spinner|table|tabs|user|ripple|listbox|popover|scroll-shadow|menu|checkbox|spacer).js",
  ],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        "slow-spin": "spin 2s linear infinite",
      },

      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
    },
  },
  // important: true,
  darkMode: "class",

  corePlugins: {
    preflight: false,
  },
  // important: true,
  plugins: [nextui(), addVariablesForColors],
};

function addVariablesForColors({ addBase }: PluginAPI) {
  let allColors = flattenColorPalette(colors);
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );
  //@ts-ignore
  addBase({ ":root": newVars });
}
export default config;
