import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import Main from './components/Main.jsx';
import store from './store';
import history from './history';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Main />
    </Router>
  </Provider>,
  document.getElementById('app')
);
