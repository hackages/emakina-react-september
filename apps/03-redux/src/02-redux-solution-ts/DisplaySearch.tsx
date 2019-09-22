import React from 'react';
import {useSelector} from 'react-redux';
import {AppState} from './redux/store';

export const DisplaySearch = () => {
  // TODO Get the text from the redux store
  const text = useSelector<AppState, string>(state => state.reducer.search);

  return <p>You entered the following text: {text}</p>;
};
