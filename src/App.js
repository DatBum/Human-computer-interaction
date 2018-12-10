import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-4" id="logo">
                      <a href="home.html" className="logo-text">
                        Medi<span style={{color: '#39BAF0', fontSize: '40px'}}>STORE</span>
                      </a>      
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12" style={{display: 'none'}} id="navbar_hide">
                      <nav role="navigation" className="navbar navbar-inverse">
                        <a href="home.html" style={{float: 'left'}} className="logo-text">
                          Medi<span style={{color: '#39BAF0', fontSize: '40px'}}>STORE</span>
                        </a>
                        <div id="nav">
                          <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar" style={{background: '#8EBE08', border: 'none', marginRight: 0}}>
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
                    <div className="col-md-4 col-md-offset-4 col-sm-offset-2  col-sm-6 col-xs-12">
                      <div id="top_right">
                        <div id="cart">
                          <div className="text">
                            <div className="img">
                              <a href="cart.html"> <img className="img-responsive" src="images/cart.png" alt title width={26} height={27} /></a>
                            </div><span>Your cart:</span><span className="cart_total">€0.00</span><span className="cart_items">(0 items)</span>
                          </div> 
                        </div>
                        <div id="bottom_right">
                          <div className="row">
                            <div className="col-md-6 col-xs-6 wd_auto">
                              <div className="left">
                                <div className="login">
                                  <a className="btn btn-default reg_button" href="login.html">Login</a> 
                                  <a className="btn btn-default reg_button" href="register.html">Signup</a>
                                </div>          
                              </div>
                            </div> 
                            <div className="dropdown-bn wd-33 col-md-6 remove_PL col-xs-6">
                              <div className="row">
                                <div className=" pl-0 col-md-6 col-xs-6">
                                  <div className="dropdown btn-group">
                                    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">language
                                      <span className="caret" /></button>
                                    <ul className="dropdown-menu">
                                      <li><a href="#">English</a></li>
                                      <li><a href="#">French</a></li>
                                      <li><a href="#">German</a></li>
                                      <li><a href="#">Dutch</a></li>
                                      <li><a href="#">Swedish</a></li>
                                      <li><a href="#">Danish</a></li>
                                      <li><a href="#">Portuguese</a></li>
                                      <li><a href="#">Finish</a></li>
                                      <li><a href="#">German</a></li><li><a href="#">Norwegian</a></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="pl_0 col-md-6 col-xs-6">
                                  <div className="dropdown btn-group">
                                    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">currency
                                      <span className="caret" /></button>
                                    <ul className="dropdown-menu">
                                      <li><a href="#">U.S. Dollar</a></li>
                                      <li><a href="#">Euro</a></li>
                                      <li><a href="#">Pounds Sterling</a>
                                      </li></ul>
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
                <div className="container">
                  <div className="row" id="search_manu" style={{marginTop: '10px'}}>
                    <div className="col-md-6 col-xs-12">
                      <form name="quick_find">
                        <div className="form-group">
                          <div className="input-group">
                            <input type="text" placeholder="Enter search keywords here" className="form-control input-lg" id="inputGroup" />
                            <span className="input-group-addon">
                              <a href="#" style={{color: 'white'}}>Search</a>
                            </span>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <form name="manufacturers"> 
                        <div className="form-group">
                          <div className>
                            <select style={{fontSize: '14px', background: '#EAEAEA', border: 'none'}} name="manufacturers_id" size={1} className="input-lg form-control arrow-hide date_class">
                              <option value selected="selected">Please Select manufacturers</option>
                              <option>lorem</option>
                              <option>lorem</option>
                              <option>lorem</option>
                              <option>lorem</option>
                            </select>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div id="site_content">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3 col-sm-4 col-xs-12 left_sidebar1">
                        <div id="left_part">
                          <div className="bs-example">
                            <div className="panel-group" id="accordion">
                              <div className="panel panel-default">
                                <div className="panel-heading">
                                  <div className="infoBoxHeading">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Categories</a>
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                      <i id="accordan_plus" className="indicator glyphicon glyphicon-chevron-down  pull-right" />
                                    </a>
                                  </div>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in">
                                  <div className="panel-body">
                                    <div className="infoBoxContents">
                                      <a href="product.html">Category One</a>&nbsp;(94)<br />
                                      <a href="product.html">Category Two</a>&nbsp;(9)<br />
                                      <a href="product.html">Category Three</a>&nbsp;(5)<br />
                                      <a href="product.html">Category Four</a>&nbsp;(6)<br />
                                      <a href="product.html">Category Five</a>&nbsp;(94)<br />
                                      <a href="product.html">Category Six</a>&nbsp;(94)<br />
                                      <a href="product.html">Category Seven</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="panel panel-default">
                                <div className="panel-heading">
                                  <div className="infoBoxHeading">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">What's New?</a>
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                      <i id="accordan_plus" className="indicator glyphicon glyphicon-chevron-up  pull-right accordan_plus" />
                                    </a>
                                  </div>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse">
                                  <div className="panel-body">
                                    <div className="infoBoxContainer">  
                                      <div className="infoBoxHeading">
                                        <a href="#">What's New?</a>
                                      </div> 
                                      <div className="infoBoxContents" id="sidebar">
                                        <div>
                                          <a href="single-product.html">
                                            <img src="images/img4.jpg" className="img-responsive" />
                                          </a>
                                        </div>
                                        <a href="single-product.html">Lorem Simply</a><br />€21.00
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="panel panel-default">
                                <div className="panel-heading">
                                  <div className="infoBoxHeading">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Information</a>
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                                      <i id="accordan_plus" className="indicator glyphicon glyphicon-chevron-up  pull-right" />
                                    </a>
                                  </div>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse">
                                  <div className="panel-body">
                                    <div className="infoBoxContents">    
                                      <a href="#">Shipping &amp; Returns</a><br />   
                                      <a href="#">Privacy Notice</a><br />   
                                      <a href="#">Conditions of Use</a><br />   
                                      <a href="#">Contact Us</a> 
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="panel panel-default">
                                <div className="panel-heading">
                                  <div className="infoBoxHeading">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour">Bestsellers</a>
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
                                      <i id="accordan_plus" className="indicator glyphicon glyphicon-chevron-up  pull-right" />
                                    </a>
                                  </div>
                                </div>
                                <div id="collapseFour" className="panel-collapse collapse">
                                  <div className="panel-body">
                                    <div className="infoBoxContents" id="sidebar">
                                      <a href="single-product.html">
                                        <img src="images/img4.jpg" className="img-responsive" />
                                      </a>
                                      <a href="single-product.html">Lorem Big Block</a><br /><del />
                                      <span className="productSpecialPrice">€21.00</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="panel panel-default">
                                <div className="panel-heading">
                                  <div className="infoBoxHeading">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseFive">Specials</a>
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseFive">
                                      <i id="accordan_plus" className="indicator glyphicon glyphicon-chevron-up  pull-right" />
                                    </a>
                                  </div>
                                </div>
                                <div id="collapseFive" className="panel-collapse collapse">
                                  <div className="panel-body">
                                    <div className="infoBoxContents" id="sidebar">
                                      <a href="single-product.html">
                                        <img src="images/img6.jpg" className="img-responsive" />
                                      </a>
                                      <a href="single-product.html">Lorem Big Block</a><br /><del />
                                      <span className="productSpecialPrice">€21.00</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> 
                      <div className="col-md-9 col-sm-8 col-xs-12 right_sidebar1">
                        <div id="right_part">
                          <div className="contentContainer">
                            <div className="contentText">
                              <div className="breadcrumbs">
                                <a href="home.html" className="headerNavigation"><i className="fa fa-home" /></a>           
                              </div>
                            </div>
                            {/*--slidder start-!*/}
                            <div className="contentText">
                              <div className="infoBoxHeading">Today Bestsellers</div>
                              <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                  {/*                                        <div class="bg_best">*/}
                                  <div className="bg_best">
                                    <div className="owl-carousel">
                                      <div className="item">
                                        <span>
                                          <a href="single-product.html">
                                            <img className="carasoul_image" src="images/d1.jpg" />
                                          </a></span>
                                        <a className="btn btn-default" href="cart.html" role="button">
                                          Buy Now!
                                        </a>
                                      </div>
                                      <div className="item">
                                        <span>
                                          <a href="single-product.html">
                                            <img className="carasoul_image" src="images/img4.jpg" />
                                          </a>
                                        </span>
                                        <a className="btn btn-default" href="cart.html" role="button">
                                          Buy Now!
                                        </a>
                                      </div>
                                      <div className="item">
                                        <span>
                                          <a href="single-product.html">
                                            <img className="carasoul_image" src="images/img6.jpg" />
                                          </a></span>
                                        <a className="btn btn-default" href="cart.html" role="button">
                                          Buy Now!
                                        </a>
                                      </div>
                                      <div className="item">
                                        <span>
                                          <a href="single-product.html">
                                            <img className="carasoul_image" src="images/img13.jpg" />
                                          </a></span>
                                        <a className="btn btn-default" href="cart.html" role="button">
                                          Buy Now!
                                        </a>
                                      </div>
                                      <div className="item">
                                        <span>
                                          <a href="single-product.html">
                                            <img className="carasoul_image" src="images/img14.jpg" />
                                          </a></span>
                                        <a className="btn btn-default" href="cart.html" role="button">
                                          Buy Now!
                                        </a>
                                      </div>
                                      <div className="item">
                                        <span>
                                          <a href="single-product.html">
                                            <img className="carasoul_image" src="images/img16.jpg" />
                                          </a></span>
                                        <a className="btn btn-default" href="cart.html" role="button">
                                          Buy Now!
                                        </a>
                                      </div>
                                      <div className="item">
                                        <span>
                                          <a href="single-product.html">
                                            <img className="carasoul_image" src="images/img15.jpg" />
                                          </a></span>
                                        <a className="btn btn-default" href="cart.html" role="button">
                                          Buy Now!
                                        </a>
                                      </div>
                                      {/*                                                    <div class="item">
                                                                                                                    <span>
                                                                                                                        <a href="single-product.html">
                                                                                                                            <img class="carasoul_image" src="images/d25.jpg">
                                                                                                                        </a></span>
                                                                                                                    <a class="btn btn-default"  href="cart.html" role="button" >
                                                                                                                        Buy Now!
                                                                                                                    </a>
                                                                                                                </div>*/}
                                      <div className="item">
                                        <span>
                                          <a href="single-product.html">
                                            <img className="carasoul_image" src="images/img1.png" />
                                          </a></span>
                                        <a className="btn btn-default" href="cart.html" role="button">
                                          Buy Now!
                                        </a>
                                      </div>
                                      <div className="item">
                                        <span>
                                          <a href="single-product.html">
                                            <img className="carasoul_image" src="images/d2.jpg" />
                                          </a></span>
                                        <a className="btn btn-default" href="cart.html" role="button">
                                          Buy Now!
                                        </a>
                                      </div>
                                      <div className="item">
                                        <span>
                                          <a href="single-product.html">
                                            <img className="carasoul_image" src="images/d7.jpg" />
                                          </a></span>
                                        <a className="btn btn-default" href="cart.html" role="button">
                                          Buy Now!
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  {/*                                    </div>*/}
                                </div>
                              </div>
                            </div>
                            {/*--slidder End-!*/}
                            {/*--content_1--!*/}
                            <div className="contentText Static">
                              <h1>What is Lorem Ipsum?</h1>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                              <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            {/*--content_1 End--!*/}
                            {/*--content_2 For New Products--!*/}
                            <div className="contentText">
                              <h1>New Products For March</h1>
                              <div className="row margin-top product-layout_width">
                                <div className="product-layout  col-md-4 col-sm-6 col-xs-12">
                                  <div className="product-thumb-height">
                                    <div className="product-thumb transition">
                                      <ul>
                                        <li className="li_product_title">
                                          <div className="product_title">
                                            <a href="single-product.html">Lorem Ipsum</a>
                                          </div></li>
                                        <li className="li_product_image">
                                          <div className="image">
                                            <a href="single-product.html">
                                              <img src="images/d1.jpg" className="img-responsive" width={200} height={200} />
                                            </a>
                                          </div>
                                        </li>
                                        <li className="li_product_price">
                                          <span className="old_price1" />
                                          <span className="new_price1">€134.00</span>
                                          <span className="saving1" /></li><li>
                                        </li><li className="li_product_desc">
                                          <div className="caption">
                                            <p>
                                              Lorem Ipsum is simply dummy text of the printing
                                            </p>
                                          </div>
                                        </li>
                                        <li className="li_product_buy_button">
                                          <a className="btn btn-default" id="but" href="cart.html" role="button">
                                            Buy Now!
                                          </a>
                                          <div className="pull-right">
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-heart" /></button>
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-exchange" /></button>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="product-layout  col-md-4 col-sm-6 col-xs-12">
                                  <div className="product-thumb-height">
                                    <div className="product-thumb transition">
                                      <ul>
                                        <li className="li_product_title">
                                          <div className="product_title">
                                            <a href="single-product.html">Lorem second</a>
                                          </div></li>
                                        <li className="li_product_image">
                                          <div className="image">
                                            <a href="single-product.html">
                                              <img src="images/img4.jpg" className="img-responsive" width={200} height={200} />     
                                            </a>
                                          </div>
                                        </li>
                                        <li className="li_product_price">
                                          <span className="old_price1" />
                                          <span className="new_price1">€21.00</span>
                                          <span className="saving1" /></li><li>
                                        </li><li className="li_product_desc">
                                          <div className="caption">
                                            <p>
                                              Lorem Ipsum is simply dummy text of the printing
                                            </p>
                                          </div>
                                        </li>
                                        <li className="li_product_buy_button">
                                          <a className="btn btn-default" id="but" href="cart.html" role="button">
                                            Buy Now!
                                          </a>
                                          <div className="pull-right">
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-heart" /></button>
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-exchange" /></button>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="product-layout  col-md-4 col-sm-6 col-xs-12">
                                  <div className="product-thumb-height">
                                    <div className="product-thumb transition">
                                      <ul>
                                        <li className="li_product_title">
                                          <div className="product_title">
                                            <a href="single-product.html">Lorem BIG-PACK</a>
                                          </div></li>
                                        <li className="li_product_image">
                                          <div className="image">
                                            <a href="single-product.html">
                                              <img src="images/img6.jpg" className="img-responsive" width={200} height={200} />     
                                            </a>
                                          </div>
                                        </li>
                                        <li className="li_product_price">
                                          <span className="old_price1" />
                                          <span className="new_price1">€159.00</span>
                                          <span className="saving1" /></li><li>
                                        </li><li className="li_product_desc">
                                          <div className="caption">
                                            <p>
                                              Lorem Ipsum is simply dummy text of the printing
                                            </p>
                                          </div>
                                        </li>
                                        <li className="li_product_buy_button">
                                          <a className="btn btn-default" id="but" href="cart.html" role="button">
                                            Buy Now!
                                          </a>
                                          <div className="pull-right">
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-heart" /></button>
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-exchange" /></button>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="product-layout  col-md-4 col-sm-6 col-xs-12">
                                  <div className="product-thumb-height">
                                    <div className="product-thumb transition">
                                      <ul>
                                        <li className="li_product_title">
                                          <div className="product_title">
                                            <a href="single-product.html">Officiis phaedrum</a>
                                          </div></li>
                                        <li className="li_product_image">
                                          <div className="image">
                                            <a href="single-product.html">
                                              <img src="images/img13.jpg" className="img-responsive" width={200} height={200} />        
                                            </a>
                                          </div>
                                        </li>
                                        <li className="li_product_price">
                                          <span className="old_price1" />
                                          <span className="new_price1">€26.00</span>
                                          <span className="saving1" /></li><li>
                                        </li><li className="li_product_desc">
                                          <div className="caption">
                                            <p>
                                              Et vel atqui putent, eum ad quidam adipiscing inciderint
                                            </p>
                                          </div>
                                        </li>
                                        <li className="li_product_buy_button">
                                          <a className="btn btn-default" id="but" href="cart.html" role="button">
                                            Buy Now!
                                          </a>
                                          <div className="pull-right">
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-heart" /></button>
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-exchange" /></button>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="product-layout  col-md-4 col-sm-6 col-xs-12">
                                  <div className="product-thumb-height">
                                    <div className="product-thumb transition">
                                      <ul>
                                        <li className="li_product_title">
                                          <div className="product_title">
                                            <a href="single-product.html">Munere vulputate</a>
                                          </div></li>
                                        <li className="li_product_image">
                                          <div className="image">
                                            <a href="single-product.html">
                                              <img src="images/img14.jpg" className="img-responsive" width={200} height={200} />        
                                            </a>
                                          </div>
                                        </li>
                                        <li className="li_product_price">
                                          <span className="old_price1" />
                                          <span className="new_price1">€120.00</span>
                                          <span className="saving1" /></li><li>
                                        </li><li className="li_product_desc">
                                          <div className="caption">
                                            <p>
                                              At affert congue mea, ea est tritani tacimates petentium
                                            </p>
                                          </div>
                                        </li>
                                        <li className="li_product_buy_button">
                                          <a className="btn btn-default" id="but" href="cart.html" role="button">
                                            Buy Now!
                                          </a>
                                          <div className="pull-right">
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-heart" /></button>
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-exchange" /></button>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="product-layout  col-md-4 col-sm-6 col-xs-12">
                                  <div className="product-thumb-height">
                                    <div className="product-thumb transition">
                                      <ul>
                                        <li className="li_product_title">
                                          <div className="product_title">
                                            <a href="single-product.html">Lorem ipsum dolor</a>
                                          </div></li>
                                        <li className="li_product_image">
                                          <div className="image">
                                            <a href="single-product.html">
                                              <img src="images/img15.jpg" className="img-responsive" width={200} height={200} />        
                                            </a>
                                          </div>
                                        </li>
                                        <li className="li_product_price">
                                          <span className="old_price1" />
                                          <span className="new_price1">€199.00</span>
                                          <span className="saving1" /></li><li>
                                        </li><li className="li_product_desc">
                                          <div className="caption">
                                            <p>
                                              Lorem Ipsum is simply dummy text of the printing
                                            </p>
                                          </div>
                                        </li>
                                        <li className="li_product_buy_button">
                                          <a className="btn btn-default" id="but" href="cart.html" role="button">
                                            Buy Now!
                                          </a>
                                          <div className="pull-right">
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-heart" /></button>
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-exchange" /></button>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="product-layout  col-md-4 col-sm-6 col-xs-12">
                                  <div className="product-thumb-height">
                                    <div className="product-thumb transition">
                                      <ul>
                                        <li className="li_product_title">
                                          <div className="product_title">
                                            <a href="single-product.html">Professional context</a>
                                          </div></li>
                                        <li className="li_product_image">
                                          <div className="image">
                                            <a href="single-product.html">
                                              <img src="images/img16.jpg" className="img-responsive" width={200} height={200} />        
                                            </a>
                                          </div>
                                        </li>
                                        <li className="li_product_price">
                                          <span className="old_price1" />
                                          <span className="new_price1">€126.00</span>
                                          <span className="saving1" /></li><li>
                                        </li><li className="li_product_desc">
                                          <div className="caption">
                                            <p>
                                              In a professional context it often happens that private
                                            </p>
                                          </div>
                                        </li>
                                        <li className="li_product_buy_button">
                                          <a className="btn btn-default" id="but" href="cart.html" role="button">
                                            Buy Now!
                                          </a>
                                          <div className="pull-right">
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-heart" /></button>
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-exchange" /></button>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="product-layout  col-md-4 col-sm-6 col-xs-12">
                                  <div className="product-thumb-height">
                                    <div className="product-thumb transition">
                                      <ul>
                                        <li className="li_product_title">
                                          <div className="product_title">
                                            <a href="single-product.html">Dolorem ipsum</a>
                                          </div></li>
                                        <li className="li_product_image">
                                          <div className="image">
                                            <a href="single-product.html">
                                              <img src="images/img17.jpg" className="img-responsive" width={200} height={200} />        
                                            </a>
                                          </div>
                                        </li>
                                        <li className="li_product_price">
                                          <span className="old_price1" />
                                          <span className="new_price1">€119.00</span>
                                          <span className="saving1" /></li><li>
                                        </li><li className="li_product_desc">
                                          <div className="caption">
                                            <p>
                                              Lorem Ipsum is simply dummy text of the printing
                                            </p>
                                          </div>
                                        </li>
                                        <li className="li_product_buy_button">
                                          <a className="btn btn-default" id="but" href="cart.html" role="button">
                                            Buy Now!
                                          </a>
                                          <div className="pull-right">
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-heart" /></button>
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-exchange" /></button>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="product-layout  col-md-4 col-sm-6 col-xs-12">
                                  <div className="product-thumb-height">
                                    <div className="product-thumb transition">
                                      <ul>
                                        <li className="li_product_title">
                                          <div className="product_title">
                                            <a href="single-product.html">Cicero famously</a>
                                          </div></li>
                                        <li className="li_product_image">
                                          <div className="image">
                                            <a href="single-product.html">
                                              <img src="images/img1.png" className="img-responsive" width={200} height={200} />     
                                            </a>
                                          </div>
                                        </li>
                                        <li className="li_product_price">
                                          <span className="old_price1" />
                                          <span className="new_price1">€171.00</span>
                                          <span className="saving1" /></li><li>
                                        </li><li className="li_product_desc">
                                          <div className="caption">
                                            <p>
                                              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
                                            </p>
                                          </div>
                                        </li>
                                        <li className="li_product_buy_button">
                                          <a className="btn btn-default" id="but" href="cart.html" role="button">
                                            Buy Now!
                                          </a>
                                          <div className="pull-right">
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-heart" /></button>
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-exchange" /></button>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*--content_2 End--!*/}
                            {/*--content_3--!*/}
                            <div className="contentText">
                              <h1>Specials</h1>
                              <div className="row margin-top product-layout_width">
                                <div className="product-layout  col-md-4 col-sm-6 col-xs-12">
                                  <div className="product-thumb-height">
                                    <div className="product-thumb transition">
                                      <ul>
                                        <li className="li_product_title">
                                          <div className="product_title">
                                            <a href="single-product.html">Aroma Therapy</a>
                                          </div></li>
                                        <li className="li_product_image">
                                          <div className="image">
                                            <a href="single-product.html">
                                              <img src="images/d17.jpg" className="img-responsive" width={200} height={200} />
                                            </a>
                                          </div>
                                        </li>
                                        <li className="li_product_price">
                                          <span className="old_price1" />
                                          <span className="new_price1">€134.00</span>
                                          <span className="saving1" /></li><li>
                                        </li><li className="li_product_desc">
                                          <div className="caption">
                                            <p>
                                              Lorem Ipsum is simply dummy text of the printing
                                            </p>
                                          </div>
                                        </li>
                                        <li className="li_product_buy_button">
                                          <a className="btn btn-default" id="but" href="cart.html" role="button">
                                            Buy Now!
                                          </a>
                                          <div className="pull-right">
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-heart" /></button>
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-exchange" /></button>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="product-layout  col-md-4 col-sm-6 col-xs-12">
                                  <div className="product-thumb-height">
                                    <div className="product-thumb transition">
                                      <ul>
                                        <li className="li_product_title">
                                          <div className="product_title">
                                            <a href="single-product.html">Herbal</a>
                                          </div></li>
                                        <li className="li_product_image">
                                          <div className="image">
                                            <a href="single-product.html">
                                              <img src="images/d21.jpg" className="img-responsive" width={200} height={200} />      
                                            </a>
                                          </div>
                                        </li>
                                        <li className="li_product_price">
                                          <span className="old_price1" />
                                          <span className="new_price1">€21.00</span>
                                          <span className="saving1" /></li><li>
                                        </li><li className="li_product_desc">
                                          <div className="caption">
                                            <p>
                                              Lorem Ipsum is simply dummy text of the printing
                                            </p>
                                          </div>
                                        </li>
                                        <li className="li_product_buy_button">
                                          <a className="btn btn-default" id="but" href="cart.html" role="button">
                                            Buy Now!
                                          </a>
                                          <div className="pull-right">
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-heart" /></button>
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-exchange" /></button>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="product-layout  col-md-4 col-sm-6 col-xs-12">
                                  <div className="product-thumb-height">
                                    <div className="product-thumb transition">
                                      <ul>
                                        <li className="li_product_title">
                                          <div className="product_title">
                                            <a href="single-product.html">Pills Drug</a>
                                          </div></li>
                                        <li className="li_product_image">
                                          <div className="image">
                                            <a href="single-product.html">
                                              <img src="images/d23.jpg" className="img-responsive" width={200} height={200} />      
                                            </a>
                                          </div>
                                        </li>
                                        <li className="li_product_price">
                                          <span className="old_price1" />
                                          <span className="new_price1">€235.00</span>
                                          <span className="saving1" /></li><li>
                                        </li><li className="li_product_desc">
                                          <div className="caption">
                                            <p>
                                              Lorem Ipsum is simply dummy text of the printing
                                            </p>
                                          </div>
                                        </li>
                                        <li className="li_product_buy_button">
                                          <a className="btn btn-default" id="but" href="cart.html" role="button">
                                            Buy Now!
                                          </a>
                                          <div className="pull-right">
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-heart" /></button>
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-exchange" /></button>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div> 
                                <div className="product-layout  col-md-4 col-sm-6 col-xs-12">
                                  <div className="product-thumb-height">
                                    <div className="product-thumb transition">
                                      <ul>
                                        <li className="li_product_title">
                                          <div className="product_title">
                                            <a href="single-product.html">Capsule Pill</a>
                                          </div></li>
                                        <li className="li_product_image">
                                          <div className="image">
                                            <a href="single-product.html">
                                              <img src="images/d2.jpg" className="img-responsive" width={200} height={200} />       
                                            </a>
                                          </div>
                                        </li>
                                        <li className="li_product_price">
                                          <span className="old_price1" />
                                          <span className="new_price1">€137.00</span>
                                          <span className="saving1" /></li><li>
                                        </li><li className="li_product_desc">
                                          <div className="caption">
                                            <p>
                                              Lorem Ipsum is simply dummy text of the printing
                                            </p>
                                          </div>
                                        </li>
                                        <li className="li_product_buy_button">
                                          <a className="btn btn-default" id="but" href="cart.html" role="button">
                                            Buy Now!
                                          </a>
                                          <div className="pull-right">
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-heart" /></button>
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-exchange" /></button>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="product-layout  col-md-4 col-sm-6 col-xs-12">
                                  <div className="product-thumb-height">
                                    <div className="product-thumb transition">
                                      <ul>
                                        <li className="li_product_title">
                                          <div className="product_title">
                                            <a href="single-product.html">Medication Cure</a>
                                          </div></li>
                                        <li className="li_product_image">
                                          <div className="image">
                                            <a href="single-product.html">
                                              <img src="images/d7.jpg" className="img-responsive" width={200} height={200} />       
                                            </a>
                                          </div>
                                        </li>
                                        <li className="li_product_price">
                                          <span className="old_price1" />
                                          <span className="new_price1">€212.00</span>
                                          <span className="saving1" /></li><li>
                                        </li><li className="li_product_desc">
                                          <div className="caption">
                                            <p>
                                              Lorem Ipsum is simply dummy text of the printing
                                            </p>
                                          </div>
                                        </li>
                                        <li className="li_product_buy_button">
                                          <a className="btn btn-default" id="but" href="cart.html" role="button">
                                            Buy Now!
                                          </a>
                                          <div className="pull-right">
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-heart" /></button>
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-exchange" /></button>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="product-layout  col-md-4 col-sm-6 col-xs-12">
                                  <div className="product-thumb-height">
                                    <div className="product-thumb transition">
                                      <ul>
                                        <li className="li_product_title">
                                          <div className="product_title">
                                            <a href="single-product.html">China GuangDong Seeds</a>
                                          </div></li>
                                        <li className="li_product_image">
                                          <div className="image">
                                            <a href="single-product.html">
                                              <img src="images/d15.jpg" className="img-responsive" width={200} height={200} />      
                                            </a>
                                          </div>
                                        </li>
                                        <li className="li_product_price">
                                          <span className="old_price1" />
                                          <span className="new_price1">€129.00</span>
                                          <span className="saving1" /></li><li>
                                        </li><li className="li_product_desc">
                                          <div className="caption">
                                            <p>
                                              Lorem Ipsum is simply dummy text of the printing
                                            </p>
                                          </div>
                                        </li>
                                        <li className="li_product_buy_button">
                                          <a className="btn btn-default" id="but" href="cart.html" role="button">
                                            Buy Now!
                                          </a>
                                          <div className="pull-right">
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-heart" /></button>
                                            <button type="button" className="btn btn-primary wish_button"><i className="fa fa-exchange" /></button>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*--content_3 End--!*/}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                              <a href="#">Privacy Policy</a> <br className="disable_content" />
                              <a href="#">Terms &amp; Conditions</a> | 
                              <a href="#">Contact Us</a> | 
                              <a href="#">Site Map<span /></a>
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-3 col-xs-12">
                            <div id="social_icons" className="pull-right">
                              <a href="#" className="btn btn-default reg_button"><i className="fa fa-facebook" /></a>
                              <a href="#" className="btn btn-default reg_button"><i className="fa fa-twitter" /></a>
                              <a href="#" className="btn btn-default reg_button"><i className="fa fa-yahoo" /></a>
                              <a href="#" className="btn btn-default reg_button"><i className="fa fa-envelope" /></a>
                              <a href="#" className="btn btn-default reg_button"><i className="fa fa-linkedin" /></a>   
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
                <a style={{display: 'none'}} href="javascript:void(0);" className="scrollTop back-to-top" id="back-to-top">
                  <i className="fa fa-chevron-up" />
                </a>
            </div>
        );
    }
}

export default App;