import React, { useState, useEffect } from "react";

const useFetchCarDetail = id => {
  // TODO: fetch the endpoint http://localhost:7000/cars/id
  // keep the reponse in a state
  // return the loading and the car data to the component

  return {
    loading: true,
    car: null
  };
};

export const CarDetails = ({ id }) => {
  const { loading, car } = useFetchCarDetail(id);
  return loading ? (
    <h1>Loading car {id}...</h1>
  ) : (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      }}
    >
      <img alt={`${car.model}`} src={car.img} />
      <p>
        {car.model} made by {car.manufacturer}, starting at {car.price}€
      </p>
    </div>
  );
};
