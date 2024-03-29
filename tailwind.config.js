import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors:{
        'instagram-orange': '#f09433',
        'instagram-pink':'#e47297',
        'instagram-purple':'#d946ef;',
        'low-orange': '#fecb58',
        'mid-orange': '#faa14d',
        'high-orange': '#ffb300',

        },
        animation: {
          "background-shine": "background-shine 2s linear infinite",
        },
        keyframes: {
          "background-shine": {
            from: {
              backgroundPosition: "0 0",
            },
            to: {
              backgroundPosition: "-200% 0",
            },
          },
        },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
  
}
