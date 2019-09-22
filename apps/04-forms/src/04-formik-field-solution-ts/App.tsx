import React, {FC} from 'react';
import {Form, Field, Formik, FieldProps} from 'formik';

type dataType = {
  firstName: string;
  message: string;
};

type customInputProps = {
  color?: string;
};

const customInput: FC<FieldProps & customInputProps> = ({color, field}) => (
  <input {...field} style={{color: color}} />
);
export const App = () => {
  const onSubmit = (data: dataType) => alert(JSON.stringify(data));

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
              render={({field}: FieldProps) => (
                <div>
                  <label>Message</label>
                  <textarea {...field} />
                </div>
              )}
            />
            <Field name="company" type="text">
              {({field}: FieldProps) => (
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
