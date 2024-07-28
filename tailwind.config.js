/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blinkCursor: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' },
        },
      },
      animation: {
        typing: 'typing 4s steps(30, end)',
        blinkCursor: 'blinkCursor .75s step-end infinite',
      },
      rotate: {
        '180': '180deg',
      },
      colors: {
        'blackie' : '#0F1014',
        'darkergreen' : '#05161A',
        'darkgreen' : '#072E33',
        'mediumgreen' : '#0C7078',
        'lightgreen' : '#0F969C',
        'cyan1' : '#6DA5C0',
        'cyan2' : '#294D61',
      },
      fontFamily: {
        'merriweather': ['Merriweather','serif'],
        'playfair': ['Playfair Display','serif'],
        'montserrat': ['Montserrat',' sans-serif'],
        'roboto' : ['Roboto',' sans-serif'],
        'lato': ['Lato'],
        'garamond': ['Garamond'],
        'nunito': ['Nunito','sans-serif'],
        'inter': ['Inter','sans-serif'],
        'poppins': ['Poppins','sans-serif'],
        'work': ['Work Sans','sans-serif'],
        'open': ['Open Sans','sans-serif'],
        'lexend': ['Lexend','sans-serif'],
        'tinos' : ['Tinos','sans-serif'],
    },
    },
  },
  plugins: [],
}

