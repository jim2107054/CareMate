/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryText:"#1C4A2A",
        hoverText:"#f5a911",
        navText:"#8C8C8C",
        btnColor:"#C6B09A"
      }
    },
  },
  plugins: [],
}