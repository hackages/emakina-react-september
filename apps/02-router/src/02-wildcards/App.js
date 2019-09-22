import React from "react";
import {BrowserRouter, Link} from "react-router-dom";
import {Route, Switch} from "react-router";

// TODO: Define a route to render the about component and make all the links in the Home component work
// You need to only define one route

// TODO: In the About component get the name passed in the url and display it

export const App = () => {
  return (
    <BrowserRouter>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
      >

        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  )
};

const Home = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }}>
    <h1>Click on one of the links!</h1>
    <Link to="/ronald">RONALD</Link>
    <Link to="/iggy">IGGY</Link>
    <Link to="/charles">CHARLES</Link>
    <Link to="/karla">KARLA</Link>
    <Link to="/rick">RICK</Link>
    <Link to="/olga">OLGA</Link>
    <Link to="/louis">LOUIS</Link>
    <Link to="/laura">LAURA</Link>
  </div>
);

const About = () => {
  const name = 'GET ME FROM THE URL';
  return (
    <div>
      <h1>Hello {name}!</h1>
      <Link to="/">Go back</Link>
    </div>
  )
};
