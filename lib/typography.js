import Typography from 'typography';

const typography = new Typography({
  googleFonts: [
    {
      name: 'Bangers',
      styles: ['400'],
    },
    {
      name: 'Kosugi Maru',
      styles: ['400'],
    },
  ],

  headerFontFamily: ['Bangers', 'cursive'],
  bodyFontFamily: ['Kosugi Maru', 'sans-serif'],

  baseFontSize: '24px',
});

export default typography;