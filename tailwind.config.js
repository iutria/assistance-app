const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
        darkGreen: '#052010',
        green: '#054343',
        gray: '#687978',
        grayLight: '#B6C3C7',
        ligth: '#D3DFE1',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      ligth: {
        colors: {
          darkGreen: '#052010',
          green: '#054343',
          gray: '#687978',
          grayLight: '#B6C3C7',
          ligth: '#D3DFE1',
        }
      },
      dark: {
        colors: {
          darkGreen: '#052010',
          green: '#054343',
          gray: '#687978',
          grayLight: '#B6C3C7',
          ligth: '#D3DFE1',
        }
      }
    }
  })],
};
