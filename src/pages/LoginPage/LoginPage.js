import React, { Component, Fragment } from 'react';
import ListGroup from './../../components/ListGroup/ListGroup';

class LoginPage extends Component {
    render() {
        return (
            <div id="site_content">
			    <div className="container">
			        <div className="row">
			            <ListGroup />
			            <div className="col-sm-9" id="content">
			                <div className="breadcrumbs">
			                    <a href="/">
			                        <i className="fa fa-home" />
			                    </a>
			                    <a href="#">Login</a>
			                </div>
			                <div className="contentText">
			                    <h1>Welcome, Please Sign In</h1>
			                    <div className="row">
			                        <div className="col-sm-6">
			                            {/*<div class="well">!*/}
			                            <h2>New Customer</h2>
			                            <p>I am a new customer.</p>
			                            <p>
			                                By creating an account at steroid-shop.to you
			                                will be able to shop faster, be up to date on an
			                                orders status, and keep track of the orders you
			                                have previously made.
			                            </p>
			                            <a
			                                className="btn btn-primary reg_button"
			                                href="/register"
			                            >
			                                <i className="fa fa-caret-right" />
			                                &nbsp; Continue
			                            </a>
			                            {/*</div>!*/}
			                        </div>
			                        <div
			                            style={{ borderLeft: "1px dashed #c1bebe" }}
			                            className="col-sm-6"
			                        >
			                            {/*<div class="well">!*/}
			                            <h2>Returning Customer</h2>
			                            <p>I am a returning customer</p>
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
			                                            type="text"
			                                            className="form-control"
			                                            id="input-email"
			                                            placeholder="E-Mail Address"
			                                            defaultValue
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
			                                            type="password"
			                                            className="form-control"
			                                            id="input-password"
			                                            placeholder="Password"
			                                            defaultValue
			                                            name="password"
			                                        />
			                                    </div>
			                                </div>
			                                <p className="cat_name">
			                                    {" "}
			                                    <a href="#">Forgot Passowrd? Click here.</a>
			                                </p>
			                                {/*<input type="submit" value="Login" class="btn btn-primary reg_button" />!*/}
			                                <button
			                                    className="btn btn-primary reg_button"
			                                    value="Login"
			                                    type="submit"
			                                >
			                                    <i className="fa fa-key" />
			                                    &nbsp; Login
			                                </button>
			                            </form>
			                            {/*</div>!*/}
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
        );
    }
}

export default LoginPage;