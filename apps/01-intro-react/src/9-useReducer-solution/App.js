import React, {useReducer} from 'react'

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const INPUT = 'INPUT';

const reducer = (state, {type, payload}) => {
  switch (type) {
    case INCREMENT:
      return {...state, count: state.count + 1};
    case DECREMENT:
      return {...state, count: state.count - 1};
    case INPUT:
      return {...state, text: payload};
    default:
      return state
  }
};

const initialState = {
  count: 0,
  text: ''
};

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const inc = () => dispatch({type: INCREMENT});
  const dec = () => dispatch({type: DECREMENT});

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <h1>Text</h1>
      <input
        value={state.text}
        onChange={({target: {value}}) => dispatch({type: INPUT, payload: value})}
      />

      Your text is:
      <pre>
        {state.text}
      </pre>
    </div>
  )
};

