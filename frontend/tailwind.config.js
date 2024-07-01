/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerColor: "#00a884",
        buttonColor: "#0b987e",
        blackOpacity: "rgba(0, 0, 0, 0.2)",
      },
      backgroundImage: {
        bgImg: "url('./assets/images/bgImg.webp')"
      }
    },
  },
  plugins: [],
}