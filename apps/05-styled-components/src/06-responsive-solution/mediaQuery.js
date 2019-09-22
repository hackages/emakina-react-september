import { css } from 'styled-components';

export const sizes = {
  xl: 1075,
  lg: 992,
  md: 768,
  sm: 576,
  xs: 330,
  all: 0
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
