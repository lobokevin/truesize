import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class OrderListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const order = this.props.order;
    const purchases = this.props.purchases;
    const products = this.props.products;

    return (
      <li className="collection-item">
        {(order.completed === true)
          ? <h6>Status:
              <b>Completed</b>
            </h6>
          : <h6>Status:
            <b>Incomplete</b>
          </h6>}
        <h6>Order ID: {order.id}</h6>
        <h6>Order Date: {order.date}</h6>
        <h6>Order Time: {order.time}</h6>
        {purchases.map(purchase => {
          let prod = products.find(product => product.id === purchase.orderId)
          return (
            <div>
              <h6 key={prod.id}>
                <Link to={`/products/${prod.id}`}>{prod.title}{': '}</Link>
                {purchase.quantity}
                {' x '}${purchase.price}
              </h6>
            </div>
          )
        })}

      </li>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */
const mapState = function (state, ownProps) {
  return {
    purchases: state
      .purchases
      .filter(purchase => purchase.orderId === ownProps.order.id),
    products: state.products
  }
}
const mapDispatch = {};

export default connect(mapState, mapDispatch)(OrderListItem);
