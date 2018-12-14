import React, { Component, Fragment } from 'react';
import ListGroup from './../../components/ListGroup/ListGroup';
import RegisterFormContainer from './RegisterFormContainer';

class RegisterPage extends Component {
    render() {
        return (
            <div id="site_content">
			    <div className="container">
			        <div className="row">
			            <ListGroup />
			            <div className="col-sm-9" id="content">
			                {" "}
			                <div className="breadcrumbs">
			                    <a href="/">
			                        <i className="fa fa-home" />
			                    </a>
			                    <a href="#">Register</a>
			                </div>
			                <RegisterFormContainer/>
			            </div>
			        </div>
			    </div>
			</div>
        );
    }
}

export default RegisterPage;
