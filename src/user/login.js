import React from 'react';

export default function Login(props){
  let display;
  if (props.showMe){
    display = "none";
  }
  return (
    <div id="loginForm" className="col-9 clearfix rounded" style={{display}}>
      {props.message}
      <form id="login" onSubmit={props.onSubmit}>
        <label>Username: </label>
        <input type="text" id="userName"/>
        <label>Password: </label>
        <input type="password" id="passWord"/>
        <input type="submit" />
      </form>
    </div>
  )
}
