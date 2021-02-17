import xIsNextReducer from './x-is-next-reducer';
import historyReducer from './history-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  history: historyReducer,
  xIsNext: xIsNextReducer
});

export default rootReducer;