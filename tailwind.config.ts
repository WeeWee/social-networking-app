/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: ["light", "dark", "dracula"],
  },
  plugins: [require("daisyui")],
};

