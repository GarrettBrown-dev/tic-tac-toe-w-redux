import historyReducer from '../../reducers/history-reducer';

describe("historyReducer", () => {
  let action;
  const historyData = [{
    squares: Array(9)
  }];

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(historyReducer({}, { type: null })).toEqual({});
  });

  test('Should return one array in history at 0th move', () => {
    expect(historyReducer(historyData, { type: null })).toEqual([{
      "squares": [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
    }]);
  });
})
// test('Should return squares array in history object', () => {
//   expect(historyReducer(historyData, { type: "MAKE_MOVE" })).toEqual( [{ squares: ["X"] }]);
// });