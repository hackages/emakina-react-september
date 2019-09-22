import React from 'react';
import styled from 'styled-components';
import {media} from './mediaQuery';

const ResponsiveContainer = styled.div`
  width: calc(100% - 32px);
  height: 400px;
  margin: 16px auto;
  position: relative;
  background: blue;
  h1 {
    width: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    color: white;
  }
  ${media.sm`
  background : red;
  h1{color: yellow;}`}
  ${media.md`
  background : violet;
  h1{color: purple;}`}
`;

export const App = () => {
  return (
    <ResponsiveContainer>
      <h1>Hello World, resize me ! </h1>
    </ResponsiveContainer>
  );
};
