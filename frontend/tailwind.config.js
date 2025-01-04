import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1074F0",
        stroke: "#F4F4F4"
      }
    },
  },
  plugins: [
    daisyui,
  ],
}

