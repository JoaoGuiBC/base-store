import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',

  alignItems: 'center',
  justifyContent: 'center',

  margin: '0 auto',

  h1: {
    marginTop: '3rem',
    fontSize: '$2xl',
    color: '$title',
  },

  p: {
    fontSize: '$xl',
    color: '$text',
    maxWidth: 560,
    textAlign: 'center',
    lineHeight: 1.4,

    marginTop: '1.5rem',
  },

  a: {
    display: 'block',
    marginTop: '5rem',

    fontSize: '$lg',
    textDecoration: 'none',
    color: '$highlight',
    fontWeight: 'bold',

    transition: 'color 0.2s',

    '&:hover': {
      color: '$highlightSelected',
    },
  }
});

export const ImagesWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'relative',

  width: 316,

  '& div:nth-child(1)': {
    flex: 'none',
    order: 0,
    flexGrow: 0,
    margin: '0px -52px',
  },

  variants: {
    quantity: {
      '2': {
        paddingLeft: '52px',
      },
      '3': {
        '& div:nth-child(2)': {
          flex: 'none',
          order: 1,
          flexGrow: 0,
          margin: '0px -52px',
        },
      },
    },
  },
});

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: 140,
  maxWidth: 140,
  height: 140,

  padding: '0.25rem',

  borderRadius: '50%',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',

  img: {
    objectFit: 'cover',
  },
});

export const Counter = styled('div', {
  position: 'absolute',
  right: 0,
  bottom: 0,

  padding: 6,

  borderRadius: '50%',
  userSelect: 'none',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
  background: '$element',
  color: '$text',
  fontWeight: 'bold',
});
