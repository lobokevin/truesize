import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchReviews} from '../../store/reviews';

export default class Review extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let review = this.props.review;
    return (
      <ul>
        <li>Review Rating - {review.rating}</li>
        <li>Review Content - {review.content}</li>
      <li>Review posted at - {review.createdAt}</li>
      </ul>
    )
  }
}
