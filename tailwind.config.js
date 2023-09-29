/** @type {import('tailwindcss').Config} */

const colors = {
  "m_green": "#73A76A",
  "m_green2": "#016A70",
  "m_gold": "#05056e",
  "m_purple": "#b802b4",
  "m_blue": "#0224b8",
  "m_blue2": "#05476e",
  "m_orange1": "#de6400"
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": colors.m_green,
        "g_start1": colors.m_green2,
        "g_end1": colors.m_blue2,
        "border_color1": colors.m_orange1
      },
      backgroundImage: {
        'hero': "url('/imgs/woods.jpg')",
      }
    },
  },
  plugins: [],
}

