/** @type {import('tailwindcss').Config} */
// NOTE: Elke file met met code voor de mobile app moet aan content toegevoegd worden
module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx}", "./HotspotsList.js", "./Homepage.js", "./Settings.js"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}

