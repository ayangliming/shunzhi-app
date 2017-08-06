import React, { Component } from 'react'
import { connect } from 'react-redux'
import TitleHeader from  "../../shared/TitleHeader/TitleHeader.js"
import './dish.css'
import CommentIcon from "./CommentIcon.js"
import Componentlcon from "../Dishes/CommentIcon.js"
import Piechart from "./PieChart.js"
import AreaChart from './AreChart.js'
class Dish extends Component {

      buy=(dish)=>{
        console.log("...buy",dish)
        this.props.dispatch({type:"ADD_CART",dishId:this.props.match.params.dishId,dish:dish})
      }



  render(){
    console.log(this.props.comments)
    if(Object.keys(this.props.dishes).length !== 0) {
      const { dishes,comments} = this.props
      // console.log('----', dishes)
      const { dishId } = this.props.match.params
        // console.log('===+++===', dishId)
      let isIncart =Object.keys(this.props.cartDishes).includes(dishId)
      console.log("....",isIncart)
      let dish = dishes[dishId]
      console.log(dish)
      return(
         <div className="dish">
           <TitleHeader title={dish.name} />
             <div className="dish-info">
               <div className="dish-img-wrap">
                 <div style={{ 'backgroundImage' : `url(${dish.poster})`}}
                   className="img">
                 </div>
               </div>
                  <div className="dish-main">
                        <h2>{dish.name}</h2>
                      <div className="dish-price">
                          {dish.price}<span>元</span>
                      </div>
                        <div onClick={()=>this.buy(dish)}>
                            <CommentIcon color={ isIncart ? '#F86E67' : '#DEDEDE'}/>
                        </div>
                            <div className="dish-desc">
                                {dish.desc}
                            </div>
                              <div className="dish-cart">
                                  <Componentlcon color="#ccc" />
                                  {Object.keys(this.props.comments).filter(id => this.props.comments[id].dish._id === this.props.dishId).length}
                            </div>
                        <h1 className="dish-sub-title">营养成分</h1>
                        <Piechart />
                        <h1 className="dish-sub-title">销售额</h1>
                        <p className="dish-sub-detail">单位：份</p>
                        <AreaChart />
                        <h1 className="dish-sub-title">评论区</h1>
                            <p className="dish-sub-detail">
                              评论数：
                              { Object.keys(comments).filter(id => comments[id].dish._id === dishId).length }
                            </p>
                  </div>
             </div>
         </div>
      )
    }else {
      return null
    }
  }
}
const mapStateToProps = (state) => ({
  dishes: state.dish.all,
  cartDishes: state.cart.dishes,
  comments:state.comment.all
})

export default connect(mapStateToProps)(Dish)
