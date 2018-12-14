import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = (props) => {
  return(
    <form
      encType="multipart/form-data"
      role="form"
      className="form-horizontal add_margin"
    >
      <div className="form-group">
        <label
          htmlFor="input-email"
          className="control-label col-sm-4"
        >
          E-Mail Address
        </label>
        <div className="col-sm-8">
          <input
            onChange={props.emailChanged}
            type="text"
            className="form-control"
            id="input-email"
            placeholder="E-Mail Address"
            value={props.email}
            name="email"
          />
        </div>
      </div>
      <div className="form-group">
        <label
            htmlFor="input-password"
            className="control-label col-sm-4"
        >
            Password
        </label>
        <div className="col-sm-8">
            <input
                onChange={props.passwordChanged}
                type="password"
                className="form-control"
                id="input-password"
                placeholder="Password"
                value={props.password}
                name="password"
            />
        </div>
      </div>
      <p className="cat_name">
          {" "}
          <a href="#">Forgot Passowrd? Click here.</a>
      </p>
      {/*<input type="submit" value="Login" class="btn btn-primary reg_button" />!*/}
      <Link to="/"
          onClick={props.formSubmit}
          className="btn btn-primary reg_button"
      >
          <i className="fa fa-key" />
          &nbsp; Login
      </Link>
    </form>
  )
}

export default LoginForm;
