import React from 'react';
import {useDispatch} from 'react-redux';
import {search} from './redux/reducer';

export const SearchComponent = () => {
  const dispatch = useDispatch();
  const inc = ({target}) => dispatch(search(target.value));

  return (
    <div>
      <input onChange={inc} />
    </div>
  );
};
