/** @type {import('tailwindcss').Config} */
module.exports = {
  "dark":"class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      Color:{
        "brown" : {
          100 : "#E58411"
        }
      },
      fontFamily:{
        "GilroyRegular":"Gilroy Regular",
        "GilroyMedium" : "Gilroy Medium",
        "GilroyBold" : "Gilroy Bold",
    },
  },
  plugins: [],
}
}

