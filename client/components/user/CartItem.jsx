import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../store/cart';
import { connect } from 'react-redux';

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

    }

    handleAdd(){
        this.props.addToCart(this.props.product)
    }

    handleRemove(){
        this.props.removeFromCart(this.props.product)
    }

    render() {
	    const product = this.props.product;
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
					<div className="col s4 m2 l2">
                        <a className="waves-effect waves-light btn cartButton" onClick={this.handleAdd}>+</a>
                        <br /><br/>
                        <a className="waves-effect waves-light btn cartButton" onClick={this.handleRemove}>-</a>
                        <br />
                        <p className="p-quantity">Q: {product.quantity}, Price: ${(product.quantity * product.price).toFixed(2)}</p>
					</div>
				</div>
			</li>)
    }
}

 /* -----------------    CONTAINER     ------------------ */
 
 const mapState = null
 const mapDispatch = { addToCart, removeFromCart}
 export default connect(mapState, mapDispatch)(CartItem);