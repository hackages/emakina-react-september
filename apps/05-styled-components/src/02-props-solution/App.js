import React from 'react';
import styled from 'styled-components';

// FIRST EXERCISE

const StyledTitle = styled.h3`
  font-size: ${props => {
    if (props.big) return 100;
    if (props.medium) return 50;
    return 10;
  }}px;
`;

export const App = () => {
  return (
    <div>
      <StyledTitle big>First title</StyledTitle>
      <StyledTitle medium>Second title</StyledTitle>
      <StyledTitle>Third title</StyledTitle>
    </div>
  );
};

// SECOND EXERCISE

const StyledTitle2 = styled.h3`
  font-size: ${props => {
    if (props.big) return 100;
    if (props.medium) return 50;
    return 10;
  }}px;
  background: ${props => props.color};
`;

export const App2 = () => {
  return (
    <div>
      <StyledTitle2 big color={'tomato'}>
        First title
      </StyledTitle2>
      <StyledTitle2 medium color={'blue'}>
        Second title
      </StyledTitle2>
      <StyledTitle2 color={'purple'}>Third title</StyledTitle2>
    </div>
  );
};
