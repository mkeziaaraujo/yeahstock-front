/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-dark": "#1B1B1B",
        "black-light": "#323232",
        "blue-dark": "#1F7CFB",
        "gray-primary": "#8A8A8A",
      },
    },
  },
  plugins: [],
};
