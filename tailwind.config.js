/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#46EF80',
        navy: '#002430',
        teal: '#279989',
        deep: '#000060',
        surf: '#EAF4F7',
        ink: '#0D1B21',
        ink2: '#4A6572',
      },
      fontFamily: {
        sans: ['Cera Pro', 'Poppins', 'Helvetica', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
