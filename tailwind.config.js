/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["barlow"],
        "barlow-condensed": ["barlow-condensed"],
        bellefair: ["bellefair"],
      },
      colors: {
        primary: "#0B0D17",
        secondary: "#FFFFFF",
        neutral: "#D0D6F9",
      },
    },
  },
  plugins: [],
};
