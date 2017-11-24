import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import users from './users';
import products from './products';
import sessions from './sessions';
import orders from './orders';
import purchases from './purchases';
import reviews from './reviews';
import cart from './cart';

const reducer = combineReducers({ users, products, sessions, reviews, orders, cart, purchases});
const middleware = applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }));

const store = createStore(reducer, composeWithDevTools(middleware));

export default store;
