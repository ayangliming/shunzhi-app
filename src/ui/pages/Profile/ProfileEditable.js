import React, { Component } from 'react'
import editIcon from './editIcon.svg'




class ProfileEditable extends Component {
    state={
      edit:false,
      slogan:"没有个性签名"
    }
    edit=()=>{
      this.setState({
        edit:true
      })
    }
  render(){
    console.log(this.state.edit);
      let editForm=(
    <form className="profile-form">
          <input className="profile-slogan-input"
            ref={value => this.sloganInput = value}
            type="text"
            />
          <button type="submit">保存</button>
    </form>
      )
    return(
      <div className="profile">
          <label className="profile-label">
            <input type="file"/>
          </label>
          <div className="profile-username-slogan">
              <div className="profile-username">
                    123
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

export default ProfileEditable
