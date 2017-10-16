import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Input } from 'react-materialize';
import { connect } from 'react-redux';
import { auth } from '../../store/sessions';

class Entry extends React.Component {
  constructor() {
    super();

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.props
      .login(event.target.email.value, event.target.password.value, 'login')
      .then(this.props.history.push('/home'))
      .catch(err => console.log('NOT FOUND ', err));
  }

  handleSignUpSubmit(event) {
    event.preventDefault();
    if (event.target.password.value === event.target.confirmPass.value) {
      this.props
        .login(event.target.email.value, event.target.password.value, 'signup')
        .then(this.props.history.push('/home'))
        .catch(err => console.log('A sign-up error occured ', err));
    } else {
      console.error("Passwords do not match");
    }
  }

  render() {
    return (
      <div className="container login-container">
        <div className="row">
          <div className="left-text col s12 m12 l6">
            <div className="lb-header">
              <a href="#" className="active">
                Login
              </a>
            </div>
            <div className="social-login">
              <a href="/auth/google">
                <i className="fa fa-google-plus fa-lg" />
                Log in with Google
              </a>
            </div>

            <form className="email-login" onSubmit={this.handleLoginSubmit}>
              <div className="u-form-group">
                <input name="email" type="email" placeholder="Email" />
              </div>
              <div className="u-form-group">
                <input name="password" type="password" placeholder="Password" />
              </div>
              <div className="u-form-group">
                <button type="submit">Log in</button>
              </div>
            </form>
          </div>
          <div className="right-text col s12 m12 l6">
            <div className="lb-header">
              <a href="#" id="signup-box-link">
                Sign Up
              </a>
            </div>
            <form className="email-signup" onSubmit={this.handleSignUpSubmit}>
              <div className="u-form-group">
                <input name="email" type="email" placeholder="Email" />
              </div>
              <div className="u-form-group">
                <input name="password" type="password" placeholder="Password" />
              </div>
              <div className="u-form-group">
                <input name="confirmPass" type="password" placeholder="Confirm Password" />
              </div>
              <div className="u-form-group">
                <button>Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = () => ({ message: 'Log in' });
const mapDispatch = { login: auth };
export default connect(mapState, mapDispatch)(Entry);
