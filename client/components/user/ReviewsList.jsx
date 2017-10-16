import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReviewsListItem from './ReviewsListItem';

 /* -----------------    COMPONENT     ------------------ */

 class ReviewsList extends Component {
   constructor(props) {
     super(props);
   }

   render() {
    let reviews = this.props.reviews;
    return (
      <div className="col l6 m6 s6">
        <h4>My Reviews</h4>
        <ul className="collection">
             {reviews.map(review => <ReviewsListItem review={review} key={review.id}/>)}
        </ul>
        </div>
    )
   }
 }

 /* -----------------    CONTAINER     ------------------ */

 const mapState = ({ orders, products, reviews }) => ({ orders, products, reviews });
 const mapDispatch = { };
 export default connect(mapState, mapDispatch)(ReviewsList);
