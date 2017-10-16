import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import OrderListItem from './OrderListItem';

 /* -----------------    COMPONENT     ------------------ */

 class OrderList extends Component {
   constructor(props) {
     super(props);
   }

   render() {
    let orders = this.props.orders
    return (
      <div className="col l6 m6 s6">
        <h4>My Orders</h4>
        <ul className="collection">
             {orders.map(order => <OrderListItem order={order} key={order.id}/>)}
        </ul>
        </div>
    )
   }
 }

 /* -----------------    CONTAINER     ------------------ */

 const mapState = ({ orders, products }) => ({ orders, products });
 const mapDispatch = { };
 export default connect(mapState, mapDispatch)(OrderList);
