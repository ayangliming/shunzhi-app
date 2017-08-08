import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TitleHeader from "../../shared/TitleHeader/TitleHeader.js"
import Dishcard from "./Dishcard.js"
import './dishes.css'
class Dishes extends Component {
  render(){
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    const { dishes } = this.props
      // console.log(dishes)
      // console.log('+++++', Object.keys(dishes))
      let slideStr = Object.keys(dishes).map(id=>(
        <div key={id} className="dish-card-wrap" >
            <Dishcard dish={dishes[id]} dishId={id} />
        </div>
      ))
        let slide =(
        <Slider {...settings}>
          {slideStr}
        </Slider>
        )

      return(
        <div className="dishes">
          <TitleHeader title="猜你喜欢"/>
          {Object.keys(this.props.dishes).length ===0 ? "" : slide}
        </div>
      )
  }
}

const mapStateToProps = (state) => ({
  dishes: state.dish.all
})

export default connect(mapStateToProps)(Dishes)
