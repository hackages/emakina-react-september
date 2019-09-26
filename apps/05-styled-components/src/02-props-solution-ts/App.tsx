import React from 'react';
import styled from 'styled-components';

// FIRST EXERCISE

type StyledTitleProps = {
  big?: boolean,
  medium?: boolean
}

const StyledTitle = styled.h3<StyledTitleProps>`
  font-size: ${props => {
    if (props.big) return 100;
    if (props.medium) return 50;
    return 10;
  }}px;
`;

export const App2 = () => {
  return (
    <div>
      <StyledTitle big>First title</StyledTitle>
      <StyledTitle medium>Second title</StyledTitle>
      <StyledTitle>Third title</StyledTitle>
    </div>
  );
};

// SECOND EXERCISE

type StyledTitle2Props = StyledTitleProps & {
  color: string
}

const StyledTitle2 = styled.h3<StyledTitle2Props>`
  font-size: ${props => {
    if (props.big) return 100;
    if (props.medium) return 50;
    return 10;
  }}px;
  background: ${props => props.color};
`;

export const App = () => {
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
