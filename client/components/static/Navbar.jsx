import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../store/sessions';
import history from '../../history';
import styles from '../../styles.js';

/* -----------------    COMPONENT     ---------------s--- */

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.renderLoginSignup = this
      .renderLoginSignup
      .bind(this);
    this.renderLogout = this
      .renderLogout
      .bind(this);
    this.logout = this
      .logout
      .bind(this);
  }

  renderLoginSignup() {
    return (
      <li className="nav-item">
        <NavLink className="nav-link" to="/entry">Login/Signup</NavLink>
      </li>
    )
  }

  renderLogout() {
    const email = this.props.sessions.email;
    return (
      <li className="nav-item">
        <NavLink className="nav-link" to="/entry" onClick={this.logout}>Logout</NavLink>
      </li>
    )
  }

  logout() {

    this
      .props
      .logout()
      .then(() => {
        this
          .props
          .history
          .push('/home');
      })
      .catch(console.log);
  }

  render() {
return (
  <nav id="navbar">
    <ul>
      <li>
        <NavLink to="/products" className="active">
          Introduction</NavLink>
      </li>
      <li>
        <a href="#first">First Section</a>
      </li>
      <li>
        <a href="#second">Second Section</a>
      </li>
      <li>
        <a href="#cta">Get Started</a>
      </li>
    </ul>
  </nav>
)
    }
          } /* ----------------- CONTAINER ------------------ */ const mapState =
              state => state; const mapDispatch = dispatch => ({logout : () => {
                return dispatch(logout());
              }
});

export default connect(mapState, mapDispatch)(Navbar);
