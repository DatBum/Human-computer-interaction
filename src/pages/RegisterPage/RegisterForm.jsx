import React from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = props => {
  return(
    <form className="form-horizontal">
      <div className="contentText">
          <fieldset id="account">
              <h1>Your Personal Details</h1>
              <div
                  style={{ display: "none" }}
                  className="form-group required"
              >
                  <label className="col-sm-2 control-label">
                      Customer Group
                  </label>
                  <div className="col-sm-10">
                      <div className="radio">
                          <label>
                              <input
                                  type="radio"
                                  defaultChecked="checked"
                                  defaultValue={1}
                                  name="customer_group_id"
                              />
                              Default
                          </label>
                      </div>
                  </div>
              </div>
              <div className="form-group required">
                  <label
                      htmlFor="input-firstname"
                      className="col-sm-2 control-label"
                  >
                      Name
                  </label>
                  <div className="col-sm-10">
                      <input
                          onChange={props.nameChanged}
                          type="text"
                          className="form-control"
                          id="input-firstname"
                          placeholder="First Name"
                          defaultValue
                          name="firstname"
                      />
                  </div>
              </div>
              <div className="form-group required">
                  <label
                      htmlFor="input-email"
                      className="col-sm-2 control-label"
                  >
                      E-Mail
                  </label>
                  <div className="col-sm-10">
                      <input
                          onChange={props.emailChanged}
                          type="email"
                          className="form-control"
                          id="input-email"
                          placeholder="E-Mail"
                          defaultValue
                          name="email"
                      />
                  </div>
              </div>
          </fieldset>
          <fieldset>
              <h1>Your Password</h1>
              <div className="form-group required">
                  <label
                      htmlFor="input-password"
                      className="col-sm-2 control-label"
                  >
                      Password
                  </label>
                  <div className="col-sm-10">
                      <input
                          type="password"
                          className="form-control"
                          id="input-password"
                          placeholder="Password"
                          defaultValue
                          name="password"
                      />
                  </div>
              </div>
              <div className="form-group required">
                  <label
                      htmlFor="input-confirm"
                      className="col-sm-2 control-label"
                  >
                      Password Confirm
                  </label>
                  <div className="col-sm-10">
                      <input
                          type="password"
                          className="form-control"
                          id="input-confirm"
                          placeholder="Password Confirm"
                          defaultValue
                          name="confirm"
                      />
                  </div>
              </div>
          </fieldset>
          <div className="buttons">
              <div className="pull-right">
                  <Link to='/'
                      onClick={props.formSubmit}
                      className="btn btn-primary reg_button"
                      defaultValue="Continue"
                  >
                    Submit
                  </Link>
              </div>
          </div>
      </div>
    </form>
  )
}

export default RegisterForm;
