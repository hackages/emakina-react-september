import {createStore, combineReducers} from 'redux';
import {State, reducer} from './reducer';

export type AppState = {
  reducer: State;
};

const rootReducers = combineReducers({
  reducer
});

export const store = createStore(rootReducers);
