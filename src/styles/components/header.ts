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
    position: 'relative',
    
    padding: 12,

    color: '$icon',
    borderRadius: 6,
    cursor: 'pointer',
    backgroundColor: '$element',
    
    transition: 'all 0.2s',
    
    '&:hover': {
      color: '$text',
      backgroundColor: '#27272C',
      // filter: 'brightness(1.5)',
    },

    div: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      position: 'absolute',
      top: '-8px',
      right: '-8px',

      width: '1.75rem',
      height: '1.75rem',
      
      color: '$shape',
      fontWeight: 'bold',

      borderRadius: '50%',
      border: '3px solid $background',
      backgroundColor: '$highlight',
    },
  }
});