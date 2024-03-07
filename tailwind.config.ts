import { config } from "process"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'quicksand': ['Quicksand', 'sans-serif'],
      'lato': ['Lato', 'sans-serif'],
      'openSans': ['Open Sans', 'sans-serif'],
      'karla': ["Karla", 'sans-serif']

    },

    extend: {
      colors: {
          "background": '#343B3C',
          "accent1": '#6ADAEC',
          "accent2": "#95B0B5",
          "accent3": "#ff4848",
          "links": '#FFD7B9',
          "linkshover": '#FF8667',
          "buttonhover": "#D4FADD",
          "active": '#699F78',
          "socials": '#FFD7B9',
          "slide": "rgba(22,28,29,75%)"
      },
    },
  },
  plugins: [],
}