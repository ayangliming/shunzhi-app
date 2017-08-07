import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import 'moment/locale/zh-cn'
import "./comment.css"
import axios from 'axios'
import settings from "../../../settings.js"

class Comment extends Component {


    newComment=(e)=>{
        e.preventDefault()
        let content = this.commentInput.value
        let dish= this.props.dishId
        let user = localStorage.getItem('userId')
        axios.post(`${settings.host}/comment`,{content,dish,user})
        .then(res=>{
          console.log("new",res.data);

          axios.get(`${settings.host}/comments`)
          .then(res=>{
            console.log(res.data);
            const {comments}=res.data
            this.props.dispatch({type:'LOAD_COMMENTS', comments})
          })
        })
    }


  render(){
    const {comments}=this.props
    moment.locale('zh-cn')
// console.log(comments);
    let commentList = Object.keys(comments).map( id => (
        <li className="comment-item"
          key={id}>
          <img src="http://media.haoduoshipin.com/yummy/default-avatar.png" alt="avatar" />
          <div className="comment-detail">
            <div className="username-time">
              <div className="comment-username">
                {comments[id].user.username}
              </div>
              <div className="comment-time">
                {moment(comments[id].createdAt).fromNow()}
              </div>
            </div>
            <div className="comment-content">
              {comments[id].content}
            </div>
          </div>
        </li>
      ))

  const commentForm = (<form className="comment-form"
    onSubmit={this.newComment}>
    <input ref={value => this.commentInput = value}
     type="text"  />
   <button type="submit">评论</button>
  </form>
)
  //
  // const plzLogin = (
  //   <div className="comment-plz-login">
  //     发评论请先<Link to="/login">登录</Link>
  //   </div>
  // )

    return(
      <div className="comment">
        {commentList}
        {commentForm}
      </div>
    )
  }
}

const mapStateToProps=(state)=>({
  comments:state.comment.all
})

export default connect(mapStateToProps)(Comment)
