/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bdk: {
          orange: '#F37B1D',
          navy: '#0B1B3A',
          gray: '#94A3B8',
          light: '#F8FAFC',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 0 rgba(243, 123, 29, 0)',
          },
          '50%': {
            boxShadow: '0 18px 45px rgba(243, 123, 29, 0.35)',
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'grid-pan': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 40px' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        marquee: 'marquee var(--marquee-duration, 32s) linear infinite',
        'marquee-reverse':
          'marquee-reverse var(--marquee-duration, 36s) linear infinite',
        'grid-pan': 'grid-pan 12s linear infinite',
      },
    },
  },
  plugins: [],
}
