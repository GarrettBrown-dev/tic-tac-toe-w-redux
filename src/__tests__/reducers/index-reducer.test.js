import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import xIsNextReducer from '../../reducers/x-is-next-reducer';
import historyReducer from '../../reducers/history-reducer';

// let store = createStore(rootReducer);

describe("rootReducer", () => {
  test("should return default state if no action type is recognized", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      history: [{
        squares: Array(9).fill(undefined)
      }],
      xIsNext: true
    });
  });
});