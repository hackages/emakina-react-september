import React from "react";
import {BrowserRouter, Link} from "react-router-dom";
import {Route, Switch} from "react-router";

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
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  )
};

const Home = () => (
  <h1>I am the Home Component</h1>
);

const About = () => (
  <h1>I am the About page!</h1>
);
