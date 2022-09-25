import { styled } from "@stitches/react";

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',
});

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  maxWidth: 576,

  padding: '0.25rem',

  borderRadius: 8,
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',

  img: {
    objectFit: 'cover',
  },
});

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$text',
  },

  span: {
    display: 'block',
    marginTop: '1rem',

    fontSize: '$2xl',
    color: '$highlightSelected',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$text',
  },

  button: {
    padding: '1.25rem',
    marginTop: 'auto',

    border: 0,
    cursor: 'pointer',
    borderRadius: 8,
    color: '$shape',
    backgroundColor: '$highlight',

    fontWeight: 'bold',
    fontSize: '$md',

    transition: 'background 0.2s',

    '&:hover': {
      backgroundColor: '$highlightSelected',
    },
  },
});
