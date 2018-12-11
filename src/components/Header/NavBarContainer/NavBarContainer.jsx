import React, { Component } from "react";

class NavBarContainer extends Component {
  render() {
    return(
      <div className="container-fluid bg-color">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-xs-12">
                <nav role="navigation" className="navbar navbar-inverse" id="nav_show">
                  <div id="nav">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </button>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                      <ul className="nav navbar-nav site_nav_menu1">
                        <li className="first "><a href="home.html">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Guarantee</a></li>
                        <li><a href="#">Disclaimer</a></li>
                        <li><a href="#">Shipping &amp; Payment</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms &amp; Conditions</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Site Map</a></li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div> 
          </div>
        </div>
    </div>
    )
  }
}

export default NavBarContainer;
