import { style } from '@vanilla-extract/css';

export const buttonStyle = style({
  width: '100%',
  padding: '1rem',
  border: '1px solid #CCC',
  borderRadius: '.4rem',
  backgroundColor: '#448EE4',
  color: '#FFF',
  fontSize: '1.6rem',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      borderColor: '#999',
    },
  },
});
