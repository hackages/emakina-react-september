import React from 'react';
import {useSelector} from 'react-redux';
import {AppState} from './redux/store';

export const Counter: React.FC = () => {
  const count = useSelector<AppState, number>(state => state.reducer.counter);
  return <p>Counter: {count}</p>;
};
