import React, { useReducer } from "react";

const useForm = () => {
  const [state, setState] = useReducer(
    (state, action) => ({ ...state, ...action }),
    { firstName: "", lastName: "" }
  );

  const handleInputChange = ({target: { name, value }}) => {
    setState({ [name]: value });
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    alert(JSON.stringify(state));
  };

  return {
    state,
    handleInputChange,
    handleSubmit
  };
};
export const App = () => {
  const { state, handleInputChange, handleSubmit } = useForm();

  const { firstName, lastName } = state;
  return (
    <div className="wrapper flex fxcolumn">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            value={firstName}
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            value={lastName}
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <button disabled={firstName === "" || lastName === ""} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
