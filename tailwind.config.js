/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}', // agar app router ishlatayotgan bo‘lsangiz
    ],
    theme: {
      extend: {
        colors: {
          neon: '#39ff14',
          'gray-850': '#1a1a1a',
        },
      },
    },
    plugins: [],
  }
  