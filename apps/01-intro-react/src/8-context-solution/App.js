import React, {createContext, useContext, useState} from 'react';

const NameContext = createContext({
  name: 'hello',
  changeName: () => {}
});

const Family = () => (
  <div>
    <Person />
  </div>
);

const Person = () => {
  const {name, changeName} = useContext(NameContext);
  return (
    <div>
      <h2>{name}</h2>
      <button onClick={changeName}>Change</button>
    </div>
  );
};

export const App = () => {
  const [name, setName] = useState('JavaScript');

  const changeName = () => {
    setName('react');
  };

  return (
    <NameContext.Provider value={{name, changeName}}>
      <div>
        <Family />
      </div>
    </NameContext.Provider>
  );
};
