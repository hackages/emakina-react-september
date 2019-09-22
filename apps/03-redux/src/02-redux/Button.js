import React from 'react';

export const Button = () => {
  // TODO: implement the 2 functions.
  // TIP: They will both dispatch an action to redux
  const inc = () => {};
  const dec = () => {};
  return (
    <div>
      <button onClick={dec}>-</button>
      <button onClick={inc}>+</button>
    </div>
  );
};
