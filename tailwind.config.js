/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html,vue}", // Ajusta según tu estructura
  ],
  theme: {
    extend: {
      backgroundColor: {
        mainColor: "#D2B48C",
        mainBackGround: "#f7f7f7",
      },
    },
  },
  plugins: [],
};
