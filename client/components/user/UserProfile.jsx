import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Input} from 'react-materialize';
import {connect} from 'react-redux';
import history from '../../history'
import {updateUser} from '../../store/users';
import styles from '../../styles';

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(props){
    let user = props.user;
    this.setState({
      fullName: user.fullName,
      userID: user.id
    })
  }

  render() {
    const user = this.props.user;

    return (

        <div style={styles.productDivOutline}>
          <div>
            <h2>User Details</h2>
          </div>
          <div>
            <h3><b>Name: </b>{user.fullName}</h3>
            <h3><b>Email: </b>{user.email}</h3>
            <h3><b>Billing Address: </b>{user.billingAddress}</h3>
            <h3><b>Status: </b>{user.permissions}</h3>
          </div>
        </div>

    )

  }
}

// container

const mapState = () => ({});

const mapDispatch = (dispatch) => ({
  newUserDetails: (id, newDetails) => {
    dispatch(updateUser(id, newDetails));
  }
});

export default connect(mapState, mapDispatch)(UserProfile);
