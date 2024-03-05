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

    },

    extend: {
      colors: {
          "background": '#343B3C',
          "accent1": '#6ADAEC',
          "links": '#FFD7B9',
          "linkshover": '#FF8667',
          "buttonhover": "#D3FBD8",
          "active": '#DAECE6',
          "socials": 'rgba(245,227,214,60)'
      },
    },
  },
  plugins: [],
}