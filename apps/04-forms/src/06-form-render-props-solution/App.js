import React from 'react';
import {Field, Form, Formik} from 'formik';

const FIRSTNAME_LABEL = 'First Name';
const LASTNAME_LABEL = 'Last Name';
const EMAIL_LABEL = 'Email';
const AGE_LABEL = 'Age';

const initialValues = {
  firstName: 'John',
  lastName: '',
  email: '',
  age: 0
};

const requiredEmail = (value) => {
  const emailRegex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return !emailRegex.test(String(value).toLowerCase()) && 'Invalid email';
};

const requiredField = (value) => !value && 'Required';

const CustomInput = ({field, error, labelText, required}) => {
  return (
    <div>
      <label>
        {labelText}
        {required && '*'}
      </label>
      <input {...field} className={error ? 'error' : ''} />
      <span className="error-text">{!!error && error}</span>
    </div>
  );
};

export const App = () => {
  const onSubmit = (data) => alert(JSON.stringify(data));
  return (
    <div className="wrapper flex">
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({dirty, values, errors}) => (
          <Form>
            <Field
              component={CustomInput}
              labelText={FIRSTNAME_LABEL}
              name="firstName"
              validate={requiredField}
              type="text"
              required
              error={errors.firstName}
            />
            <Field
              component={CustomInput}
              labelText={LASTNAME_LABEL}
              name="lastName"
              validate={requiredField}
              type="text"
              required
              error={errors.lastName}
            />
            <Field
              component={CustomInput}
              labelText={EMAIL_LABEL}
              name="email"
              required
              type="email"
              validate={requiredEmail}
              error={errors.email}
            />
            <Field
              component={CustomInput}
              labelText={AGE_LABEL}
              name="age"
              required
              type="number"
              validate={requiredField}
              error={errors.age}
            />
            <button
              type="submit"
              disabled={!dirty || !!Object.keys(errors).length}
            >
              Submit
            </button>
            <div>Invalid Fields : {Object.entries(errors).length}</div>
            <ul>
              {Object.values(values)
                .filter(Boolean)
                .map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
            </ul>
          </Form>
        )}
      />
    </div>
  );
};
