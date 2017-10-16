// React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Redux
import store from '../store';
import { fetchUsers } from '../store/users';
import { fetchProducts } from '../store/products';
import { fetchCart } from '../store/cart';
import { fetchUserOrdersThunkCreator } from '../store/orders';
import { me } from '../store/sessions';
import { fetchPurchases } from '../store/purchases';

// Components
import Navbar from './static/Navbar';
import Home from './static/Home';
import Footer from './static/Footer';
import NotFound from './static/NotFound';
import Entry from './user/Entry';
import Cart from './user/Cart';
import ProductList from './product/ProductList';
import Dashboard from './user/Dashboard';
import SingleProduct from './product/SingleProduct'

export default class Main extends Component {
  componentDidMount() {
    store.dispatch(fetchProducts());
    store.dispatch(fetchUsers());
    store.dispatch(fetchCart());
    store.dispatch(me());
    store.dispatch(fetchPurchases());
  }

  render() {
    return (
      <div>
        <Route component={Navbar} />
        <main>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/products" component={ProductList}/>
            <Route exact path="/products/:productId" component={SingleProduct}/>
            <Route exact path="/checkout" component={Cart}/>
            <Route exact path="/entry" component={Entry}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route path="*" component={NotFound}/>
          </Switch>
        </main>
        <Footer/>
      </div>
    );
  }
}
