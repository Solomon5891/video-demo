import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0b0f17',
        slatebg: '#0f172a',
        brand: '#FF3C00',
        brandDark: '#D63300',
        accent: '#10b981',
        accentDark: '#059669',
        sky: '#0ea5e9',
        amber: '#f59e0b',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(16,185,129,0.25), 0 12px 40px -12px rgba(16,185,129,0.45)',
        soft: '0 12px 40px -16px rgba(15,23,42,0.18)',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'scaleY(0.35)' },
          '50%': { transform: 'scaleY(1)' },
        },
        floatUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        wave: 'wave 1.05s ease-in-out infinite',
        floatUp: 'floatUp 0.6s ease-out forwards',
        pulseRing: 'pulseRing 1.8s ease-out infinite',
        marquee: 'marquee 28s linear infinite',
        shimmer: 'shimmer 2.4s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
