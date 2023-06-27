/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'bubble-pink':"0 0 0 2px #ff2d7544, 0 0 5px #ff2d75, 0 0 10px #ff2d75",
        'bubble-blue':"0 0 0 2px #02cbf744, 0 0 5px #02cbf7, 0 0 10px #02cbf7"
      }
    },
  },
  plugins: [],
}