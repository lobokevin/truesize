import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from '../../store/cart';
import { connect } from 'react-redux';
import styles from '../../styles';


class ProductListItem extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }

	handleAdd(){
		this.props.addToCart(this.props.product)
	}

	render() {
		const product = this.props.product;
		return (
				<div className="row" style={styles.productDivOutline}>
					<div className="col-3">
						<img className="product-image" src={product.image} style={styles.productImage}/>
					</div>
					<div className="col-3"> <h4>Size : {product.size} </h4>
					<h4>Price : ${product.price} </h4></div>
					<div className="col-4">
						<p>
							<Link to={`/products/${product.id}`}>{product.title}</Link>
							<br/>
							{product.description}
						</p>
					</div>
					<div className="col-2">
						<button type="button" className="btn btn-primary btn-sm" onClick={this.handleAdd}>+</button>
					</div>
				</div>
		)
	}
}

 /* -----------------    CONTAINER     ------------------ */

 const mapState = null;
 const mapDispatch = { addToCart };
 export default connect(mapState, mapDispatch)(ProductListItem);
