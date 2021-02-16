import gameReducer from '../reducers/gameReducer';

describe('gameReducer', () => {


  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(gameReducer({}, { type: null })).toEqual({});
  });

  test('Should change xIsNext to false', () => {
    expect(gameReducer(false, { type: 'SAVE_TURN' })).toEqual(true);

  });
});

//testing to make sure that reducer is changing the state. we just need to test that it is adding to the array and changing the isXNext to true or false

// IN HELP QUEUE, THE REDUCER TO TOGGLE STATE IS AS FOLLOWS:
// export default (state = false, action) => {
//   switch (action.type) {
//     case 'TOGGLE_FORM':
//       return !state;
//     default:
//       return state;
//   }
// };
// where "toggle form" would be the like, x is next thing
// the associated test is:
// test('Should toggle form visibility state to true', () => {
//   expect(formVisibleReducer(false, {type: 'TOGGLE_FORM'})).toEqual(true);
// })
// });

/////////////////////////////////

// for adding (+ UPDATING) a ticket, the reducer looked as follows:
// export default (state = {}, action) => {
//   const { names, location, issue, id } = action;
//   switch (action.type) {
//     case 'ADD_TICKET':
//       return Object.assign({}, state, {
//         [id]: {
//           names: names,
//           location: location,
//           issue: issue,
//           id: id
//         }
//       });




// the test:
// test('Should successfully add new ticket data to masterTicketList', () => {
//   const {names, location, issue, id} = ticketData;
//   action = {
//     type: 'ADD_TICKET',
//     names: names,
//     location: location,
//     issue: issue,
//     id: id
//   };

//   expect(ticketListReducer({}, action)).toEqual({
//     [id] : {
//       names: names,
//       location: location,
//       issue: issue,
//       id: id
//     }
//   });
// });