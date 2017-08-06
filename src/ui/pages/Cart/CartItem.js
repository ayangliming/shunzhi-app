import React, { Component } from 'react'
import { connect } from 'react-redux'
import './cart-item.css'

class CartItem extends Component {


  handeMinus=()=>{
    this.props.dispatch({type:"DECR_CART_ITEM",dishId:this.props.dishId})
  }
  handPlus=()=>{
    this.props.dispatch({type:"INCR_CART_ITEM",dishId:this.props.dishId})
  }
  render(){
    console.log(this.props.dish);
    const { name, poster, price} = this.props.dish
    return(
      <div className="cart-item">
      <div className="cart-item-info">
      <div className="cart-item-poster"
           style={{ 'backgroundImage': `url(${poster})`}}
        >
      </div>
      <div className="name-price-wrap">
        <div className="cart-item-name">
          {name}
        </div>
        <div className="cart-item-price">
          $ {price}
        </div>
      </div>
    </div>
    <div className="cart-action">
      <div className="minus"
      onClick={this.handeMinus}>
        -
      </div>
      <div className="item-count">
      {this.props.dishes[this.props.dishId].count}
      </div>
      <div
        className="plus"
        onClick={this.handPlus}>
        +
      </div>
    </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    dishes: state.cart.dishes
  })
}

export default connect(mapStateToProps)(CartItem)
