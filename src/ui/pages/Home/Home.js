
import React, {Component} from "react"
import {Link} from "react-router-dom"
import img from "../../../img/12_03.jpg"

class Home  extends Component{
    render(){
      return(
            <div className="home">
                <img src={img} alt=""/>
                <h1>吮指</h1>
                <h5>享受舌尖艳遇</h5>
              <div className="home_boot">
                <Link to="/signup">注册</Link>
              <Link to="/sidebar">登陆</Link>

              </div>
            </div>

      )
    }

}


export default Home
