import React from "react";

const getRandom = () => Math.ceil(Math.random() * 10);

const isEven = n => n % 2 === 0;

export const App = () => {
  const number = getRandom();
  return (
    <div>
      {isEven(number) ? <h1>{number} is even</h1> : <h1>{number} is odd</h1>}
    </div>
  );
};
