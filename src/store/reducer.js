import { Map } from 'immutable';

import * as actions from '../actions';


const _state = Map({
    signedIn: false
});

function todoReducer(state = _state, action) {
  switch (action.type) {

    // LOAD_SHEET
    case actions.SIGN_IN:
      return state
        .set('signedIn', true);
        default:
        return state;
  }
}

export default todoReducer