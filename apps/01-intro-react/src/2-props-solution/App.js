import React from 'react'

/*
  The App component declares a variable called message in its body
  Your goal is to find a way to pass that message variable to the Message component
  This is called the props in React
 */

export const App = () => {
  const message = "Hello there";
  return (
    <div>
      <h1>This is our first component!</h1>
      <p>A component is a function which returns JSX</p>
      <Message message={message}/>
      <DisplayAnything />
    </div>
  )
};

const Message = ({message}) => {
  return (
    <p>{message}</p>
  )
};

// Note how you can return directly from your function with the parenthesis
const DisplayAnything = () => (
  <p>The component that you will create can display anything!</p>
);
