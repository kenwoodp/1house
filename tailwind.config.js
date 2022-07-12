module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // TODO: Update with brand colours
      colors: {
        'primary': '#000',
      },
      maxWidth: {
        'page-width': '1440px'
      },
      fontSize: {
        'sm': ['0.75rem', '0.75rem'],
        'base': ['1rem', '1rem'],
        'lg': ['1.25rem', '1.25rem'], 
        'xl': ['1.5rem', '1.5rem'], // h4
        '2xl': ['1.875rem', '1.875rem'], // h3
        '3xl': ['2.25rem', '2.25rem'], // h2
        '4xl': ['2.5rem', '2.5rem'], // h1
       }
    },
  },
  plugins: [],
}
