/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C5CE7',
        secondary: '#00CEC9',
        background: '#0F172A',
        surface: '#1E293B',
        highlight: '#FACC15',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
