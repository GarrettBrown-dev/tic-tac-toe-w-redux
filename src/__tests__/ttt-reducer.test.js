import gameReducer from '../reducers/gameReducer';

describe('gameReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(gameReducer({}, { type: null })).toEqual({});
  });

});