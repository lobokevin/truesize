import axios from 'axios';
import history from '../history';

/* -----------------    ACTIONS     ------------------ */

const REGISTER_SIZE = 'REGISTER_SIZE';

/* ------------   ACTION CREATORS     ------------------ */

const registerize = size => ({ type: REGISTER_SIZE, size });


/* ------------       REDUCERS     ------------------ */

export default function reducer(size = '', action) {
  switch (action.type) {
    case REGISTER_SIZE:
      return action.size;

    default:
      return size;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const registerSize = (size) => dispatch => {

}
