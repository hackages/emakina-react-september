import React from 'react';
import {useDispatch} from 'react-redux';
import {increment, decrement} from './redux/reducer';

export const Button= () => {
  const dispatch = useDispatch();
  const inc = () => dispatch(increment());
  const dec = () => dispatch(decrement());
  return (
    <div>
      <button onClick={dec}>-</button>
      <button onClick={inc}>+</button>
    </div>
  );
};
