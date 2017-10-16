import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Input } from 'react-materialize';
import { connect } from 'react-redux';
import UserProfile from './UserProfile.jsx';
import OrderList from './OrderList.jsx';
import ReviewsList from './ReviewsList.jsx';
import { fetchUserReviews } from '../../store/reviews';
import { fetchUserOrdersThunkCreator } from '../../store/orders';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps, prevProps) {
    this.props.fetchUserOrdersThunkCreator(nextProps.sessions.id);
    this.props.fetchUserReviews(nextProps.sessions.id);
  }

  render() {
    const user = this.props.sessions;

    return (
      <div className="container">
        <UserProfile user={user} />
        <div className="row">
          <OrderList orders={this.props.orders} />
          <ReviewsList reviews={this.props.reviews} />
        </div>
      </div>
    );
  }
}

// container

const mapState = ({ sessions }) => ({ sessions });

const mapDispatch = { fetchUserOrdersThunkCreator, fetchUserReviews };

export default connect(mapState, mapDispatch)(Dashboard);
