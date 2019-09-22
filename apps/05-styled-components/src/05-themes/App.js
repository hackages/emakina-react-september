import React, {useState} from 'react';
const LIGHT = 'light';
const DARK = 'dark';

// Create a lightTheme object and a darkTheme object
// They both need to have a primary and a textColor property, which are just color in strings

const lightTheme = {};

const darkTheme = {};

export const App = () => {
  const [theme, setTheme] = useState(LIGHT);

  const toggleTheme = () => setTheme(theme === LIGHT ? DARK : LIGHT);

  // Use a ThemeProvider and pass it the theme
  return (
    <div>
      <Main toggleTheme={toggleTheme} />
    </div>
  );
};

//This component will receive a function to change the theme
//Create a styled div that will set the background to the primary from the background
//Create a styled h2 that will set the color to the textColor from the theme
const Main = () => {
  return <div />;
};
