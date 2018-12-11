import React, {Component, Fragment} from 'react';
import BackToTopButton from './BackToTopButton';

class FooterContainer extends Component {
  render() {
    const socials = ['facebook', 'twitter', 'yahoo', 'envelope', 'linkedin'].map(social => (
      <a href="#" className="btn btn-default reg_button"><i className={'fa fa-' + social} /></a>
    ))

    return(
      <Fragment>
      <div id="footer1">
        <div className="container-fluid footer-background">
          <div className="row">
            <div className="container">
              <div className="row">
                <div className="col-md-2 col-sm-3 col-xs-12 txt-center">
                  <a href="home.html">
                    <span className="logo-text">DRUGSTORE</span>
                  </a>
                </div>
                <div className="col-md-7 col-sm-6 col-xs-12">
                  <div id="footer_menu">
                    <a href="home.html">Home</a> | 
                    <a href="#">About Us</a> | 
                    <a href="#">Disclaimer</a> | 
                    <a href="#">Guarantee</a> | 
                    <a href="#">Shipping &amp; Payment</a> | 
                    <a href="#">Privacy Policy</a> |
                    <a href="#">Terms &amp; Conditions</a> | 
                    <a href="#">Contact Us</a> | 
                    <a href="#">Site Map</a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12">
                  <div id="social_icons" className="pull-right">
                    {socials}  
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="copyright">
                    {/*Do not remove Backlink from footer of the template. To remove it you can purchase the Backlink !*/}
                    © 2017 All right reserved. Designed by
                    <a href="http://www.themevault.net/" target="_blank">ThemeVault.</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackToTopButton/>
      </Fragment>
    )
  }
}

export default FooterContainer;
