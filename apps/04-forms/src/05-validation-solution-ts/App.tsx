import React, {FC} from 'react';
import {Form, Field, Formik, FieldProps, FormikErrors} from 'formik';

const requiredField = (value: string) => !value && 'Required';

type dataType = {
  lastName: string;
};

const CustomInput: FC<FieldProps & {errors: FormikErrors<string>}> = ({
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
  const onSubmit = (data: dataType) => alert(JSON.stringify(data));

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
