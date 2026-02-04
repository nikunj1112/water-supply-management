/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        light: "#d7d2f4",
        white: "#ffffff",
        dark: "#110532",
        primary: "#392f97",
        secondary: "#685bbc",
        info: "#807ce3",
        accent1: "#453f6f",
        accent2: "#9550be",
        accent3: "#9ab4dc",
        success: "#29a064",
        warning: "#dfcb2a",
        danger: "#eb2816"
      }
    }
  },
  plugins: []
};
