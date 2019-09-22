import React from "react";
import {BrowserRouter, Link} from "react-router-dom";
import {Route, Switch} from "react-router";


// TODO: Implement a Router with 2 routes:
// '/' will display the Home component
// '/about' will display the About component

// TODO: Implement links so we can navigate to the pages

export const App = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}
    >
      <Home/>
      <About/>
    </div>
  )
};

const Home = () => (
  <h1>I am the Home Component</h1>
);

const About = () => (
  <h1>I am the About page!</h1>
);
