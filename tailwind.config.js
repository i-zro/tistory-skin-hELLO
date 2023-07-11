const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app.pug', './index.pug', './views/**/*.pug'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1100px',
      xl: '1400px',
      '2xl': '1820px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      h: {
        100: '#FFFFFF',
        200: '#E6F1F9',
        300: '#CAD5DD',
        400: '#AEB9C1',
        500: '#949EA6',
        600: '#7A848B',
        700: '#616B72',
        800: '#495359',
        900: '#323C42',
        1000: '#1D262C',
        blue: '#5db0d7',
        orange: '#ff5544'
      }
    },
    extend: {
      width: {
        idx: '1100px',
        pem: 'var(--h-width)',
        s: '16rem', // sidebar
        c: 'calc(100% - 16rem)' // 100% - width.sidebar
      },
      keyframes: {
        loading: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        loading: 'loading 1s linear infinite'
      },
      fontFamily: {
        sans: [
          'Noto Sans KR',
          ...defaultTheme.fontFamily.sans
        ],
        mono: [
          'D2Coding',
          ...defaultTheme.fontFamily.mono
        ]
      }
    }
  }
}
