import React, {useState, FC} from 'react';
import styled, {ThemeProvider} from 'styled-components';

const lightTheme = {
  primary: 'white',
  text: 'black'
};

const darkTheme = {
  primary: 'black',
  text: 'white'
};

export const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Main toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

const StyledContainer = styled.div`
  background: ${props => props.theme.primary};
  height: 100vh;
  width: 100%;
`;

const StyledTitle = styled.h2`
  color: ${props => props.theme.text};
`;

type MainProps = {
  toggleTheme: () => void
}

const Main: FC<MainProps> = ({toggleTheme}) => (
  <StyledContainer>
    <StyledTitle>Hello There</StyledTitle>
    <button onClick={toggleTheme}>Change theme</button>
  </StyledContainer>
);
