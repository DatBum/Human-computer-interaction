import React from "react";
import { Link } from 'react-router-dom';

const loginButtons = (props) => {
  const adminButton = props.user.role === 'Admin'? 
  <Link to='/admins/1' className="btn btn-default reg_button" >Admin</Link> : null;
  const welcome = (
    <div className='login'>
      <b>{props.user.name}</b>
      {adminButton}
    </div>
    )
  const buttons = (
    <div className="login">
      <Link to="/login"  className="btn btn-default reg_button" >Login</Link> 
      <Link to="/register" className="btn btn-default reg_button" >Signup</Link>
    </div>
  )
  const login = props.loggedIn? welcome:buttons; 
  return(
    <div className="col-md-6 col-xs-6 wd_auto">
      <div className="left">
        {login}            
      </div>
    </div>
  )
}

export default loginButtons;
