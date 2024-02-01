/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        regular:["iranSans-regular"],
        black:["iranSans-black"],
        bold:["iranSans-bold"],
      },
      fontSize:{
        titleAddProduct:"64px",
      },
      borderRadius:{
        login:"20px"
      },
      backgroundColor:{
        login:"rgba(15, 16, 53, 0.70)"
      },
      padding:{
        login:"5px 0px 15px 0px"
      }
    },
  },
  plugins: [],
}