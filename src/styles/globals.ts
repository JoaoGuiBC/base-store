import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    '@sm': {
      fontSize: '75%',
    },
    '@md': {
      fontSize: '87.5%',
    },
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