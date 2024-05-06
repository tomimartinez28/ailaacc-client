const flowbite = require('flowbite-react/tailwind')
const {
  default: flattenColorPalette
} = require('tailwindcss/lib/util/flattenColorPalette')

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.content()
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
        cetBg: 'linear-gradient(to right, rgb(49,49,49), rgb(200,85,22,.4)), url("./src/assets/img/img1.webp")',
        saieBg: 'linear-gradient(to right, rgb(49,49,49), rgb(200,85,22,.4)), url("./src/assets/img/img4.webp")',
        etBg: 'linear-gradient(to right, rgb(49,49,49), rgb(200,85,22,.4)), url("./src/assets/img/img3.webp")',
        diagnosticoBg: 'linear-gradient(to right, rgb(49,49,49), rgb(200,85,22,.4)), url("./src/assets/img/img4.webp")'

      }

    }
  },
  plugins: [
    flowbite.plugin(),
    addVariablesForColors

  ]

}

function addVariablesForColors ({ addBase, theme }) {
  const allColors = flattenColorPalette(theme('colors'))
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ':root': newVars
  })
}
