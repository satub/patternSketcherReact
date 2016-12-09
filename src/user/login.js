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
      {"Not signed up yet? Just fill in the form!"}
      <form id="signup" onSubmit={props.onSubmit}>
        <label>Username: </label>
        <input type="text" id="newUser"/>
        <label>Password: </label>
        <input type="password" id="newPass"/>
        <label>Confirm password: </label>
        <input type="password" id="newPassConf"/>
        <input type="submit" />
      </form>
    </div>
  )
}
