/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        logo: "70px",
        pic: "570px",
      },
    },
  },
  plugins: [],
};
