import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../store/cart';
import { connect } from 'react-redux';
import styles from '../../styles';

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
				<div className="row" style={styles.productDivOutline}>
					<div className="col-4">
						<img className="product-image" src={product.image} style={styles.productImage}/>
					</div>
					<div className="col-4">
						<p>
							<Link to={`/products/${product.id}`}>{product.title}</Link>
							<br/>
							{product.description}
						</p>
					</div>
					<div className="col-4">
                    <button type="button" className="btn btn-primary btn-sm" onClick={this.handleAdd} style={styles.buttonBorder}>+</button>
						<button type="button" className="btn btn-primary btn-sm" onClick={this.handleRemove} style={styles.buttonBorder}>-</button>

                        <p>Quantity: {product.quantity}, Price: ${(product.quantity * product.price).toFixed(2)}</p>
					</div>
				</div>
)
    }
}

 /* -----------------    CONTAINER     ------------------ */

 const mapState = null
 const mapDispatch = { addToCart, removeFromCart}
 export default connect(mapState, mapDispatch)(CartItem);
