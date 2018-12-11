import React, { Component, Fragment} from 'react';

class Category extends Component {
    render() {
        return (
        	<Fragment>
            	<div className="col-md-3 col-sm-4 col-xs-12 left_sidebar1">
				    <div id="left_part">
				        <div className="bs-example">
				            <div className="panel-group" id="accordion">
				                <div className="panel panel-default">
				                    <div className="panel-heading">
				                        <div className="infoBoxHeading">
				                            <a
				                                data-toggle="collapse"
				                                data-parent="#accordion"
				                                href="#collapseOne"
				                            >
				                                Categories
				                            </a>
				                            <a
				                                data-toggle="collapse"
				                                data-parent="#accordion"
				                                href="#collapseOne"
				                            >
				                                <i
				                                    id="accordan_plus"
				                                    className="indicator glyphicon glyphicon-chevron-down  pull-right"
				                                />
				                            </a>
				                        </div>
				                    </div>
				                    <div
				                        id="collapseOne"
				                        className="panel-collapse collapse in"
				                    >
				                        <div className="panel-body">
				                            <div className="infoBoxContents">
				                                <a href="/products">Category One</a>
				                                &nbsp;(94)
				                                <br />
				                                <a href="/products">Category Two</a>&nbsp;(9)
				                                <br />
				                                <a href="/products">Category Three</a>
				                                &nbsp;(5)
				                                <br />
				                                <a href="/products">Category Four</a>
				                                &nbsp;(6)
				                                <br />
				                                <a href="/products">Category Five</a>
				                                &nbsp;(94)
				                                <br />
				                                <a href="/products">Category Six</a>
				                                &nbsp;(94)
				                                <br />
				                                <a href="/products">Category Seven</a>
				                            </div>
				                        </div>
				                    </div>
				                </div>
				                <div className="panel panel-default">
				                    <div className="panel-heading">
				                        <div className="infoBoxHeading">
				                            <a
				                                data-toggle="collapse"
				                                data-parent="#accordion"
				                                href="#collapseTwo"
				                            >
				                                What's New?
				                            </a>
				                            <a
				                                data-toggle="collapse"
				                                data-parent="#accordion"
				                                href="#collapseTwo"
				                            >
				                                <i
				                                    id="accordan_plus"
				                                    className="indicator glyphicon glyphicon-chevron-up  pull-right accordan_plus"
				                                />
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
				                                        <a href="/product/1">
				                                            <img
				                                                src="http://localhost:3000/images/img4.jpg"
				                                                className="img-responsive"
				                                            />
				                                        </a>
				                                    </div>
				                                    <a href="/product/1">
				                                        Lorem Simply
				                                    </a>
				                                    <br />
				                                    €21.00
				                                </div>
				                            </div>
				                        </div>
				                    </div>
				                </div>
				                <div className="panel panel-default">
				                    <div className="panel-heading">
				                        <div className="infoBoxHeading">
				                            <a
				                                data-toggle="collapse"
				                                data-parent="#accordion"
				                                href="#collapseThree"
				                            >
				                                Information
				                            </a>
				                            <a
				                                data-toggle="collapse"
				                                data-parent="#accordion"
				                                href="#collapseThree"
				                            >
				                                <i
				                                    id="accordan_plus"
				                                    className="indicator glyphicon glyphicon-chevron-up  pull-right"
				                                />
				                            </a>
				                        </div>
				                    </div>
				                    <div id="collapseThree" className="panel-collapse collapse">
				                        <div className="panel-body">
				                            <div className="infoBoxContents">
				                                <a href="#">Shipping &amp; Returns</a>
				                                <br />
				                                <a href="#">Privacy Notice</a>
				                                <br />
				                                <a href="#">Conditions of Use</a>
				                                <br />
				                                <a href="#">Contact Us</a>
				                            </div>
				                        </div>
				                    </div>
				                </div>
				                <div className="panel panel-default">
				                    <div className="panel-heading">
				                        <div className="infoBoxHeading">
				                            <a
				                                data-toggle="collapse"
				                                data-parent="#accordion"
				                                href="#collapseFour"
				                            >
				                                Bestsellers
				                            </a>
				                            <a
				                                data-toggle="collapse"
				                                data-parent="#accordion"
				                                href="#collapseFour"
				                            >
				                                <i
				                                    id="accordan_plus"
				                                    className="indicator glyphicon glyphicon-chevron-up  pull-right"
				                                />
				                            </a>
				                        </div>
				                    </div>
				                    <div id="collapseFour" className="panel-collapse collapse">
				                        <div className="panel-body">
				                            <div className="infoBoxContents" id="sidebar">
				                                <a href="/product/1">
				                                    <img
				                                        src="http://localhost:3000/images/img4.jpg"
				                                        className="img-responsive"
				                                    />
				                                </a>
				                                <a href="/product/1">
				                                    Lorem Big Block
				                                </a>
				                                <br />
				                                <del />
				                                <span className="productSpecialPrice">
				                                    €21.00
				                                </span>
				                            </div>
				                        </div>
				                    </div>
				                </div>
				                <div className="panel panel-default">
				                    <div className="panel-heading">
				                        <div className="infoBoxHeading">
				                            <a
				                                data-toggle="collapse"
				                                data-parent="#accordion"
				                                href="#collapseFive"
				                            >
				                                Specials
				                            </a>
				                            <a
				                                data-toggle="collapse"
				                                data-parent="#accordion"
				                                href="#collapseFive"
				                            >
				                                <i
				                                    id="accordan_plus"
				                                    className="indicator glyphicon glyphicon-chevron-up  pull-right"
				                                />
				                            </a>
				                        </div>
				                    </div>
				                    <div id="collapseFive" className="panel-collapse collapse">
				                        <div className="panel-body">
				                            <div className="infoBoxContents" id="sidebar">
				                                <a href="/product/1">
				                                    <img
				                                        src="http://localhost:3000/images/img6.jpg"
				                                        className="img-responsive"
				                                    />
				                                </a>
				                                <a href="/product/1">
				                                    Lorem Big Block
				                                </a>
				                                <br />
				                                <del />
				                                <span className="productSpecialPrice">
				                                    €21.00
				                                </span>
				                            </div>
				                        </div>
				                    </div>
				                </div>
				            </div>
				        </div>
				    </div>
				</div>


            </Fragment>
        );
    }
}

export default Category;