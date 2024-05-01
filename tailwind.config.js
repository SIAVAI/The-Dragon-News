/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html, js, ts, vue, jsx}", 
    "./src/**/*"
  ],
  theme: {
    extend: {
      fontFamily:{
        sedan:'"Sedan", serif'
      }
    },
  },
  plugins: [require("daisyui")],
}

