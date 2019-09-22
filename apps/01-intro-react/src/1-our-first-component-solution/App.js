import React from 'react'

export const App = () => {
  return (
    <div>
      <h1>This is our first component!</h1>
      <p>A component is a function which returns JSX</p>
      <Message />
      <DisplayAnything />
    </div>
  )
};

const Message = () => {
  return (
    <p>Your goal here is to create another component and use it in the App component</p>
  )
};

// Note how you can return directly from your function with the parenthesis
const DisplayAnything = () => (
  <p>The component that you will create can display anything!</p>
);
