/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bdk: {
          yellow: '#F2B705',
          navy: '#0B1B3A',
          plomo: '#9CA3AF',
          light: '#F8FAFC',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 0 rgba(242, 183, 5, 0)',
          },
          '50%': {
            boxShadow: '0 18px 40px rgba(242, 183, 5, 0.3)',
          },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        kenburns: {
          '0%': { transform: 'scale(1) translate3d(0, 0, 0)' },
          '100%': { transform: 'scale(1.08) translate3d(-2%, -2%, 0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out both',
        'fade-in': 'fade-in 1s ease-out both',
        'slide-in': 'slide-in 0.7s ease-out both',
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
        kenburns: 'kenburns 8s ease-out both',
      },
    },
  },
  plugins: [],
}
