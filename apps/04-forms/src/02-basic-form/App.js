import React, { useState } from "react";

export const App = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");

  // TODO: create a function to handle the inputs changes

  // TODO: create a function to handle the form submit

  return (
    <div className="wrapper flex fxcolumn">
      {/* TODO: wrap the inputs in a form and bind OnSubmit to the submit function */}
      <div>
        <label htmlFor="firstname">FirstName</label>
        <input
          name="firstname"
          value={firstname}
          type="text"
          // TODO: add the OnChange handler function
        />
      </div>
      <div>
        <label htmlFor="lastname">LastName</label>
        <input
          name="lastname"
          value={lastname}
          type="text"
          // TODO: add the OnChange handler function
        />
      </div>
      {/* TODO: create a button of type "submit". You can also give him a disabled prop 
          that will check user inputs before allowing submit */}
    </div>
  );
};
