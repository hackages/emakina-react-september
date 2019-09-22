import React, {useReducer} from 'react'

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const INPUT = 'INPUT';

const initialState = {
  count: 0,
  text: ''
};

export const App = () => {
  const [state, dispatch] = useReducer(null, initialState);


  return (
    <div>
      <p>{state && state.count}</p>
      <button onClick={null}>+</button>
      <button onClick={null}>-</button>
      <h1>Text</h1>
      <input
        value={state && state.text}
        onChange={({target: {value}}) => null}
      />

      Your text is:
      <pre>
        {state && state.text}
      </pre>
    </div>
  )
};

