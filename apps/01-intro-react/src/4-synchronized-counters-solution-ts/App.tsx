import React, { useState, FC } from "react";

type CounterProps = {
  value: number;
  increment: VoidFunction;
  decrement: VoidFunction;
};

const Counter: FC<CounterProps> = ({ value, increment, decrement }) => {
  return (
    <div>
      <button onClick={decrement}>-</button>
      {value}
      <button onClick={increment}>+</button>
    </div>
  );
};

export const App: FC = () => {
  const [value, setValue] = useState(0);

  const decrement: VoidFunction = () => {
    setValue(value - 1);
  };

  const increment: VoidFunction = () => {
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
