/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Poppins', 'sans-serif'],
      },
      animation: {
        'slide-in': 'slide-in 0.25s ease-in-out',
        'jump-in': 'jump-in 0.25s ease-in-out',
        'drop-in': 'drop-in 0.4s ease-in-out',
        'drop-out': 'drop-out 0.4s ease-in-out',
      }
    },
  },
  plugins: [],
}

