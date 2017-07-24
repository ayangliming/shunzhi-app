import React, { Component } from 'react';
import './App.css';
import Home from "./ui/pages/Home/Home"
import SignUp from "./ui/pages/SignUp/SignUp"
// import Sidebar from "./ui/shared/Sidebar/Sidebar"
import Login from "./Login"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signUp" component={SignUp}></Route>
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
