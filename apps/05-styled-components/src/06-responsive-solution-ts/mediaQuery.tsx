import { css, CSSObject } from 'styled-components';

export const sizes = {
  xl: 67,
  lg: 62,
  md: 48,
  sm: 36,
  xs: 20,
  all: 0
};

type Label = 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'all';

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[(label as Label)]}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {} as {[key: string]: (s: TemplateStringsArray | CSSObject) => any});
