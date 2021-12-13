module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'reverse-spin-slow': 'reverse-spin 2s linear infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)'
          },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ["motion-safe"]
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
