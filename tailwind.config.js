/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      screens: {
        'widescreen': {'raw':'(min-aspect-ratio: 3/2)'},
        'tallscreen': {'raw':'(min-aspect-ratio: 1/2)'}
      }
    },
    keyframes:{
      'open-menu': {
        '0%': {transform: 'scaleY(0)'},
        '80%': {transform: 'scaleY(1,2)'},
        '100%': {transform: 'scaleY(1)'},
      }
    },
    animation: {
      'open-menu': 'open-menu 0.5s ease-in-out forwards'
    },

    fontFamily: {
        pixel: ["Pixelify Sans",'sans-serif'],
        poppins: ["Poppins",],
        graffiti: ["Sedgwick Ave Display"]
    },

    backgroundImage:{
      grafPattern: "url('../img/tags.jpg')",
      overlay: "linear-gradient(0deg, rgba(0,8,19,1) 10%, rgba(0,20,48,0.5354516806722689) 51%, rgba(0,8,19,1) 90%);"
    }
  },
  plugins: [],
}

