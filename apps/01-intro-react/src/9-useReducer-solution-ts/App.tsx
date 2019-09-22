import React, { FC, useReducer } from "react";

const INCREMENT = "increment";
const DECREMENT = "decrement";
const INPUT = "INPUT";

type stateType = {
  count: number;
  text?: string;
};
type reducerFunction = (
  state: stateType,
  action: { type: string; payload?: string }
) => stateType;

const reducer: reducerFunction = (state, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case INPUT:
      return { ...state, text: payload };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  text: ""
};

export const App: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const inc: VoidFunction = () => dispatch({ type: INCREMENT });
  const dec: VoidFunction = () => dispatch({ type: DECREMENT });

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <h1>Text</h1>
      <input
        value={state.text}
        onChange={({ target: { value } }) =>
          dispatch({ type: INPUT, payload: value })
        }
      />
      Your text is:
      <pre>{state.text}</pre>
    </div>
  );
};
