import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  position: 'relative',

  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',

  marginLeft: 'auto',
});

export const Product = styled('div', {
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: 8,
  overflow: 'hidden',
  color: '$title',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',

  img: {
    objectFit: 'cover',
    cursor: 'pointer',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    padding: '1.25rem',

    borderRadius: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
    },

    strong: {
      fontSize: '$lg',
    },

    span: {
      fontSize: '$lg',
      fontWeight: 'bold',
      color: '$highlightSelected',
    },

    button: {
      padding: '0.75rem',
      
      border: 'none',
      color: '$shape',
      borderRadius: 6,
      cursor: 'pointer',
      backgroundColor: '$highlight',

      transition: 'background 0.2s',

      '&:hover': {
        backgroundColor: '$highlightSelected',
      },
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
});

export const SlideButton = styled('button', {
  position: 'absolute',
  top: 0,
  bottom: 0,

  width: '8rem',

  opacity: 0.8,
  border: 'none',
  cursor: 'pointer',

  transition: 'all 0.2s ease-in-out',

  svg: {
    color: '$title',
  },

  '&:hover': {
    opacity: 1,
  },
  '&:disabled': {
    opacity: 0,
    visibility: 'hidden',
  },

  variants: {
    direction: {
      right: {
        right: 0,
        background: 'linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.85) 100%)',
      },
      left: {
        left: 0,
        background: 'linear-gradient(90deg, rgba(18, 18, 20, 0.85) 0%, rgba(18, 18, 20, 0) 100%)',
      },
    },
  },
});
