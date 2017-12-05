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
      <div className="col" style={Object.assign({}, styles.productDivOutline, styles.backgroundColorGrey)}>
      {this.state.length === 7 ? <p>Looks like we don't have your size, go to the <Link to="/">Home </Link> to update your size!
        </p> : <h5> We have your size! It's listed as <bold>'{this.state.productList[0].size}'</bold>
        </h5> }
        </div>
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
