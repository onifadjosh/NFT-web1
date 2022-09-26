/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
       
        'display': ['Rubik'],
        'about': ['"Comic Neue"']
          
      },

      backgroundImage: {
        'hero': "url('./images/images (3).jpeg')",
      },

      colors: {
        'primcol': '#a1d283',
        'seccol': '#000000',
        'tetcol': '#2B076E',
        'faded-white': 'rgba(255, 255, 255, 0.05)',
        'faded-white': 'rgba(255, 255, 255, 0.05)',
      },
    },

    screens: {
      'sm': '280px',
      // => @media (min-width: 280px) { ... }

      'md': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
