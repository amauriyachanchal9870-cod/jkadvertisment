/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#0B6B35',
          'green-dark': '#085027',
          'green-light': '#0e8843',
          emerald: '#16A34A',
          yellow: '#F4C542',
          'yellow-light': '#FDE047',
          'yellow-dark': '#D9A726',
          bg: '#F6F8F5',
          dark: '#17231B',
          gray: {
            50: '#F8FAF7',
            100: '#F0F4EF',
            200: '#E2E9E0',
            300: '#CBD5C8',
            400: '#94A390',
            500: '#647461',
            600: '#475445',
            700: '#323C30',
            800: '#212920',
            900: '#17231B',
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px -5px rgba(11, 107, 53, 0.08)',
        'card-hover': '0 20px 40px -10px rgba(11, 107, 53, 0.16)',
        'glow': '0 0 25px rgba(244, 197, 66, 0.35)',
        'glow-green': '0 0 30px rgba(11, 107, 53, 0.3)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
