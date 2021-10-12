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
        'primary-darkest': '#101524',
        'primary-darker': '#141b2d',
        'primary-dark': '#1f2940',
      }),
      borderColor: (theme) => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        'primary-darkest': '#101524',
        'primary-darker': '#141b2d',
        'primary-dark': '#1f2940',
      }),
      textColor: {
        'primary-darkest': '#101524',
        'primary-darker': '#141b2d',
        'primary-dark': '#1f2940',
      },
      boxShadow: {
        sm: '0 1px 2px 0 #101524',
        DEFAULT: '0 1px 3px #101524',
        md: '0 4px 6px -1px #101524',
        lg: '0 10px 15px -3px #101524',
        xl: '0 20px 25px -5px #101524',
        '2xl': '0 25px 50px -12px #101524',
        '3xl': '0 35px 60px -15px #101524',
        inner: 'inset 0 2px 4px 0 #101524',
        none: 'none',
      },
      transitionProperty: {
        rotate: 'rotate',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      ringColor: ['active'],
      ringWidth: ['active'],
      ringOpacity: ['active'],
      outline: ['active'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
