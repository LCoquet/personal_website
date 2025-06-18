/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // ← Enables manual dark mode via class="dark"
  theme: {
    extend: {
      // Optional: add custom colors, fonts, spacing etc. here
    },
  },
  plugins: [],
};