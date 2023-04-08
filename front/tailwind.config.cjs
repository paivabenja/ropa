/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gruvbox-red": "#cc241d",
        "gruvbox-light-font": "#ebdbb2",
        "gruvbox-bg2": "#504945",
        "gruvbox-bg4": "#7c6f64",
        "mp-bg1": "#5e97f2",
      },
      fontFamily: {
        credit: "credit"
      },
      boxShadow: {
      'nav-i' : '5px 5px 10px #161616, -5px -5px 10px #343434'
    }
    }
  },
  plugins: [],
};
