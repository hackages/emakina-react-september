import React from 'react';
import {Formik, Field, Form} from 'formik';

const customInput = ({field}) => <></>;
export const App = () => {
  const onSubmit = data => alert(JSON.stringify(data));

  return (
    <div className="wrapper flex">
      <Formik
        onSubmit={onSubmit}
        render={() => (
          <Form>
            {/* // */}
            {/* TODO: Convert the following input and label into a Field using the customInput component as a COMPONENT prop */}
            <div>
              <label>First Name</label>
              <input name="firstName" type="text" style={{color: 'red'}} />
            </div>
            {/* // */}

            {/* TODO: Convert the following input and label into a Field using the RENDER function */}
            <div>
              <label>Message</label>
              <textarea name="message" />
            </div>

            {/* TODO: Convert the following input and label into a Field using the CHILDREN prop */}
            <div>
              <label>Company</label>
              <input type="text" placeholder="Company" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      />
    </div>
  );
};
