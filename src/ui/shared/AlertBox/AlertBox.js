import React, {Component} from 'react'
import './alert-box.css'
import {connect} from "react-redux"
import store from "../../../redux/store.js"


class  AlertBox extends Component{
  closeAlert = ()=>{
      console.log('closeAlert....')
      store.dispatch({type:"HIDE_ALERT" })
  }
  render(){
    console.log(this.props.showAlert)
    return(
      <div className={this.props.showAlert?"alert-box show":"alert-box"}>
        <div className="alert-content-card">
            <div className="alert-msg">
              {this.props.alertMsg}
            </div>
            <div className="alert-close-button" onClick={this.closeAlert}>
                    关闭
            </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps =(state)=>({
  showAlert:state.app.showAlert,
  alertMsg:state.app.alertMsg
})

export default connect (mapStateToProps)(AlertBox)
