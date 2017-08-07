import React, { Component } from 'react'
import TitleHeader from "../../shared/TitleHeader/TitleHeader.js"
import { connect } from 'react-redux'
import settings from "../../../settings.js"
import "./user.css"
class User extends Component {
  render(){

    const { userId } = this.props.match.params
    const {users}=this.props
    if (Object.keys(users).length !== 0){

        const user=users[userId]
        console.log(user);
        const {username, slogan,avatar}=user
        const hisAvatar = avatar ? `${settings.host}/uploads/avatars/${avatar}` : 'http://media.haoduoshipin.com/yummy/default-avatar.png'
        const hisname= username? username : "no name"
        const hisslogan = slogan? slogan : "没有个性签名"
        return(
          <div className="user">
              <TitleHeader title={username}/>
              <div style={{ 'height' : `${window.innerHeight - 160}px`}}
                    className="user-info-wrap">
                    <div className="user-avatar"
                         style={{ 'backgroundImage' : `url(${hisAvatar})`}}
                      >
                    </div>
                    <div className="user-name">
                      {hisname}
                    </div>
                    <div className="user-info-card">
                      <div className="user-info-card-title">
                        个性签名
                      </div>
                      <div className="slogan">
                        {hisslogan}
                      </div>
                    </div>
                    <div className="user-follow-btn">
                      加为好友
                    </div>
                  </div>
          </div>
        )
      }else{
        return null
      }
    }

  }



const mapStateToProps=(state)=>({
  users:state.user.all
})

export default connect(mapStateToProps)(User)
