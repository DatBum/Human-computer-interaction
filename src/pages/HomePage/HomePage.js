import React, { Component, Fragment } from 'react';
import ProductLayout from './../../components/ProductLayout/ProductLayout';
import Category from './../../components/Category/Category';
import $ from 'jquery';

class HomePage extends Component {                   
    render() {
        return (
            <Fragment>
	            <div id="site_content">
		            <div className="container">
		                <div className="row">
			            	<Category />
			                <div className="col-md-9 col-sm-8 col-xs-12 right_sidebar1">
							    <div id="right_part">
							        <div className="contentContainer">
							            <div className="contentText">
							                <div className="breadcrumbs">
							                    <a href="/" className="headerNavigation">
							                        <i className="fa fa-home" />
							                    </a>
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
							                                        <a href="/product/1">
							                                            <img
							                                            	alt=""
							                                                className="carasoul_image"
							                                                src="http://localhost:3000/images/d1.jpg"
							                                            />
							                                        </a>
							                                    </span>
							                                    <a
							                                        className="btn btn-default"
							                                        href="/cart"
							                                        role="button"
							                                    >
							                                        Buy Now!
							                                    </a>
							                                </div>
							                                <div className="item">
							                                    <span>
							                                        <a href="/product/1">
							                                            <img
							                                            	alt=""
							                                                className="carasoul_image"
							                                                src="http://localhost:3000/images/img4.jpg"
							                                            />
							                                        </a>
							                                    </span>
							                                    <a
							                                        className="btn btn-default"
							                                        href="/cart"
							                                        role="button"
							                                    >
							                                        Buy Now!
							                                    </a>
							                                </div>
							                                <div className="item">
							                                    <span>
							                                        <a href="/product/1">
							                                            <img
							                                            	alt=""
							                                                className="carasoul_image"
							                                                src="http://localhost:3000/images/img6.jpg"
							                                            />
							                                        </a>
							                                    </span>
							                                    <a
							                                        className="btn btn-default"
							                                        href="/cart"
							                                        role="button"
							                                    >
							                                        Buy Now!
							                                    </a>
							                                </div>
							                                <div className="item">
							                                    <span>
							                                        <a href="/product/1">
							                                            <img
							                                            	alt=""
							                                                className="carasoul_image"
							                                                src="http://localhost:3000/images/img13.jpg"
							                                            />
							                                        </a>
							                                    </span>
							                                    <a
							                                        className="btn btn-default"
							                                        href="/cart"
							                                        role="button"
							                                    >
							                                        Buy Now!
							                                    </a>
							                                </div>
							                                <div className="item">
							                                    <span>
							                                        <a href="/product/1">
							                                            <img
							                                            	alt=""
							                                                className="carasoul_image"
							                                                src="http://localhost:3000/images/img14.jpg"
							                                            />
							                                        </a>
							                                    </span>
							                                    <a
							                                        className="btn btn-default"
							                                        href="/cart"
							                                        role="button"
							                                    >
							                                        Buy Now!
							                                    </a>
							                                </div>
							                                <div className="item">
							                                    <span>
							                                        <a href="/product/1">
							                                            <img
							                                            	alt=""
							                                                className="carasoul_image"
							                                                src="http://localhost:3000/images/img16.jpg"
							                                            />
							                                        </a>
							                                    </span>
							                                    <a
							                                        className="btn btn-default"
							                                        href="/cart"
							                                        role="button"
							                                    >
							                                        Buy Now!
							                                    </a>
							                                </div>
							                                <div className="item">
							                                    <span>
							                                        <a href="/product/1">
							                                            <img
							                                            	alt=""
							                                                className="carasoul_image"
							                                                src="http://localhost:3000/images/img15.jpg"
							                                            />
							                                        </a>
							                                    </span>
							                                    <a
							                                        className="btn btn-default"
							                                        href="/cart"
							                                        role="button"
							                                    >
							                                        Buy Now!
							                                    </a>
							                                </div>
																{/*<div class="item">
			                                                            <span>
			                                                                <a href="/product/1">
			                                                                    <img class="carasoul_image" src="http://localhost:3000/images/d25.jpg">
			                                                                </a></span>
			                                                            <a class="btn btn-default"  href="/cart" role="button" >
			                                                                Buy Now!
			                                                            </a>
			                                                        </div>*/}
							                                <div className="item">
							                                    <span>
							                                        <a href="/product/1">
							                                            <img
							                                                className="carasoul_image"
							                                                src="http://localhost:3000/images/img1.png"
							                                            />
							                                        </a>
							                                    </span>
							                                    <a
							                                        className="btn btn-default"
							                                        href="/cart"
							                                        role="button"
							                                    >
							                                        Buy Now!
							                                    </a>
							                                </div>
							                                <div className="item">
							                                    <span>
							                                        <a href="/product/1">
							                                            <img
							                                                className="carasoul_image"
							                                                src="http://localhost:3000/images/d2.jpg"
							                                            />
							                                        </a>
							                                    </span>
							                                    <a
							                                        className="btn btn-default"
							                                        href="/cart"
							                                        role="button"
							                                    >
							                                        Buy Now!
							                                    </a>
							                                </div>
							                                <div className="item">
							                                    <span>
							                                        <a href="/product/1">
							                                            <img
							                                                className="carasoul_image"
							                                                src="http://localhost:3000/images/d7.jpg"
							                                            />
							                                        </a>
							                                    </span>
							                                    <a
							                                        className="btn btn-default"
							                                        href="/cart"
							                                        role="button"
							                                    >
							                                        Buy Now!
							                                    </a>
							                                </div>
							                            </div> 
						                	
							                        </div>
							                        {/*</div>*/}
							                    </div>
							                </div>
							            </div>
							            {/*--slidder End-!*/}
							            {/*--content_1--!*/}
							            <div className="contentText Static">
							                <h1>What is Lorem Ipsum?</h1>
							                <p>
							                    Lorem Ipsum is simply dummy text of the printing and
							                    typesetting industry. Lorem Ipsum has been the industry's
							                    standard dummy text ever since the 1500s{" "}
							                </p>
							                <p>
							                    Letraset sheets containing Lorem Ipsum passages, and more
							                    recently with desktop publishing software like Aldus
							                    PageMaker including versions of Lorem Ipsum.
							                </p>
							            </div>
							            {/*--content_1 End--!*/}
							            {/*--content_2 For New Products--!*/}
							            <div className="contentText">
							                <h1>New Products For March</h1>
							                <div className="row margin-top product-layout_width">
							                    <ProductLayout />
							                    <ProductLayout />
							                    <ProductLayout />
							                    <ProductLayout />
							                    <ProductLayout />
							                    <ProductLayout />
							                    <ProductLayout />
							                    <ProductLayout />
							                    <ProductLayout />
							                </div>
							            </div>
							            {/*--content_2 End--!*/}
							            {/*--content_3--!*/}
							            <div className="contentText">
							                <h1>Specials</h1>
							                <div className="row margin-top product-layout_width">
							                    <ProductLayout />
							                    <ProductLayout />
							                    <ProductLayout />
							                    <ProductLayout />
							                    <ProductLayout />
							                    <ProductLayout />
							                </div>
							            </div>
							            {/*--content_3 End--!*/}
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

function toggleChevron(e) {
    $(e.target)
            .prev('.panel-heading')
            .find("i.indicator")
            .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);

// $(document).ready(function () {
//     $('.owl-carousel').owlCarousel({
//         loop: true,
//         margin: 10,
//         responsiveClass: true,
//         responsive: {
//             0: {
//                 items: 2,
//                 nav: true
//             },
//             600: {
//                 items: 3,
//                 nav: false
//             },
//             1000: {
//                 items: 5,
//                 nav: true,
//                 loop: false,
//                 margin: 20
//             }

//         }
//     });
// });

export default HomePage;