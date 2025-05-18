import { createTheme } from '@vanilla-extract/css';

import { vars } from './contract.css';

export const lightThemeClass = createTheme(vars, {
  colors: {
    primary: '#448EE4',
    onPrimary: '#FFF',
  },
});
