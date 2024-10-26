/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ffcf3a", // Light mode primary
          dark: "#ffae00", // Dark mode primary
        },
        secondary: {
          DEFAULT: "#0063ff", // Light mode secondary
          dark: "#0044cc", // Dark mode secondary
        },
        textColor: {
          DEFAULT: "#4b5563", // Light mode text (gray-600)
          dark: "#e5e7eb", // Dark mode text (lighter color)
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
