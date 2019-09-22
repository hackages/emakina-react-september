import React from 'react';
import {useSelector} from 'react-redux';

export const DisplaySearch = () => {
  const text = useSelector(state => state.reducer.search);

  return <p>You entered the following text: {text}</p>;
};
