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
    return (<Button bsStyle="info" href="/entry">Login/Signup</Button>)
  }

  renderLogout() {
    const email = this.props.sessions.email;
    return (<Button bsStyle="info" onClick={this.logout}>Logout</Button>)
  }

  logout() {
    //this is dispatching logout, waiting for logout thunk, then pushing to history
    this.props.logout().then(() => {
      this.props.history.push('/home');
    }).catch(console.log);
  }

  render() {
     return (
         <Grid>
        <Row className="show-grid">
          <Col xs={6} lg={6}>
            <PageHeader>True Size</PageHeader>
          </Col>
           <Col xs={6} lg={6} bsClass="margin-top: 100">
            <ButtonGroup>
              <Button bsStyle="info" href="/">Home</Button>
              <Button bsStyle="info" href="/dashboard">My Profile</Button>
              <Button bsStyle="info" href="/products">Products</Button>
              <Button bsStyle="info" href="/checkout">Checkout</Button>
                {this.props.sessions.email
                  ? this.renderLogout()
                  : this.renderLoginSignup()}
            </ButtonGroup>
          </Col>
        </Row>
      </Grid>
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
