import React, { Component } from 'react'





class ProfileEditable extends Component {
  render(){
    return(
      <div className="profile">
          <label className="profile-label">
            <input type="file"/>
          </label>
          <div className="profile-username-slogan">
              <div></div>
          </div>
      </div>
    )
  }
}

export default ProfileEditable
