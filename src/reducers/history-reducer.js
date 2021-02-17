export default (state = [], action) => {
  switch (action.type) {
    case "MAKE_MOVE":
      // let newState = [...state];
      let nextMove = state[state.length - 1];
      let squares = nextMove.squares.slice();
      squares[0] = 'X';
      let newHistory = state.concat(squares);
      return newHistory;
    default:
      return state;
  }
};

// handleClick(i) {
//   const history = this.state.history;
//   const current = history[history.length - 1];
//   const squares = current.squares.slice();

//   squares[i] = this.state.xIsNext ? 'X' : 'O';
//   this.setState({
//     history: history.concat([{
//       squares: squares,
//     }]),
//     xIsNext: !this.state.xIsNext,
//   });
// }