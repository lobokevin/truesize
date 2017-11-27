import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Input} from 'react-materialize';
import {connect} from 'react-redux';
import {auth} from '../../store/sessions';
import styles from '../../styles';

class Entry extends React.Component {
  constructor() {
    super();

    this.handleLoginSubmit = this
      .handleLoginSubmit
      .bind(this);
    this.handleSignUpSubmit = this
      .handleSignUpSubmit
      .bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this
      .props
      .login(event.target.email.value, event.target.password.value, 'login')
      .then(this.props.history.push('/home'))
      .catch(err => console.log('NOT FOUND ', err));
  }

  handleSignUpSubmit(event) {
    event.preventDefault();
    if (event.target.password.value === event.target.confirmPass.value) {
      this
        .props
        .login(event.target.email.value, event.target.password.value, 'signup')
        .then(this.props.history.push('/home'))
        .catch(err => console.log('A sign-up error occured ', err));
    } else {
      console.error("Passwords do not match");
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-1" style={styles.loginBox}>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">Login</h4>
              </div>
              <hr/>
              <div className="panel-body">
                <form acceptCharset="UTF-8" role="form" onSubmit={this.handleLoginSubmit}>
                  <fieldset>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="mail@example.com"
                        name="email"
                        type="text"/>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        type="password"/>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input name="remember" type="checkbox" value="Remember Me"/>
                        Remember Me
                      </label>
                    </div>
                    <input className="btn btn-md btn-success" type="submit" value="Login"/>
                  </fieldset>
                </form>
                <hr/>
                <a href="/auth/google">
                  <img
                    src="/images/btn_google_signin_dark_normal_web@2x.png"
                    style={styles.googleSignIn}/>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 offset-md-1" style={styles.loginBox}>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">Signup</h4>
              </div>
              <hr/>
              <div className="panel-body">
                <form acceptCharset="UTF-8" role="form" onSubmit={this.handleSignUpSubmit}>
                  <fieldset>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="mail@example.com"
                        name="email"
                        type="text"/>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        type="password"/>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Re-type Password"
                        name="confirmPass"
                        type="password"/>
                    </div>
                    <input className="btn btn-md btn-success" type="submit" value="Signup"/>
                  </fieldset>
                </form>
                <hr/>
                <a href="/auth/google">
                  <img
                    src="/images/btn_google_signin_dark_normal_web@2x.png"
                    style={styles.googleSignIn}/>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

const mapState = () => ({message: 'Log in'});
const mapDispatch = {
  login: auth
};
export default connect(mapState, mapDispatch)(Entry);
