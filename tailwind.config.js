/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    screens: {
      tablet: "380px",
      // => @media (min-width: 380px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        primary: "#554DD9",
        secondary: "#6A6A6A",
        tertiary: "#6764ED",
        quaternary: "#4336C4",
        quinary: "#00004F",
        senary: "#C4C4C4",
        background: "#F6F6F6",
      },
    },
  },
  plugins: [],
};
