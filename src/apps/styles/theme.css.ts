import { createTheme } from '@vanilla-extract/css';

export const [themeClass, token] = createTheme({
  colors: {
    primary: '#448EE4',
    onPrimary: '#FFF',
  },
});
