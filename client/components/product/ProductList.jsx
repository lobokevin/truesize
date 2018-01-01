import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductListItem from './ProductListItem';
import styles from '../../styles';

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
      <div>
      <div className="row">
        </div>
        <ul className="collection container productList">
             {this.state.productList.map(product => <ProductListItem product={product} key={product.id} />)}
        </ul>
        </div>
    );
   }
 }

 /* -----------------    CONTAINER     ------------------ */

 const mapState = ({ products }) => ({ products });
 const mapDispatch = { };
 export default connect(mapState, mapDispatch)(ProductList);
