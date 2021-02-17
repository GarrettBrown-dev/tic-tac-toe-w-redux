import xIsNextReducer from '../../reducers/x-is-next-reducer';

describe("xIsNextReducer", () => {

  test("Should return default state if no action type is recognized", () => {
    expect(xIsNextReducer(true, { type: null })).toEqual(true);
  });

  test('Should toggle xIsNext state to false', () => {
    expect(xIsNextReducer(true, { type: 'TOGGLE_TURN' })).toEqual(false);
  });

})