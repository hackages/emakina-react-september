import React from 'react';
import {Counter} from './Counter';
import {Button} from './Button';
import {SearchComponent} from './SearchComponent';
import {DisplaySearch} from './DisplaySearch';

export const App = () => {
  return (
    // TODO: Wrap the App inside Redux. You can use Provider from react redux for that
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <Counter />
      <Button />
      <SearchComponent />
      <DisplaySearch />
    </div>
  );
};
