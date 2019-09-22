import React from "react";
import { Car } from "./Car";

const useFetchCars = () => {
  // TODO: fetch the endpoint http://localhost:7000/cars
  // keep the reponse in a state
  // return the loading and the cars data to the component

  return {
    loading: true,
    car: []
  };
};

export const Cars = () => {
  const { loading, cars } = useFetchCars();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100%"
      }}
    >
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        cars.map(car => <Car {...car} key={car.id} />)
      )}
    </div>
  );
};
