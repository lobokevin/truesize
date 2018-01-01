import React, { Component } from 'react';
import { connect } from 'react-redux';
class SingleProduct extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatchFetchReviews();
  }

  render() {
    const product = this.props.selectedProduct;

    //We know we shouldn't use a ternary to render this component.
    //We would make single-product actions and a reducer
    //However, we realized that this would take some time and we wanted
    //to focus on completing other aspects of the project before refactoring this
    return (
      <div>
        {product
          ? <div className="container">
              <div className="section">
                <div className="row">
                  <div className="col l6 m6 s6">
                    <img className="single-product-img" src={product.image} />
                  </div>
                  <div className="col l6 m6 s6 product-col">
                    <h3>{product.title}</h3>
                    <h4>${product.price}</h4>
                    <br />
                    <p className="single-product-description">
                      {product.description}</p>
                    <br />
                    <button className="waves-effect waves-light btn">Add to Cart</button>
                  </div>
                </div>
                <h4>Reviews</h4>
              {this.props.reviews ? this.props.reviews.map(rev => {
                return <Review review={rev} key={rev.id}/>
              }) : <br/>}

              </div>
            </div>
          : <h1>Product Not Found</h1>}
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ products, reviews }, ownProps) => {
  const product = products.find(aProduct => aProduct.id === +ownProps.match.params.productId);
  return { selectedProduct: product, reviews };
};
const mapDispatch = (dispatch, ownProps) => {
  return {
    dispatchFetchReviews: () => {
      const productId = +ownProps.match.params.productId;
      dispatch(fetchReviews(productId));
    }
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
