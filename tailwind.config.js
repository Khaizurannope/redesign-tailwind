module.exports = {
  content: ["./public/**/*.{html, js}"],

  theme: {
    screen: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#fd3d57",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
  darkMode: 'class', // or 'media' if you prefer the system's dark mode setting
  theme: {
    extend: {
      // Add custom dark theme colors here if needed
    },
  },
  variants: {},
  plugins: [],
};
