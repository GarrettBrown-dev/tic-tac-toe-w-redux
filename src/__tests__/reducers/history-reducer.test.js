import historyReducer from '../../reducers/history-reducer';

describe("historyReducer", () => {
  let action;
  const historyData = [{
    squares: Array(9)
  }];
  const testData = { i: 0, value: 'X' }

  const newHistoryData = [{ squares: ['X', null, null, null, null, null, null, null] }]


  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(historyReducer({}, { type: null })).toEqual({});
  });

  test('Should return one array in history at 0th move', () => {
    expect(historyReducer(historyData, { type: null })).toEqual([{
      "squares": [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
    }]);
  });

  test('Should return squares array in history object', () => {
    const { i, value } = testData;
    action = { type: 'MAKE_MOVE', i, value }
    expect(historyReducer(historyData, action))
      .toEqual(
        [
          { squares: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined] }, // turn 0 -- blank board
          { "squares": ["X", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined] } // turn 1 -- first move
        ]
      );
  });
});
