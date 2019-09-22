import React from 'react';
import {useSelector} from 'react-redux';

export const Counter = () => {
  const count = useSelector(state => state.reducer.counter);
  return <p>Counter: {count}</p>;
};
