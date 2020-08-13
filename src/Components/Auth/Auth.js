/** @format */

import React, { Component } from "react";
import "./Auth.css";

class Auth extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div className='Auth'>
        <h1>Authentication Page</h1>
        <label>email id : </label>
        <input type='textbox' placeholder='enter email id'></input>
        <br />
        <br />
        <label>password : </label>
        <input type='textbox' placeholder='enter password'></input>
        <br />
        <br />
        <input type='button' value='login'></input>
      </div>
    );
  }
}

export default Auth;
