import React, { Component } from 'react'
import editIcon from './editIcon.svg'
import axios from "axios"
import Settings from "../../../settings.js"
import { connect } from 'react-redux'

class ProfileEditable extends Component {
    state={
      edit:false,
      slogan:"没有个性签名",
      image:""
    }
    edit=()=>{
      this.setState({
        edit:true
      })
    }
      updateUser=(e)=>{
        e.preventDefault()
        let slogan=this.sloganInput.value
        let data={
          username:this.props.user.username,
          slogan
        }
        console.log(data);
        axios.put(`${Settings.host}/user`,data)
        .then(res=>{
          console.log('user, from server...', res.data)
          this.props.dispatch({type:"UPDATE_USER",user:res.data.user,userId:this.props.userId})
          this.setState({
            edit:false
          })
        })
      }




    handChange=(event)=>{
        const file = event.target.files[0];
        console.log(file);
        let formData = new FormData()
        const reader = new FileReader();
        reader.onlonad=(event)=>{
          this.setState({
            image:event.target.result,
          })
          formData.append('avatar', file)
          formData.append('userId', this.props.userId )
          console.log("...",formData);
          axios.post(`${Settings.host}/avatar`,formData)
          .then(
            res => {
              console.log(res.data)
              this.props.dispatch({ type: 'UPDATE_USER', userId: this.props.userId , user: { ...this.props.user, avatar: res.data.user.avatar }})
            }
          )
        }
        console.log('reader.read....')
        reader.readAsDataURL(file);
    }

    handInput=()=>{
      this.setState({
        slogan:this.sloganInput.value
      })
    }
  render(){
      const {user}=this.props
      const {avatar,username}=user
      const hisAvatar = avatar ? `${Settings.host}/uploads/avatars/${avatar}` : 'http://media.haoduoshipin.com/yummy/default-avatar.png'
      const hisUsername = username ? username : 'no name'
      let editForm=(
    <form className="profile-form"
      onSubmit={this.updateUser}>
          <input className="profile-slogan-input"
            ref={value => this.sloganInput = value}
            type="text" value={this.state.slogan}
            onChange={this.handInput}
            />
          <button type="submit">保存</button>
    </form>
      )
    return(
      <div className="profile">
          <label className="profile-label"
          style={{
            'backgroundImage': `url(${this.state.image ? this.state.image : hisAvatar})`,
           }}>
            <input type="file" onChange={this.handChange}/>
          </label>

          <div className="profile-username-slogan">
              <div className="profile-username">
                  {hisUsername}
              </div>
              <div className="profile-slogan">
                  {this.state.edit ? editForm : this.state.slogan}
              </div>
          </div>
          <div className="profile-edit" onClick={this.edit}>
                <img src={editIcon} alt=""/>
          </div>
      </div>
    )
  }
}

export default connect(null)(ProfileEditable)
