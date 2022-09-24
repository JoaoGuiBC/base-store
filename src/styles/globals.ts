import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    scrollbarColor: '$background $icon',
    scrollbarWidth: '4px',
  },

  html: {
    '@sm': {
      fontSize: '75%',
    },
    '@md': {
      fontSize: '87.5%',
    },
  },

  '::-webkit-scrollbar': {
    width: '4px',
  },
  
  '::-webkit-scrollbar-track': {
    backgroundColor: '$icon',
  },
  
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '$background',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$background',
    color: '$title',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  }
});