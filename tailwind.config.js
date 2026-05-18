/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        'text': ['0 1px 8px rgba(0,0,0,0.5)', '0 2px 16px rgba(0,0,0,0.3)'],
      },

      colors: {
        background: '#000066',
        'background-alt': '#00007a',
        'background-tint': '#00004d',
        primary: {
          DEFAULT: '#66aaff',       /* brighter blue — better contrast */
          dark: '#6666ff',          /* deeper blue */
          light: '#bbccff',         /* pale blue */
          mint: '#99bbff',          /* nudged closer to new default hue */
        },
        heading: '#ffffff',
        body: '#dde8ff',            /* slightly warmer — clearer hierarchy vs primary */
        footer: '#00003a',
        'on-light': {
          DEFAULT: '#0a0a3d',
          muted: '#3a3a6e',
        },
        'on-lit':{
          DEFAULT: '#dad0d0ef',
          muted: '#d7d1d1f1',
        }
      },
      backgroundImage: {
        'gradient-blue-white':
          'linear-gradient(180deg, #000066 0%, #000088 18%, #1a1aaa 42%, #6666dd 68%, #ccccf5 88%, #ffffff 100%)',
        'gradient-blue-white-soft':
          'linear-gradient(165deg, #000066 0%, #0000aa 35%, #4444cc 62%, #aaaaee 85%, #ffffff 100%)',
      },
      fontFamily: {
        heading: ['Syne', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        body: '400',
        label: '500',
        heading: '700',
        hero: '800',
      },
      borderRadius: {
        card: '32px',
        soft: '40px',
        button: '50px',
        image: '36px',
        pill: '999px',
      },
      maxWidth: {
        content: '1200px',
      },
      spacing: {
        section: '120px',
      },
      boxShadow: {
        'card-hover':
          '0 24px 48px -16px rgba(100, 100, 255, 0.2), 0 0 0 1px rgba(180, 180, 255, 0.1)',
        card: '0 8px 32px -8px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(180, 180, 255, 0.08)',
        nav: '0 8px 32px -8px rgba(100, 100, 255, 0.2)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(180, 180, 255, 0.12)',
        'glass-lg': '0 24px 48px -12px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(180, 180, 255, 0.15)',
      },
      keyframes: {
        'liquid-float': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(2%, -3%) scale(1.03)' },
          '66%': { transform: 'translate(-2%, 2%) scale(0.98)' },
        },
        'liquid-drift': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(8px, -12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'liquid-float': 'liquid-float 14s ease-in-out infinite',
        'liquid-drift': 'liquid-drift 7s ease-in-out infinite',
        shimmer: 'shimmer 3s ease infinite',
        'spin-slow': 'spin-slow 12s linear infinite',
      },
      backgroundSize: {
        '300%': '300% 100%',
      },
    },
  },
  plugins: [],
}//a