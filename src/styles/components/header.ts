import { styled } from "..";

export const HeaderContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',

  width: '100%',
  maxWidth: 1180,

  margin: '0 auto',
  padding: '1rem 0',

  variants: {
    page: {
      other: {
        justifyContent: 'space-between',
      },
      success: {
        justifyContent: 'center',
      }
    }
  },

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