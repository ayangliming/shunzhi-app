import React, { Component } from 'react'
import TitleHeader from "../../shared/TitleHeader/TitleHeader.js"
import CartItem from "./CartItem.js"
import "./cart.css"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Cart extends Component {
  render(){
      console.log(this.props);
      const {dishes}=this.props
      if (Object.keys(dishes).length !==0) {
        let itemList=Object.keys(dishes).map(id=>{
          return(
            <CartItem key={id} dish={dishes[id]} dishId={id} />
          )
        })

        return(
          <div className="cart">
            <TitleHeader title="购物车"/>
            <div className="cart-hero">
                <h1　className="total-price">
                  {this.props.topic}元
                </h1>
            </div>
            <div className="cart-list-wrap">
                <div className="cart-item-list">
                  {itemList}
                </div>
                <div className="cart-checkout-button">
                  结算
                </div>
              </div>
          </div>
        )
      }else{
        return(
          <div>
            购物车是空的
            <Link to="/dishes">去购物</Link>
          </div>
        )

      }

  }
}

const mapStateToprops=(state)=>({
  dishes:state.cart.dishes,
  topic:state.cart.topic
})

export default connect(mapStateToprops)(Cart)
