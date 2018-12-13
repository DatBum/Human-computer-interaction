import React from "react";
import { Link } from 'react-router-dom';

const loginButtons = (props) => {
  return(
    <div className="col-md-6 col-xs-6 wd_auto">
      <div className="left">
        <div className="login">
          <Link to="/login"  className="btn btn-default reg_button" >Login</Link> 
          <Link to="/register" className="btn btn-default reg_button" >Signup</Link>
        </div>          
      </div>
    </div>
  )
}

export default loginButtons;
