import React, { ChangeEvent, FC, useState } from "react";

export const App: FC = () => {
  const [firstname, setFirstname] = useState("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstname(e.target.value);
  };

  return (
    <div className="wrapper flex fxcolumn">
      <input type="text" value={firstname} onChange={handleNameChange} />
      <p>My name is {firstname}</p>
    </div>
  );
};
