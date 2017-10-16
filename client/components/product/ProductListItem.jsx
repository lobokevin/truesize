import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from '../../store/cart';
import { connect } from 'react-redux';

class ProductListItem extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }

	handleAdd(){
		this.props.addToCart(this.props.product)
	}

	render() {
		const product = this.props.product
		return (
			<li className="collection-item product-li">
				<div className="row product-row">
					<div className="col s4 m2 l4">
						<img className="product-image" src={product.image}/>
					</div>
					<div className="col s1 m4 l2"> </div>
					<div className="col s3 m4 l4">
						<p>
							<Link to={`/products/${product.id}`}>{product.title}</Link>
							<br/>
							{product.description}
						</p>
					</div>
					<div className="col s4 m2 l2 addProductBtn">
						<a className="btn-floating btn-large waves-effect waves-light blue darken-2"><i className="material-icons" onClick={this.handleAdd}>add</i></a>
					</div>
				</div>
			</li>
		)
	}
}

 /* -----------------    CONTAINER     ------------------ */

 const mapState = null;
 const mapDispatch = { addToCart };
 export default connect(mapState, mapDispatch)(ProductListItem);
