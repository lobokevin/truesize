import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProductListItem from './ProductListItem';

/* -----------------    COMPONENT     ------------------ */

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: this.props.products,
      length: this.props.products.length
    }
  }

  render() {

    return (
      <div className="container" id="wrapper">
        <div className="row" />
        <div id="main">
          <ul>
            {this
              .state
              .productList
              .map(product => <ProductListItem product={product} key={product.id} />)}
          </ul>
        </div>
      </div>

    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({products}) => ({products});
const mapDispatch = {};
export default connect(mapState, mapDispatch)(ProductList);
