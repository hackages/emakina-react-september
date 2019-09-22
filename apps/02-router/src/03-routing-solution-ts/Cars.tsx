import React, { FC, useState, useEffect } from "react";
import { Car } from "./Car";
import { CarItem } from "./App";

type useFetchCarsHook = () => { loading: boolean; cars: CarItem[] };

const useFetchCars: useFetchCarsHook = () => {
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
    loading,
    cars
  };
};

export const Cars: FC = () => {
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
        cars.map((item: CarItem) => <Car {...item} key={item.id} />)
      )}
    </div>
  );
};
