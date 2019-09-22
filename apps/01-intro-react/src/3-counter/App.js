import React, {useState} from 'react';

const Counter = () => {
  // TODO 1: initialize the state with an object containing a "value" property
  const value = 0;

  // TODO 2: implement the increment and decrement function

  return (
    <div>
      {/* TODO 3: Attach the increment and decrement functions to the on click
      Events of the buttons */}
      <button>-</button>
      {value}
      <button>+</button>
    </div>
  );
};

export const App = () => {
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
      {/** TODO: Use the Counter component**/}
    </div>
  );
};
