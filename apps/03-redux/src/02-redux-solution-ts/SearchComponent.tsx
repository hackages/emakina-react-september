import React from 'react';
import {useDispatch} from 'react-redux';
import {search} from './redux/reducer';

type IncFunc = ({target}: {target: {value: string}}) => void;

export const SearchComponent: React.FC = () => {
  // TODO: implement the search function
  // TIP: it will dispatch an action to redux with the value of the field in the params
  const dispatch = useDispatch();
  const inc: IncFunc = ({target}) => dispatch(search(target.value));

  return (
    <div>
      <input onChange={inc} />
    </div>
  );
};
