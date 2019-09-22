const TYPE_INCREMENT = 'INCREMENT';
const TYPE_DECREMENT = 'DECREMENT';
const TYPE_SEARCH = 'SEARCH';

export const increment = () => ({
  type: TYPE_INCREMENT
});

export const decrement = () => ({
  type: TYPE_DECREMENT
});

export const search = (payload?: string) => ({
  type: TYPE_SEARCH,
  payload
});

const initialState = {
  counter: 0,
  search: ''
};

export type State = typeof initialState;
type Action = {
  type: string;
  payload?: string;
};

type reducerFunction = (state: State | undefined, action: Action) => State;

export const reducer: reducerFunction = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_INCREMENT:
      return {...state, counter: state.counter + 1};
    case TYPE_DECREMENT:
      return {...state, counter: state.counter - 1};
    case TYPE_SEARCH:
      return {...state, search: action.payload || ''};
    default:
      return state;
  }
};
