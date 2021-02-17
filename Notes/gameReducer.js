// export default (state = {}, action) => {
//   const { xIsNext, squares, history } = action;
//   switch (action.type) {
//     case 'SAVE_TURN':
//       return Object.assign({}, state, {
//         [square]: {
//           xIsNext: false,
//           history: history
//         }
//       });
//     default:
// return state;
//   };


//reducer is doing what setState is doing in our component


// history: history.concat([{
//   squares: squares,
// }]),
// xIsNext: false,

// export default (state = false, action) => {
//   // const { xIsNext, squares, history } = action;
//   switch (action.type) {
//     case 'SAVE_TURN':
//       return !state;
//     // ...state,
//     // history: history.concat([{
//     //   squares: squares,
//     // }]),
//     // xIsNext: false,
//     default:
//       return state;
//   };
// }
