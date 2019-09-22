import React from 'react';
import {Formik, Form, Field} from 'formik';

type dataType = {
  firstName: string;
};

export const App = () => {
  const onSubmit = (data: dataType) => alert(JSON.stringify(data));

  return (
    <div className="wrapper flex">
      <Formik
        onSubmit={onSubmit}
        initialValues={{firstName: ''}}
        render={() => (
          <Form>
            <div>
              <label>First Name</label>
              <Field name="firstName" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      />
    </div>
  );
};
