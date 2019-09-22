import React from 'react';
import {Field, Form, Formik} from 'formik';

const requiredField = (value) => !value && 'Required';

const CustomInput = ({
                       field,
                       errors
                     }) => (
  <div>
    <label>Last Name*</label>
    <input {...field} />
    <span>{errors && errors}</span>
  </div>
);
export const App = () => {
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div className="wrapper flex">
      <Formik
        initialValues={{lastName: ''}}
        onSubmit={onSubmit}
        render={({errors}) => (
          <Form>
            <Field
              name="lastName"
              type="text"
              component={CustomInput}
              validate={requiredField}
              errors={errors.lastName}
            />
            {console.log(errors)}
            <button type="submit">Submit</button>
          </Form>
        )}
      />
    </div>
  );
};
