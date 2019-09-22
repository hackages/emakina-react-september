import React, {FC, useState} from "react";
import {BrowserRouter, Link, Redirect, Route, Switch} from "react-router-dom";


export const App: FC = () => {
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
                <Switch>
                <Route exact path="/" component={Home}/>
                <ProtectedRoute
                    path="/profile"
                    authenticated={authenticated}
                    component={Profile}
                />
                <Route
                    path="/not-logged-in"
                    component={NotLoggedIn}
                />
                </Switch>
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


type ProtectedRouteProps = {
    authenticated: boolean,
    component: React.ComponentType,
    path: string
}
export const ProtectedRoute: FC<ProtectedRouteProps> = ({authenticated, component: Component, ...rest}) =>
    authenticated ?
        <Route {...rest} component={Component}/>
        :
        <Redirect to="/not-logged-in"/>;
