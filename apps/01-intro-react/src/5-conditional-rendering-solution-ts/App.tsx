import React, { FC } from "react";

const getRandom = (): number => Math.ceil(Math.random() * 10);

type isEvenFunction = (n: number) => boolean;

const isEven: isEvenFunction = n => n % 2 === 0;

export const App: FC = () => {
  const number = getRandom();
  return (
    <div>
      {isEven(number) ? <h1>{number} is even</h1> : <h1>{number} is odd</h1>}
    </div>
  );
};
