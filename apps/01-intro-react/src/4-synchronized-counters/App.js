import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const decrement = () => {
    setValue(value - 1);
  };

  const increment = () => {
    setValue(value + 1);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      {value}
      <button onClick={increment}>+</button>
    </div>
  );
};

// TODO:
// Synchronize all the counters rendered in the App component
// by lifiting their state to the App component
export const App = () => {
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
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};
