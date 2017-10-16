import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const GET_PURCHASES = 'GET_PURCHASES';

/* ------------   ACTION CREATORS     ------------------ */

const getPurchases = purchases => ({ type: GET_PURCHASES, purchases });

/* ------------       REDUCERS     ------------------ */

export default function reducer(purchases = [], action) {
  switch (action.type) {
    case GET_PURCHASES:
      return action.purchases;
    default:
      return purchases;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchPurchases = (userId) => dispatch => {
  axios
    .get(`/api/purchases`)
    .then(res => dispatch(getPurchases(res.data)))
    .catch(err => console.error('Fetching purchases unsuccessful', err));
};
