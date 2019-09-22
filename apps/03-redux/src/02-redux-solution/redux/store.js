import {createStore, combineReducers} from 'redux';
import {reducer} from './reducer';

const rootReducers = combineReducers({
  reducer
});

export const store = createStore(rootReducers);
