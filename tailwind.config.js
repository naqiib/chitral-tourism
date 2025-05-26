module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      writingMode: {
        'vertical-rl': 'vertical-rl',
      },
      colors: {
        brand: {
          DEFAULT: '#1D4ED8',
          dark: '#1a43b8'
        },
        nav: {
          bg: '#201c29',
          text: '#ab49de',
          accent: '#8a2be2',
          dark: '#5a1d7a'
        }
      },
      // Remove the text-fill-stroke plugin and use built-in Tailwind
      textColor: {
        'fill-transparent': 'transparent'
      }
    },
  },
  plugins: [
    // Remove the text-fill-stroke plugin
  ],
}