const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        customYellow: '#ecc819',
        customGreen: '#95b735',
        customOrange: '#ff6432',
        backgroundColor: '#f8f1de'
      },
      backgroundImage: {
        aboutBg: 'linear-gradient(to right, rgb(49,49,49), rgb(200,85,22,.4)), url("./src/assets/img/img1.webp")'
      }

    }
  },
  plugins: [
    require('flowbite/plugin'),
    addVariablesForColors
  ]

}


function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}