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
        aboutBg: 'linear-gradient(to right, rgb(49,49,49), rgb(200,85,22,.4)), url("./src/assets/img/img2.webp")'
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite'
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: '0 0'
          },
          to: {
            backgroundPosition: '-200% 0'
          }
        }
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]

}
