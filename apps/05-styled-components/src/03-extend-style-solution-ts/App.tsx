import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
`;

const InputDefault = styled.input`
  margin: 16px 0;
  border-radius: 4px;
  width: 360px;
  height: 32px;
  outline: none;
  padding: 0 10px;
  border: 1px solid #b7bbba;
  background: white;
  transition: all 0.3s ease-in-out;
  position: relative;
  &:focus {
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15);
  }
`;

const StyledInput = styled(InputDefault)`
  &:focus {
    border: 1px solid red;
    transition: all 0.2s ease-in-out;
  }
`;

const DisabledInput = styled(InputDefault)`
  background: #f9f9f9;
  cursor: not-allowed;
  opacity: 0.5;
`;
const InputLogoContainer = styled.div`
  position: relative;
  i {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 24px;
    right: 12px;
    color: #b7bbba;
  }
`;

const InputLogo = styled(StyledInput)`
  &:focus {
    border-color: lightblue;
    color: lightblue;
    &::placeholder {
      color: lightblue;
    }
  }
  &:focus ~ i {
    color: lightblue;
    transition: all 0.2s ease-in-out;
  }
`;

export const App = () => {
  return (
    <StyledSection>
      <InputDefault placeholder="default input" />
      <StyledInput placeholder="styled input" />
      <DisabledInput placeholder="disabled input" disabled />
      <InputLogoContainer>
        <InputLogo placeholder="awesome input" />
        <i className="fas fa-search" />
      </InputLogoContainer>
    </StyledSection>
  );
};
