/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          500: "#F3521C",
          300: "#FF8962",
          100: "#FFB79F",
        },
      },
    },
  },
  plugins: [],
};
