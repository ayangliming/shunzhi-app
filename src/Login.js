import React, {Component} from "react"
import Header from "./Header"
import {Link} from "react-router-dom"
class Login  extends Component{
    render(){
      return(
            <div className="login">
             <Header />
							<h3>login</h3>
							<h1>登录</h1>
              <p>连接一个个小而确定的幸福</p>
              	<form className="login_form">
										
											<input type="text" placeholder="用户名"/>
										
											<input type="password" placeholder="密码"/>
								</form>
								<span>登录</span>
								<div className="login_bottom">
											<im>没有账号？</im>
											<Link to="/signup">点此注册</Link>
										</div>
            </div>

      )
    }

}


export default Login