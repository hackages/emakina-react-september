import React, {useState} from "react";
import {BrowserRouter, Link, Redirect, Route, Switch} from "react-router-dom";


export const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <div>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <button onClick={() => setAuthenticated(!authenticated)}>{authenticated ? 'LOGOUT' : 'LOGIN'}</button>
        </div>
        {
          /*
          TODO: Here define 3 routes:
            - '/' will render the Home component
            - '/profile' will render the Profile component, but the user can only access it when he's logged in
            - '/not-logged-in' will be the route rendered when the user tries to access the profile page when he's not authenticated

           */
        }
      </div>
    </BrowserRouter>
  );
};

const Home = () => (
  <div><h1>Hello there</h1></div>
);

const Profile = () => (
  <div><h1>Profile page</h1></div>
);

const NotLoggedIn = () => (
  <div>
    <h1>Not logged in page</h1>
  </div>
);



/*
 * This component should return
 * a <Redirect /> if the user isnt authenticated
 *
 * (redirecting to /not-logged-in)
 *
 * or a <Route /> with the component we give it
 *
 * The route your return  should keep its props like path, exact, ..
 */
export const ProtectedRoute = ({authenticated, component: Component, ...rest}) => null
