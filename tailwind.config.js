/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
         'container':'1320px'
      },
      fontFamily: {
        'dm': ['DM Sans'],
        },  fontSize: {
         '13':'13px',
         '39':'39px',
         '49':'49px',
        },
        backgroundImage: {

           },
    },
  },
  plugins: [],
}