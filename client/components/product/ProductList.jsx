import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductListItem from './ProductListItem';

/* -----------------    COMPONENT     ------------------ */

class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let products = this.props.products;
    return (
        <ul className="collection container productList">
             {products.map(product => <ProductListItem product={product} key={product.id}/>)}
        </ul>
    )
   }
 }
 
 /* -----------------    CONTAINER     ------------------ */
 
 const mapState = ({ products }) => ({ products });
 const mapDispatch = { };
 export default connect(mapState, mapDispatch)(ProductList);