import React, {useState} from 'react';

const Family = ({name, changeName}) => (
  <div>
    <Person name={name} changeName={changeName} />
  </div>
);

const Person = ({name, changeName}) => {
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
    <div>
      <Family name={name} changeName={changeName} />
    </div>
  );
};
