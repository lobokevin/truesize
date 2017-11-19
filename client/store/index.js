import {createStore, combineReducers, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import users from './users';
import products from './products';
import sessions from './sessions';
import orders from './orders';
import purchases from './purchases';
import reviews from './reviews';
import cart from './cart';
import size from './size';

const reducer = combineReducers({ users, products, sessions, reviews, orders, cart, purchases, size});
const middleware = applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }));

const store = createStore(reducer, middleware);

export default store;
