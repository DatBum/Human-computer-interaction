import React, { Component, Fragment } from 'react';
import ListGroup from './../../components/ListGroup/ListGroup';
import LoginFormContainer from './LoginFormContainer';

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
			                        <LoginFormContainer/>
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
