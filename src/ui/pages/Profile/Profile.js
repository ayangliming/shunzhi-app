import React, { Component } from 'react'
import { connect } from 'react-redux'
import TitleHeader from "../../shared/TitleHeader/TitleHeader.js"
import ProfileEditable from "./ProfileEditable.js"
import { Link } from 'react-router-dom'
import "./profile.css"
class Profile extends Component {
  render(){
    if (this.props.isAuthenticated !==true) {
      return(
          <div className="profile-plz-login">
            请先<Link to="/login">登录</Link>
          </div>
        )
    }else {

    let userId = localStorage.getItem('userId')
    if (Object.keys(this.props.users).length!==0) {
      const {users}=this.props
      console.log(users);
      const {user}=users[userId]
      console.log(user);
    return(
      <div>
        < TitleHeader title="个人中心"　/>
        <ProfileEditable />
      </div>
      )
    }else{
      return null
      }
    }
  }
}

const mapStateToprops=(state)=>({
  users:state.user.all,
  isAuthenticated: state.account.isAuthenticated
})

export default connect(mapStateToprops)(Profile)
