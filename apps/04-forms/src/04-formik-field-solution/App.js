import React from 'react';
import {Form, Field, Formik} from 'formik';

const customInput = ({color, field}) => (
  <input {...field} style={{color: color}} />
);
export const App = () => {
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div className="wrapper flex">
      <Formik
        initialValues={{firstName: '', company: '', message: ''}}
        onSubmit={onSubmit}
        render={() => (
          <Form>
            <label>First Name</label>
            <Field
              name="firstName"
              component={customInput}
              type="text"
              color="red"
            />
            <Field
              name="message"
              render={({field}) => (
                <div>
                  <label>Message</label>
                  <textarea {...field} />
                </div>
              )}
            />
            <Field name="company" type="text">
              {({field}) => (
                <div>
                  <label>Company</label>
                  <input {...field} placeholder="Company" />
                </div>
              )}
            </Field>
            <button type="submit">Submit</button>
          </Form>
        )}
      />
    </div>
  );
};
