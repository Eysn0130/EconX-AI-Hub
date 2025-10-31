/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        police: {
          blue: '#1a3e72',
          light: '#4a6fa5',
          dark: '#0d1f3a',
          accent: '#e74c3c',
          gray: '#f5f7fa'
        }
      }
    }
  },
  plugins: []
};
