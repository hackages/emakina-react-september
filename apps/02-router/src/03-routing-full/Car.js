import React from "react";
import { Link } from "react-router-dom";

export const Car = ({ id, img, manufacturer, model, price }) => (
  <>
    {/** Wrap the next Line in a Link that points to /:id **/}
    {model} made by {manufacturer}
  </>
);
