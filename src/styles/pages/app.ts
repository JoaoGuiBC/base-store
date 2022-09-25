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
