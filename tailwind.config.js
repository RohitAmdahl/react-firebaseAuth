/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        logo: "70px",
        pic: "470px",
      },
      colors: {
        text: "#100118",
        heading: "#6704ff",
        buttonBg: "#b2aeff",
        hover: "#cac7ff",
      },
    },
  },
  plugins: [],
};
