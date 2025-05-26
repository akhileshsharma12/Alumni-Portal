import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'customPurple': '#5c0f8b',
      },
    },
  },
  fontFamily: {
    playfair: ['"Playfair Display"', 'serif'],
  },
  backgroundImage: {
    'text-gradient': 'linear-gradient(144deg, #5c0f8b 63%, #ff5100 100%)',
  },
  plugins: [
    daisyui,  
    function ({ addUtilities }) {
      addUtilities({
        '.text-gradient': {
          'background': 'linear-gradient(144deg, #5c0f8b 63%, #ff5100 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      });
    },
  ],
}