/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html,vue}", // Ajusta según tu estructura
  ],
  theme: {
    extend: {
      backgroundColor: {
        mainColor: "#D2B48C",
        mainBackGround: "#f5f5f5",
        ctaButtons: "#6B4F3B",
        ctaButtonsHover: "#A97142",
        cardMainColor: "#FFF1E6",
        // El gris que se usa aveces es el gray-700 de Tailwind
      },
      textColor: {
        mainBrown: "#D2B48C",
      },
    },
  },
  plugins: [],
};
