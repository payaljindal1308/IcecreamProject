import React from 'react';
import { Component } from 'react';
import '../Styles/Orders.css'
import OrderItem from './OrderItem';
export default class Order extends Component {
  render(){
    console.log(this.props.order)
    return (
      <div>{this.props.order}</div>
      // <div className="Orders">
      // <h2>Order ID: {this.props.id}</h2>
      //   {this.props.order.map( (product, index) => (
      //     <OrderItem key={index} product={product}></OrderItem>
      //   ))}
      //   <footer>Total: {this.props.total}</footer>
      // </div>
  )
  }
  
}
