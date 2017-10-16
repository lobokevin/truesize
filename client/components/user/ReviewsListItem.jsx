import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ReviewsListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    const review = this.props.review;
    let prod = this.props.products.find(product => product.id === review.productId);
    console.log("prod",prod)

    return (
      <li className="collection-item">
        <h6>Product: <Link to={`/products/${prod.id}`}>{prod.title}</Link></h6>
        <h6>Rating: {review.rating}</h6>
        <h6>Content: {review.content}</h6>
      </li>
    );
  }
}

const mapState = function(state, ownProps) {
  return {
    products: state.products
  }
}
const mapDispatch = {};

export default connect(mapState, mapDispatch)(ReviewsListItem);
