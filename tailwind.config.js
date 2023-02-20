/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html","./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        lobster:['Lobster Two', 'cursive']
        },
    },
  },
  plugins: [],
}
