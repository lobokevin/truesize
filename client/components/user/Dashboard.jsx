import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserProfile from './UserProfile.jsx';
import {fetchUserOrdersThunkCreator} from '../../store/orders';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps, prevProps) {
    this.props.fetchUserOrdersThunkCreator(nextProps.sessions.id);
  }

  render() {
    const user = this.props.sessions;

    return (
      <div className="container" id="wrapper">
        <div className="row" />
        <div id="main">
          <UserProfile user={user} />
        </div>
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({sessions}) => ({sessions});

const mapDispatch = {
  fetchUserOrdersThunkCreator
};

export default connect(mapState, mapDispatch)(Dashboard);
