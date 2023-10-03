/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: "Poppins",
        titleFont: "Montserrat",
      },
      colors: {
        primaryColor: "#001f54",
        secondaryColor: "#1282a2",
        bgColor: "#181d31",
        textColor: "#ffeedd",
        backColor: "#efe5dc",
      },
      boxShadow: {
        btnShadow: "[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]",
      },
    },
  },
  plugins: [],
};
