import React, { Component, Fragment } from 'react';
import ProductLayout from './../../components/ProductLayout/ProductLayout';
import ProductItem from './../../components/ProductItem/ProductItem';
import Category from './../../components/Category/Category';
import $ from 'jquery';
import { actFetchProductsRequest, actFetchCategoriesRequest, actAddCart } from './../../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class HomePage extends Component {

    componentDidMount() {
        this.props.fetchAllCategories();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.products.length === 0) {
            var { categories } = nextProps;
            var result = [];

            if (categories.length > 0) {
                categories.map((category) => {
                    result.push(category.id);
                });
            }
            result.map((id) => {
                this.props.fetchAllProducts(id);
            });
        }
    }

    onBuy = (product) => {
        this.props.addToCart(product);
    }

    render() {
        var { products, categories } = this.props;
        // console.log(products);
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
							                <h1>New Products For December</h1>
							                
							                    <ProductLayout>							                    
							                    	{this.showProducts(products, categories)}
							                    </ProductLayout>
							                
							            </div>
							            {/*--content_2 End--!*/}
							            {/*--content_3--!*/}
							            <div className="contentText">
							                <h1>Specials</h1>
							                <div className="row margin-top product-layout_width">
							                    <ProductLayout>
							                    	{this.showProducts(products, categories)}
							                    </ProductLayout>
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

    showProducts(products, categories) {
        var result = null;
        var dem = 0;
        if (products.length > 0 && products.length === categories.length) {
        	result = products.map((productsEachCategory, index) => {
                return(
                	productsEachCategory.map((product, index) => {
                		if (dem < 6) {
                			dem = dem + 1;
                			return(
		                		<ProductItem
			                        key={index}
			                        product={product}
			                        index={index}
			                        onBuy={this.onBuy}
			                	/>
		                	);      
                		}             
	                })
	            );
            });
        }
        return result;
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

const mapStateToProps = state => {
    return {
        products: state.products,
        categories: state.categories
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: (id) => {
            dispatch(actFetchProductsRequest(id));
        },
        fetchAllCategories: () => {
            dispatch(actFetchCategoriesRequest());
        },
        addToCart: (id) => {
            dispatch(actAddCart(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);