/** @type {import('tailwindcss').Config} */

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000000',
        white: '#ffffff',
        dark: '#0a0814',
        lightgray: '#C6C5D0',
        purpleAccent: '#5E32A8',
        purpleText: '#A388F1',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      extend: {},
    },
    corePlugins: {
      preflight: true,
    },
    plugins: [],
  }
  