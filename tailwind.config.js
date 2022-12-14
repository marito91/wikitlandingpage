/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    screens: {
      tablet: "992px",
      // => @media (min-width: 992px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }

      tabletMax: { max: "992px" },
      // => @media (max-width: 992px) { ... }
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
        palette1: "#FF4444",
        palette2: "#AD44FF",
        palette3: "#448FFF",
        palette4: "#44D2FF",
        palette5: "#8BFF44",
        buttonMobile: "#2BE2A0",
      },
    },
  },
  plugins: [],
};
