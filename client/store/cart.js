import axios from 'axios';
import history from '../history';

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE_CART = 'INITIALIZE_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const DESTROY_CART = 'DESTROY_CART';

/* ------------   ACTION CREATORS     ------------------ */

const init = cart => ({ type: INITIALIZE_CART, cart });
const add = order => ({ type: ADD_TO_CART, order });
const remove = order => ({ type: REMOVE_FROM_CART, order });
const destroy = () => ({ type: DESTROY_CART });

/* ------------       REDUCERS     ------------------ */

export default function reducer(cart = [], action) {
  switch (action.type) {
    case INITIALIZE_CART:
      return action.cart;

    case ADD_TO_CART:
      let doesContain = false;
        cart.filter(order => {
          if(action.order.id ===  order.id){
            order.quantity++;
            doesContain = true;
          }
        })
        if (doesContain) return JSON.parse(JSON.stringify(cart));
        else {
          action.order.quantity = 1
          return [action.order, ...cart]
        }

    case REMOVE_FROM_CART:
      cart = cart.filter(order => {
        if(action.order.id ===  order.id){
          if(order.quantity === 1) return false;
          else { order.quantity-- } return true;
        }
      })
      return JSON.parse(JSON.stringify(cart));

    case DESTROY_CART:
      return [];

    default:
      return cart;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchCart = () => dispatch => {
    dispatch(init([]));
}

export const addToCart = (order) => dispatch => {
    dispatch(add(order));
}

export const removeFromCart = (order) => dispatch => {
    dispatch(remove(order));
}

export const destroyCart = () => dispatch => {
  dispatch(destroy())
}
