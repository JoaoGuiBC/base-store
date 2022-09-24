import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  alignItems: 'flex-start',
  justifyContent: 'center',

  minHeight: '100vh',
});

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',
  maxWidth: 1180,

  margin: '0 auto',
  padding: '1rem 0',

  button: {
    display: 'flex',
    
    padding: 12,

    color: '$icon',
    borderRadius: 6,
    cursor: 'pointer',
    backgroundColor: '$element',

    transition: 'all 0.2s',

    '&:hover': {
      filter: 'brightness(1.5)',
    },
  }
});

export const ModalWrapper = styled('div', {
  position: 'fixed',
  right: 0,
  left: 0,
  top: 0,
  bottom: 0,
  
  zIndex: 10,
  cursor: 'pointer',
  background: 'rgba(0, 0, 0, 0.5)',

  transition: 'all 0.2s ease-in-out',

  variants: {
    off: {
      true: {
        opacity: 0,
        visibility: 'hidden',
      },
    },
  },
});

export const ModalContainer = styled('aside', {
  display: 'flex',
  flexDirection: 'column',

  position: 'fixed',
  right: 0,
  top: 0,
  bottom: 0,

  width: '30rem',
  padding: '3rem',
  paddingTop: '4.5rem',

  cursor: 'default',
  background: '$element',

  transition: 'all 0.2s ease-out',

  variants: {
    off: {
      true: {
        transform: 'translateX(100%)',
      },
    },
  },

  button: {
    cursor: 'pointer',
  },

  '& > button': {
    position: 'fixed',
    right: 24,
    top: 24,

    zIndex: 20,
    border: 'none',
    color: '$icon',
    cursor: 'pointer',
    background: 'none',
    transition: 'color 0.2s',

    '&:hover': {
      color: '$title',
    },
  },

  '& > strong': {
    fontSize: '$lg',
  },
});

export const ProductsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',

  flex: 1,
  marginTop: '2rem',
  overflow: 'auto',
});

export const Product = styled('div', {
  display: 'flex',
  gap: '1.25rem',

  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  span: {
    color: '$text',
    fontSize: '$md',
  },

  strong: {
    color: '$title',
    fontSize: '$md',
    marginTop: '-1rem',
  },

  button: {
    border: 'none',
    fontWeight: 'bold',
    background: 'none',
    color: '$highlight',
    fontSize: '$sm',

    transition: 'color 0.2s',

    '&:hover': {
      color: '$highlightSelected',
    },
  },
});

export const ImageContainer = styled('div', {
  borderRadius: 8,
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
});

export const Footer = styled('footer', {
  marginTop: '0.5rem',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },

  span: {
    color: '$title',
    fontSize: '$sm',
    lineHeight: '160%',
  },

  strong: {
    color: '$title',
    fontSize: '$md',
    lineHeight: '160%',
  },

  button: {
    width: '100%',
    marginTop: '2rem',
    padding: '1.25rem 0',

    border: 'none',
    borderRadius: 8,
    background: '$highlight',

    color: '$shape',
    fontSize: '$md',
    fontWeight: 'bold',

    transition: 'background-color 0.2s',

    '&:hover': {
      background: '$highlightSelected',
    },
  }
});
