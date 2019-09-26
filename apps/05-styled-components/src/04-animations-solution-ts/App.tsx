import React from 'react';
import styled, {keyframes} from 'styled-components';

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

type DotProps = {
  delay: string
}

const Dot = styled.div<DotProps>`
  background-color: black;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  animation: ${BounceAnimation} 0.5s ease-in-out infinite;
  animation-delay: ${props => props.delay};
`;

export const App = () => {
  return (
    <CenterWrapper>
      <DotWrapper>
        <Dot delay="0s" />
        <Dot delay=".1s" />
        <Dot delay=".2s" />
      </DotWrapper>
    </CenterWrapper>
  );
};
