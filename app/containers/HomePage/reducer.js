import { fromJS } from 'immutable';
import {
REQUEST_API,
RECIEVED_RESPONSE,
} from './constants';

const initialState = fromJS({
  loadingHomepage: true,
});

function homepageReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_API:
      return state.set('loadingHomepage', true);
    case RECIEVED_RESPONSE:
      return state.set('loadingHomepage', false);
    default:
      return state;
  }
}

export default homepageReducer;
