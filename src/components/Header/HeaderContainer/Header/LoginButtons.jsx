import React from "react";

const loginButtons = (props) => {
  return(
    <div className="col-md-6 col-xs-6 wd_auto">
      <div className="left">
        <div className="login">
          <a className="btn btn-default reg_button" href="login.html">Login</a> 
          <a className="btn btn-default reg_button" href="register.html">Signup</a>
        </div>          
      </div>
    </div>
  )
}

export default loginButtons;
