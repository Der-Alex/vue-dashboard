module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        68: '17rem',
        72: '18rem',
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        'special-black': '#141212',
        'special-gray': '#1c1919',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
