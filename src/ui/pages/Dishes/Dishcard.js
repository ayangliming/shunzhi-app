import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import "./dish-card.css"
import CommentIcon from "./CommentIcon.js"
class Dishcard extends Component {
  render(){
    const {dish}=this.props
    console.log(dish);
    // console.log(this.props.dishId);
    return(
      <Link to={ `/dish/${this.props.dishId}`} className="dish-card">
          <div className="dish-card-poster" style={{'backgroundImage':
          `url(${dish.poster})`}}>
          </div>
          <div className="dish-card-detall">
              <h1 className="dish-name">
                  {dish.name}
              </h1>
              <div className="price-tag">
                {dish.price}<span className="unit">元</span>
              </div>
              <div className="dish-card-icon-wrap">
                <div className="dish-card-icon-inner">
                  <CommentIcon color="#D0D0D0" />
                  <span className="dish-comment-no">
                    {Object.keys(this.props.comments).filter(id => this.props.comments[id].dish._id === this.props.dishId).length}
                  </span>
                  </div>
                </div>
                <div className="dish-desc">
                  {dish.desc}
                  <div className="dish-desc-mask">
            </div>
          </div>
          </div>
      </Link>

    )
  }
}
const mapStateToProps=(state)=>({
    comments:state.comment.all
})
export default connect(mapStateToProps)(Dishcard)
