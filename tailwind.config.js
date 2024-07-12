/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nantes: ["Nantes"],
        messina: ["Messina Sans"],
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
  darkMode: "class",
};
