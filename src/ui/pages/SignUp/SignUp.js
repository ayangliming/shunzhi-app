// 注册
import React, {Component} from "react"
import Header from "../../../Header"
import {Link} from "react-router-dom"
class SignUp  extends Component{
    render(){
    	
      return(
            <div className="signup">
							<Header />
							<h3>signup</h3>
              <h1>注册</h1>
              <p>连接一个个小而确定的幸福</p>
								<form className="signup_form">
										
											<input type="text" placeholder="用户名"/>
										
											<input type="text" placeholder="Email"/>
										
											<input type="password" placeholder="密码"/>
										
											<input type="password" placeholder="再次输入"/>
								</form>
										<span>注册</span>
										<div className="signup_bottom">
											<im>已有账号？</im>
											<Link to="/login">点此登陆</Link>
										</div>
            </div>

      )
    }

}


export default SignUp
