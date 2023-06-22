/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/pages/tw-elements/dist/js/**/*.js",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/components/tw-elements/dist/js/**/*.js",
     "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}
