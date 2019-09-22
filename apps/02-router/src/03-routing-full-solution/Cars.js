import React, { useState } from "react";
import { Car } from "./Car";

const useFetchCars = () => {
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState();

  useEffect(() => {
    let isMounted = true;
    fetch("http://localhost:7000/cars")
      .then(res => res.json())
      .then(carsResponse => {
        if (isMounted) {
          setCars(carsResponse);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [setLoading, setCars]);

  return {
    loading: true,
    car: []
  };
};
export const Cars = () => {
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
