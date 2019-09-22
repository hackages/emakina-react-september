import React, { FC } from "react";
import { Link } from "react-router-dom";
import { CarItem } from "./App";

export const Car: FC<CarItem> = ({ id, img, manufacturer, model }) => (
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
