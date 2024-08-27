/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      maxWidth: {
        '7.5xl': '80rem', // 1280px (default 7xl is 80rem, so you can adjust this)
        '8xl': '88rem',   // 1408px (custom value for 8xl)
      },
      height: {
        '72px': '72px',
      },
fontFamily: {

poppins: ['Poppins', 'sans-serif'],
inter: ['inter','sans-serif'],
},



    },
  },
  plugins: [],
}