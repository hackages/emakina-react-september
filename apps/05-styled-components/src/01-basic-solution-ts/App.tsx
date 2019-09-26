import React from 'react';
import styled from 'styled-components';

// FIRST VERSION

const StyledSection = styled.section`
  padding: 4em;
  background: tomato;
`;

const StyledTitle = styled.h1`
  font-size: 2em;
  text-align: center;
  color: blue;
`;

export const App = () => {
  return (
    <StyledSection>
      <StyledTitle>Hello World</StyledTitle>
    </StyledSection>
  );
};

// SECOND VERSION

const StyledApp = styled.section`
  padding: 4em;
  background: tomato;

  h1 {
    font-size: 2em;
    text-align: center;
    color: blue;
  }
`;

export const App2 = () => (
  <StyledApp>
    <h1>HelloWorld</h1>
  </StyledApp>
);
