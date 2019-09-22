import React from "react";
import { Link } from "react-router-dom";

export const Car = ({ id, img, manufacturer, model, price }) => (
  <Link to={`/${id}`}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <img src={img} alt="" />
      {model} made by {manufacturer}
    </div>
  </Link>
);
