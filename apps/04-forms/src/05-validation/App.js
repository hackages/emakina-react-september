import React from 'react';
import {Form, Field, Formik} from 'formik';

// Create a validation function that return a string containing an error message only if the value is not empty.
// You'll need to assign that validation function to the Field

const CustomInput = ({field, errors}) => {
  // Find a way to display the error message returned by the validation function
  // HINT: you can console.log the errors to find useful values
  return (
    <div>
      <label>Last Name*</label>
      <input {...field} />
    </div>
  );
};

export const App = () => {
  const onSubmit = data => alert(JSON.stringify(data));

  return (
    <div className="wrapper flex">
      <Formik
        onSubmit={onSubmit}
        render={() => (
          <Form>
            <Field
              name="lastName"
              component={CustomInput}
              type="text"
              validate=""
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      />
    </div>
  );
};
