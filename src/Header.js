import React, {Component} from "react"
import img from "./img/2.jpg"
class Header  extends Component{
    render(){
      return(
            <div className="header">
            	<img src={img} alt=""/>
             
            </div>

      )
    }

}


export default Header