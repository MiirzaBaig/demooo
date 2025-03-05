/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        background: 'var(--background)',
        surface: 'var(--surface)',
      },
      backgroundColor: {
        'surface-30': 'rgba(42, 42, 62, 0.3)',
        'surface-40': 'rgba(42, 42, 62, 0.4)',
      },
    },
  },
  plugins: [],
};