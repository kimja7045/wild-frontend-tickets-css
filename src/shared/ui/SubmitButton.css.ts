import { style } from '@vanilla-extract/css';
import { vars } from '../../apps/styles/contract.css';

export const buttonStyle = style({
  width: '100%',
  padding: '1rem',
  border: '1px solid #CCC',
  borderRadius: '.4rem',
  backgroundColor: vars.colors.primary,
  color: vars.colors.onPrimary,
  fontSize: '1.6rem',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      borderColor: '#999',
    },
  },
});
