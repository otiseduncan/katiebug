/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C0392B",       // Country red
        accent: "#F5E9DA",        // Cream beige
        wood: "#7B4B28",          // Rustic brown
        leaf: "#3E8E41"           // Farm green
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["Lato", "sans-serif"]
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        katiebugs: {
          primary: "#C0392B",
          secondary: "#7B4B28",
          accent: "#F5E9DA",
          neutral: "#3E8E41",
          "base-100": "#ffffff"
        }
      }
    ]
  }
}
