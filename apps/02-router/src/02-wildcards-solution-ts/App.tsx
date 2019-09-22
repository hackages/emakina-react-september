import React, {FC} from "react";
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

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/:name" component={About}/>
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

type AboutProps = {
    match: {
        params: {
            name: string
        }
    }
}

const About: FC<AboutProps> = ({match: {params: {name}}}) => (
  <div>
    <h1>Hello {name}!</h1>
    <Link to="/">Go back</Link>
  </div>
);
