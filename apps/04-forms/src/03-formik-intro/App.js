import React from 'react';

export const App = () => {
  const onSubmit = data => alert(JSON.stringify(data));

  return (
    // TODO: Implement a Formik Form Component and use it to display the form below.
    // IMPORTANT : You'll need to use the onSubmit prop on the "Formik component" and then use the Form component right below in the render

    <form>
      <div>
        <label htmlFor="firstName">First Name</label>
        {/* TODO: Transform the input below into a Field. */}
        <input name="firstName" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
