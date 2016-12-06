import React from 'react';

export default function Login(props){
  let display;
  if (props.showMe === "not"){
    display = "none";
  }
  return (
    <div id="loginForm" className="col-9 clearfix rounded" style={{display}}>
      I am a defunct login form!! MWHAHAHA!!!
      <form id="login" onSubmit={props.onSubmit}>
        <label>Username: </label>
        <input type="text" />
        <label>Password: </label>
        <input type="text" />
        <input type="submit" />
      </form>
    </div>
  )
}
