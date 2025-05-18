import { style } from '@vanilla-extract/css';
import { token } from '../../apps/styles/theme.css';

export const buttonStyle = style({
  width: '100%',
  padding: '1rem',
  border: '1px solid #CCC',
  borderRadius: '.4rem',
  backgroundColor: token.colors.primary,
  color: token.colors.onPrimary,
  fontSize: '1.6rem',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      borderColor: '#999',
    },
  },
});
