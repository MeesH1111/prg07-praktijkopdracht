/** @type {import('tailwindcss').Config} */
// NOTE: Elke file met met code voor de mobile app moet aan content toegevoegd worden
module.exports = {
    content: [
        "./src/components/**/*.{js,jsx,ts,tsx}",
        "./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/routes/**/*.{js,jsx,ts,tsx}",
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {},
    },
    plugins: [],
}

