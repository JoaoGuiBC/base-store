import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  alignItems: 'flex-start',
  justifyContent: 'center',

  minHeight: '100vh',
});

export const Header = styled('div', {
  width: '100%',
  maxWidth: 1180,

  margin: '0 auto',
  padding: '1rem 0',
});
