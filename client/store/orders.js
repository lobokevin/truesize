import axios from 'axios';
import history from '../history';

/* -----------------    ACTIONS     ------------------ */

const GET_ORDERS = 'GET_ORDERS';
const CREATE_ORDER = 'CREATE_ORDER';

/* ------------   ACTION CREATORS     ------------------ */

const getOrders = orders => ({ type: GET_ORDERS, orders });
const createOrder = order => ({type: CREATE_ORDER, order})

/* ------------       REDUCERS     ------------------ */

export default function reducer(orders = [], action) {
  switch (action.type) {
    case GET_ORDERS:
      return action.orders;

    case CREATE_ORDER:
      return [action.order, ...orders]

    default:
      return orders;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchUserOrdersThunkCreator = (id) => dispatch => {
  axios.get(`/api/users/${id}/orders`)
       .then(res => dispatch(getOrders(res.data)))
       .catch(err => console.error('Fetching user orders unsuccessful', err));
}

export const createOrderThunk = (order, userId) => dispatch => {
  axios.post(`/api/users/${userID}/orders`, order)
       .then(res => dispatch(createOrder(res.data)))
       .catch(err => console.error('Fetching user orders unsuccessful', err));
};
