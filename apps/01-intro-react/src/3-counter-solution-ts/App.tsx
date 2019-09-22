import React, {FC, useState} from 'react';

const Counter: FC = () => {
  const [value, setValue] = useState(0);

  const decrement: VoidFunction = () => {
    setValue(value - 1);
  };

  const increment: VoidFunction = () => {
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

export const App: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <h1>Im a component!</h1>
      <Counter />
    </div>
  );
};
