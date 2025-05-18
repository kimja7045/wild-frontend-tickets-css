import { createTheme } from '@vanilla-extract/css';

import { vars } from './contract.css';

export const darkThemeClass = createTheme(vars, {
  colors: {
    primary: '#000',
    onPrimary: '#FFF',
  },
});
