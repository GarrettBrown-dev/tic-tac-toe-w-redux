import * as actions from './../../actions';

describe('tic-tac-toe actions', () => {
  it('toggleTurn should create TOGGLE_TURN action', () => {
    expect(actions.toggleTurn()).toEqual({
      type: 'TOGGLE_TURN'
    });
  });
});