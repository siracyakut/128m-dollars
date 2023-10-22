/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "green-bg":
          "linear-gradient( 133deg, rgba(140, 223, 63, 1) 0%, rgba(47, 206, 91, 1) 63%)",
        "green-hover":
          "linear-gradient(133deg, rgba(140, 223, 63, 1) 0%, rgba(47, 206, 91, 1) 100%)",
      },
      boxShadow: {
        "header-shadow": "0 1px 2px rgb(0 0 0 / 6%)",
        "hover-shadow": "0 2px 4px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
