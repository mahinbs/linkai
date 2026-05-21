/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#239FD2",
        // primary: "#FEFF05",
        // primary1: "#DFDE02",
        primary1: "#239FD2",
        // primary1: "#FCD743",
        primary2: "#239FD2",
      },
      boxShadow: {
        large: "0px 0px 30px 10px rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        atkinson: ["Atkinson Hyperlegible", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
