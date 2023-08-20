/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./Source/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
    }
  ],
}

