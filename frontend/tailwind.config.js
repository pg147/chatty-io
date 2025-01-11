import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        regular: ['Aeonik-Regular'],
        medium: ['Aeonik-Medium'],
        bold: ['Aeonik-Bold']
      },
      colors: {
        primary: "#1074F0",
        stroke: "#F4F4F4",
        light: "#FCFCFC",
        subtitle: "#6A6A6A",
        mediumDark: "#EEEEEE",
        dark: "#D1D1D1"
      },
      boxShadow: {
        intense: "0px 0px 16px rgba(17,17,26,0.1)"
      }
    },
  },
  plugins: [
    daisyui,
  ],
}

