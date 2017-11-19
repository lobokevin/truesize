import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../store/sessions';
import {
  PageHeader,
  Grid,
  Row,
  Col,
  ButtonGroup,
  Button
} from 'react-bootstrap';
import history from '../../history';
import style from '../../styles.js';

/* -----------------    COMPONENT     ---------------s--- */

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.renderLoginSignup = this.renderLoginSignup.bind(this);
    this.renderLogout = this.renderLogout.bind(this);
    this.logout = this.logout.bind(this);
  }

  renderLoginSignup() {
    return (<li className="nav-item">
    <a className="nav-link" href="/entry">Login/Signup</a>
  </li>)
  }

  renderLogout() {
    const email = this.props.sessions.email;
    return (<li className="nav-item">
    <a className="nav-link" href="/entry" onClick={this.logout}>Logout</a>
  </li>)
  }

  logout() {
    //this is dispatching logout, waiting for logout thunk, then pushing to history
    this.props.logout().then(() => {
      this.props.history.push('/home');
    }).catch(console.log);
  }

  render() {
     return (
         <div className="container" style={style.marginTop}>
        <div className="row align-items-end">

          <div className="col-6">
            <h1>True Size</h1>
          </div>
           <div className="col-6">
           <nav className="navbar">

           <ul className="nav navbar-default">
       <li className="nav-item ">
    <a className="nav-link" href="/">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/products">Products</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/dashboard">Dashboard</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/checkout">Checkout</a>
  </li>
                {this.props.sessions.email
                  ? this.renderLogout()
                  : this.renderLoginSignup()}
                  </ul>
                  </nav>
          </div>

        </div>
        <hr/>
      </div>

    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = state => state;
const mapDispatch = dispatch => ({
  logout: () => {
    return dispatch(logout());
  }
});

// export default Navbar;
export default connect(mapState, mapDispatch)(Navbar);
