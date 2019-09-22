import React, { createContext, FC, useContext, useState } from "react";

const NameContext = createContext({
  name: "hello",
  changeName: () => {}
});

const Family: FC = () => (
  <div>
    <Person />
  </div>
);

const Person: FC = () => {
  const { name, changeName } = useContext(NameContext);
  return (
    <div>
      <h2>{name}</h2>
      <button onClick={changeName}>Change</button>
    </div>
  );
};

export const App: FC = () => {
  const [name, setName] = useState("JavaScript");

  const changeName = () => {
    setName("react");
  };

  return (
    <NameContext.Provider value={{ name, changeName }}>
      <div>
        <Family />
      </div>
    </NameContext.Provider>
  );
};
