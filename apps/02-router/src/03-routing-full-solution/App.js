import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import { Cars } from "./Cars";
import { CarDetails } from "./CarDetails";

export const App = () => {
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
        <h2>
          <Link to="/">Home</Link>
        </h2>
        <Route exact path="/" component={Cars} />
        <Route
          path="/:id"
          render={({
            match: {
              params: { id }
            }
          }) => {
            return <CarDetails id={id} />;
          }}
        />
      </div>
    </BrowserRouter>
  );
};
