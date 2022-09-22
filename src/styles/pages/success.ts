import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',

  alignItems: 'center',
  justifyContent: 'center',

  margin: '0 auto',

  h1: {
    fontSize: '$2xl',
    color: '$title',
  },

  p: {
    fontSize: '$xl',
    color: '$text',
    maxWidth: 560,
    textAlign: 'center',
    lineHeight: 1.4,

    marginTop: '2rem',
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

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  maxWidth: 130,
  height: 145,

  padding: '0.25rem',
  marginTop: '4rem',

  borderRadius: 8,
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',

  img: {
    objectFit: 'cover',
  },
});