import React, { Component, Fragment} from 'react';

class Header extends Component {
    render() {
        return (
        	<Fragment>
            	<div className="container">
			        <div className="row">
			            <div className="col-md-4 col-sm-4 col-xs-4" id="logo">
			                <a href="/" className="logo-text">
			                    Medi
			                    <span style={{ color: "#39BAF0", fontSize: "40px" }}>
			                        STORE
			                    </span>
			                </a>
			            </div>
			            <div
			                className="col-md-2 col-sm-12 col-xs-12"
			                style={{ display: "none" }}
			                id="navbar_hide"
			            >
			                <nav role="navigation" className="navbar navbar-inverse">
			                    <a
			                        href="/"
			                        style={{ float: "left" }}
			                        className="logo-text"
			                    >
			                        Medi
			                        <span style={{ color: "#39BAF0", fontSize: "40px" }}>
			                            STORE
			                        </span>
			                    </a>
			                    <div id="nav">
			                        <div className="navbar-header">
			                            <button
			                                type="button"
			                                className="navbar-toggle"
			                                data-toggle="collapse"
			                                data-target="#myNavbar"
			                                style={{
			                                    background: "#8EBE08",
			                                    border: "none",
			                                    marginRight: 0
			                                }}
			                            >
			                                <span className="icon-bar" />
			                                <span className="icon-bar" />
			                                <span className="icon-bar" />
			                            </button>
			                        </div>
			                        <div className="collapse navbar-collapse" id="myNavbar">
			                            <ul className="nav navbar-nav site_nav_menu1">
			                                <li className="first ">
			                                    <a href="/">Home</a>
			                                </li>
			                                <li>
			                                    <a href="#">About us</a>
			                                </li>
			                                <li>
			                                    <a href="#">Guarantee</a>
			                                </li>
			                                <li>
			                                    <a href="#">Disclaimer</a>
			                                </li>
			                                <li>
			                                    <a href="#">Shipping &amp; Payment</a>
			                                </li>
			                                <li>
			                                    <a href="#">Privacy Policy</a>
			                                </li>
			                                <li>
			                                    <a href="#">Terms &amp; Conditions</a>
			                                </li>
			                                <li>
			                                    <a href="#">Contact Us</a>
			                                </li>
			                                <li>
			                                    <a href="#">Site Map</a>
			                                </li>
			                            </ul>
			                        </div>
			                    </div>
			                </nav>
			            </div>
			            <div className="col-md-4 col-md-offset-4 col-sm-offset-2  col-sm-6 col-xs-12">
			                <div id="top_right">
			                    <div id="cart">
			                        <div className="text">
			                            <div className="img">
			                                <a href="/cart">
			                                    {" "}
			                                    <img
			                                        className="img-responsive"
			                                        src="http://localhost:3000/images/cart.png"			                          
			                                        width={26}
			                                        height={27}
			                                    />
			                                </a>
			                            </div>
			                            <span>Your cart:</span>
			                            <span className="cart_total">€0.00</span>
			                            <span className="cart_items">(0 items)</span>
			                        </div>
			                    </div>
			                    <div id="bottom_right">
			                        <div className="row">
			                            <div className="col-md-6 col-xs-6 wd_auto">
			                                <div className="left">
			                                    <div className="login">
			                                        <a
			                                            className="btn btn-default reg_button"
			                                            href="/login"
			                                        >
			                                            Login
			                                        </a>
			                                        <a
			                                            className="btn btn-default reg_button"
			                                            href="/register"
			                                        >
			                                            Signup
			                                        </a>
			                                    </div>
			                                </div>
			                            </div>
			                            <div className="dropdown-bn wd-33 col-md-6 remove_PL col-xs-6">
			                                <div className="row">
			                                    <div className=" pl-0 col-md-6 col-xs-6">
			                                        <div className="dropdown btn-group">
			                                            <button
			                                                className="btn btn-primary dropdown-toggle"
			                                                type="button"
			                                                data-toggle="dropdown"
			                                            >
			                                                language
			                                                <span className="caret" />
			                                            </button>
			                                            <ul className="dropdown-menu">
			                                                <li>
			                                                    <a href="#">English</a>
			                                                </li>
			                                                <li>
			                                                    <a href="#">French</a>
			                                                </li>
			                                                <li>
			                                                    <a href="#">German</a>
			                                                </li>
			                                                <li>
			                                                    <a href="#">Dutch</a>
			                                                </li>
			                                                <li>
			                                                    <a href="#">Swedish</a>
			                                                </li>
			                                                <li>
			                                                    <a href="#">Danish</a>
			                                                </li>
			                                                <li>
			                                                    <a href="#">Portuguese</a>
			                                                </li>
			                                                <li>
			                                                    <a href="#">Finish</a>
			                                                </li>
			                                                <li>
			                                                    <a href="#">German</a>
			                                                </li>
			                                                <li>
			                                                    <a href="#">Norwegian</a>
			                                                </li>
			                                            </ul>
			                                        </div>
			                                    </div>
			                                    <div className="pl_0 col-md-6 col-xs-6">
			                                        <div className="dropdown btn-group">
			                                            <button
			                                                className="btn btn-primary dropdown-toggle"
			                                                type="button"
			                                                data-toggle="dropdown"
			                                            >
			                                                currency
			                                                <span className="caret" />
			                                            </button>
			                                            <ul className="dropdown-menu">
			                                                <li>
			                                                    <a href="#">U.S. Dollar</a>
			                                                </li>
			                                                <li>
			                                                    <a href="#">Euro</a>
			                                                </li>
			                                                <li>
			                                                    <a href="#">
			                                                        Pounds Sterling
			                                                    </a>
			                                                </li>
			                                            </ul>
			                                        </div>
			                                    </div>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			    <div className="container-fluid bg-color">
			        <div className="row">
			            <div className="container">
			                <div className="row">
			                    <div className="col-md-12 col-xs-12">
			                        <nav
			                            role="navigation"
			                            className="navbar navbar-inverse"
			                            id="nav_show"
			                        >
			                            <div id="nav">
			                                <div className="navbar-header">
			                                    <button
			                                        type="button"
			                                        className="navbar-toggle"
			                                        data-toggle="collapse"
			                                        data-target="#myNavbar"
			                                    >
			                                        <span className="icon-bar" />
			                                        <span className="icon-bar" />
			                                        <span className="icon-bar" />
			                                    </button>
			                                </div>
			                                <div
			                                    className="collapse navbar-collapse"
			                                    id="myNavbar"
			                                >
			                                    <ul className="nav navbar-nav site_nav_menu1">
			                                        <li className="first ">
			                                            <a href="/">Home</a>
			                                        </li>
			                                        <li>
			                                            <a href="#">About us</a>
			                                        </li>
			                                        <li>
			                                            <a href="#">Guarantee</a>
			                                        </li>
			                                        <li>
			                                            <a href="#">Disclaimer</a>
			                                        </li>
			                                        <li>
			                                            <a href="#">
			                                                Shipping &amp; Payment
			                                            </a>
			                                        </li>
			                                        <li>
			                                            <a href="#">Privacy Policy</a>
			                                        </li>
			                                        <li>
			                                            <a href="#">
			                                                Terms &amp; Conditions
			                                            </a>
			                                        </li>
			                                        <li>
			                                            <a href="#">Contact Us</a>
			                                        </li>
			                                        <li>
			                                            <a href="#">Site Map</a>
			                                        </li>
			                                    </ul>
			                                </div>
			                            </div>
			                        </nav>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
            </Fragment>
        );
    }
}

export default Header;