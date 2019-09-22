import React, { useState } from "react";

export const App = () => {
  const [firstname, setFirstname] = useState("");

  const handleNameChange = (e) => {
    setFirstname(e.target.value);
  };

  return (
    <div className="wrapper flex fxcolumn">
      <input type="text" value={firstname} onChange={handleNameChange} />
      <p>My name is {firstname}</p>
    </div>
  );
};
