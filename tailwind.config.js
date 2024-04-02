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
        customOrange: '#c85516'
      },
      backgroundImage: {
        school: 'linear-gradient(to right, rgba(247, 247, 247, 0.5), rgba(0, 0, 0, 0.5)), url("./src/assets/img/school.jpg")'
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
