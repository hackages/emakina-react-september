import React from 'react';
import {Counter} from './Counter';
import {Button} from './Button';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {SearchComponent} from './SearchComponent';
import {DisplaySearch} from './DisplaySearch';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};
