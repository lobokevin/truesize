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
      userID : user.id
    })
  }

  render() {
    const user = this.props.user;

    return (
      <div className="row">
        <div className="col-4" style={styles.productDivOutline}>
          <div className="lb-header">
            <h5>User Details</h5>
          </div>
          <div className="text-left">
            <h6><b>Name: </b>{user.fullName}</h6>
            <h6><b>Email: </b>{user.email}</h6>
            <h6><b>Billing Address: </b>{user.billingAddress}</h6>
            <h6><b>Status: </b>{user.permissions}</h6>
          </div>
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
