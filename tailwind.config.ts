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
      'karla': ["Karla", 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],

    },

    extend: {
      colors: {
          "background": '#0E0615',
          "text": "#E5D8F6",
          "primary": "#B187E4",
          "secondary":"#B5CDCE",
          "accent": "#d135ab",
      },
      dropShadow:{
        "button": "8px 8px 23px rgba(181, 205, 206, 0.5)",
      }
    },
  },
  plugins: [],
}