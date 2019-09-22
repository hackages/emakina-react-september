import React, { FC } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import { Cars } from "./Cars";
import { CarDetails } from "./CarDetails";

export interface CarItem {
  id: string;
  img: string;
  manufacturer: string;
  model: string;
  price: number;
}
export const App: FC = () => {
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
