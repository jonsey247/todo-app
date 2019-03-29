import { Map } from 'immutable';

import * as actions from '../actions';


const _state = Map({
  todos: [
    {id: 1, content: 'write some code'},
    {id: 2, content: 'get a job'}
  ],
  signedIn: false
});

function todoReducer(state = _state, action) {
  switch (action.type) {

    // SIGN_IN
    case actions.SIGN_IN:
      return state
        .set('signedIn', true);
    // Get_SIGN_IN
    case actions.Get_SIGN_IN:
      return state.signedIn
        default:
        return state;
  }
}

export default todoReducer