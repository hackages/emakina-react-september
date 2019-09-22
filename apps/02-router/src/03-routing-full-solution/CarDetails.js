import React, { useState, useEffect } from "react";

const useFetchCarDetail = id => {
  const [loading, setLoading] = useState(true);
  const [car, setCar] = useState(null);
  useEffect(() => {
    let isMounted = true;
    fetch("http://localhost:7000/cars/" + id)
      .then(res => res.json())
      .then(car => {
        if (isMounted) {
          setLoading(false);
          setCar(car);
        }
      });
    return () => {
      isMounted = true;
    };
  }, [id, setLoading, setCar]);
  return {
    loading,
    car
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
