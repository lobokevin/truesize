import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { destroyCart } from '../../store/cart';
import CartItem from './CartItem';
import { connect } from 'react-redux';

class Cart extends Component {
  constructor(props) {
	super(props);
	this.handleCheckout = this.handleCheckout.bind(this);
  }

  handleCheckout(){
	const total = this.props.cart.reduce((sum, order) => {
		sum += order.price * order.quantity
		return sum
	}, 0).toFixed(2)

	alert(`Checked out. Your total is $${total}`)
	this.props.destroyCart()
  }

  render() {
	const cart = this.props.cart;
	return (
		<div className="container">
			<ul className="collection productList">
				{cart.length ? cart.map(product => <CartItem product={product} key={product.id}/>) : <h3>Your cart is empty!</h3>}
			</ul>
			<br />
			<button type="button" className="btn btn-primary" onClick={this.handleCheckout}>Checkout</button>
		</div>
	)
  }
}

 /* -----------------    CONTAINER     ------------------ */

 const mapState = ({ cart }) => ({ cart });
 const mapDispatch = {destroyCart}
 export default connect(mapState, mapDispatch)(Cart);
