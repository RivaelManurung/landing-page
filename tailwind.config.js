/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: { center: true, padding: '1rem', screens: { lg: '1120px', '2xl': '1200px' } },
    extend: {
      colors: {
        primary: {
          50: '#EFFEF7',
          100: '#D8FBEA',
          200: '#B2F5D6',
          300: '#84E8BE',
          400: '#52D5A3',
          500: '#22C18A', // main
          600: '#17A673',
          700: '#11865D',
          800: '#0F6A4B',
          900: '#0D583F',
        },
        ink: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
          300: '#CBD5E1',
          200: '#E2E8F0',
          100: '#F1F5F9',
          50: '#F8FAFC',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(2, 6, 23, 0.1)'
      },
    },
  },
  plugins: [],
}