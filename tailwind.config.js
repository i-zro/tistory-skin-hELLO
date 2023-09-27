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
        100: '#1B1D21',
        200: '#37373B',
        300: '#464B50',
        350: '#676B6F',
        400: '#7E7F86',
        500: '#9B9CA2',
        600: '#B0B1B6',
        650: '#D0D0D3',
        700: '#DFDFE1',
        750: '#ECECED',
        800: '#F8F8F9',
        900: '#FFFFFF',
        yellow: '#FFD300',
        darkyellow: '#FFCD01'
      },
      b: {
        100: '#060607',
        200: '#1F2127',
        300: '#252731',
        350: '#2F323B',
        375: '#343742',
        400: '#434653',
        500: '#555863',
        600: '#6E717D',
        700: '#80838D',
        800: '#B7B8BE',
        900: '#EDEDEF',
        transparent: 'transparent',
        white: '#FFFFFF',
        black: '#000000',
        blue: '#3772FF',
        purple: '#6C5DD3',
        deeppurple: '#5D4CC8',
        darkpurple: '#523fc5'
      }
    },
    extend: {
      width: {
        idx: '1100px',
        pem: 'var(--h-width)',
        s: '16rem', // sidebar
        c: 'calc(100% - 16rem)', // 100% - width.sidebar
        content: 'max-content'
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
          'SUITE',
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
