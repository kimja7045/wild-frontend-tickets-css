import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  colors: {
    primary: '#448EE4',
    onPrimary: '#FFF',
  },
});
