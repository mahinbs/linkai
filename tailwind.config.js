/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Dilli's palette (28 Oct 2026 brief): deep navy-teal foundation, cyan-blue accent, white and light gray sections.
      // "black" is the navy-teal, so every dark section, dark text and button text follows it.
      colors: {
        black: "#0D1A22",
        panel: "#13242E",
        mist: "#F3F6F8",
        silver: "#C5C9CC",
        slate: "#34434A",
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
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        atkinson: ["Atkinson Hyperlegible", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
