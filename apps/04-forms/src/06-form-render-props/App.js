import React from 'react';
import {Form, Field, Formik} from 'formik';

const FIRSTNAME_LABEL = 'First Name';
const LASTNAME_LABEL = 'Last Name';
const EMAIL_LABEL = 'Email';
const AGE_LABEL = 'Age';

const initialValues = {
  firstName: 'John'
};

const requiredEmail = value => {
  const emailRegex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return !emailRegex.test(String(value).toLowerCase()) && 'Invalid email';
};

const requiredField = value => !value && 'Required';

const CustomInput = ({input, error, labelText, required}) => {
  return (
    <div>
      <label>
        {labelText}
        {required && '*'}
      </label>
      <input {...input} className={!!error ? 'error' : ''} />
      <span className="error-text">{!!error && error}</span>
    </div>
  );
};

export const App = () => {
  const onSubmit = data => alert(JSON.stringify(data));
  return (
    <div className="wrapper flex">
      {/* TODO: initiate the form with the initialValues object */}
      <Formik
        onSubmit={onSubmit}
        render={() => (
          <Form>
            <Field
              component={CustomInput}
              labelText={FIRSTNAME_LABEL}
              name="firstName"
              validate={requiredField}
              type="text"
              required
            />
            <Field
              component={CustomInput}
              labelText={LASTNAME_LABEL}
              name="lastName"
              validate={requiredField}
              type="text"
              required
            />
            <Field
              component={CustomInput}
              labelText={EMAIL_LABEL}
              name="email"
              type="email"
              validate={requiredEmail}
              required
            />
            <Field
              component={CustomInput}
              labelText={AGE_LABEL}
              name="age"
              type="number"
              validate={requiredField}
              required
            />
            {/* TODO: Disable the button when the user has not touched the form yet or when at least 1 field is invalid
             */}
            <button type="submit">Submit</button>
            {/* TODO: Display the number of fields that are invalid */}
            <div>Invalid Fields: </div>
            {/* TODO: Display a list of all the fields that have a value */}
            <p>Completed Fields:</p>
            <ul>list here</ul>
          </Form>
        )}
      />
    </div>
  );
};
