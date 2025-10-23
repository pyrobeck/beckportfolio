/** @type {import('tailwindcss').Config} */

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          accent: '#8b5cf6', // Purple neon accent
          dark: '#0a0a0a',
          light: '#f5f5f5',
        },
        fontFamily: {
          sans: ['"Inter var"', 'sans-serif'],
          display: ['"Space Grotesk"', 'sans-serif'],
        },
      },
    },    
    corePlugins: {
      preflight: true,
    },
    plugins: [],
  }
  