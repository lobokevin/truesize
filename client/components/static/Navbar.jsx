import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../store/sessions';
import history from '../../history';
import style from '../../styles.js';

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={style.floatNone}>
        < a className="navbar-brand" href="#">
          Navbar </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                < a className="nav-link" href="#">
                  Home < span className = "sr-only" > (current) </span>
                </a>
              </li>
              < li className="nav-item">
                < a className="nav-link" href="#">
                  Features </a>
                </li>
                < li className="nav-item">
                  < a className="nav-link" href="#">
                    Pricing </a>
                  </li>
                  < li className="nav-item">
                    < a className="nav-link disabled" href="#">
                      Disabled </a>
                    </li>
                  </ul>
                </div>
              </nav>
              )
            }
          } /* ----------------- CONTAINER ------------------ */ const mapState =
              state => state; const mapDispatch = dispatch => ({logout : () => {
                return dispatch(logout());
              }
});

export default connect(mapState, mapDispatch)(Navbar);
