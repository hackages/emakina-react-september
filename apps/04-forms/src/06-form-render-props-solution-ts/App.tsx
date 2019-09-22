import React, {FC} from 'react';
import {Form, Field, Formik, FieldProps} from 'formik';

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

const requiredEmail = (value: string) => {
  const emailRegex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return !emailRegex.test(String(value).toLowerCase()) && 'Invalid email';
};

const requiredField = (value: string) => !value && 'Required';

const CustomInput: FC<
  FieldProps & {error?: string; labelText: string; required: boolean}
> = ({field, error, labelText, required}) => {
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

type dataType = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
};

export const App: FC = () => {
  const onSubmit = (data: dataType) => alert(JSON.stringify(data));
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
