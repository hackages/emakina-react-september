import React, { useState } from "react";

const Counter = ({ value, increment, decrement }) => {
  return (
    <div>
      <button onClick={decrement}>-</button>
      {value}
      <button onClick={increment}>+</button>
    </div>
  );
};

export const App = () => {
  const [value, setValue] = useState(0);

  const decrement = () => {
    setValue(value - 1);
  };

  const increment = () => {
    setValue(value + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <Counter increment={increment} decrement={decrement} value={value} />
      <Counter increment={increment} decrement={decrement} value={value} />
      <Counter increment={increment} decrement={decrement} value={value} />
    </div>
  );
};
