import { createStitches } from "@stitches/react";

export const {
  css,
  reset,
  theme,
  prefix,
  styled,
  config,
  keyframes,
  globalCss,
  getCssText,
  createTheme,
} = createStitches({
  media: {
    sm: '(max-width: 720px)',
    md: '(max-width: 1080px)',
  },
  theme: {
    colors: {
      shape: '#FFF',

      background: '#121214',
      element: '#202024',
      text: '#C4C4CC',
      title: '#E1E1E6',

      highlight: '#00875F',
      highlightSelected: '#00B37E',
    },
  },
});
