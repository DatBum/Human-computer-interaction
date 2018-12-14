import React, { Component, Fragment } from 'react';
import ProductLayout from './../../components/ProductLayout/ProductLayout';
import ProductItem from './../../components/ProductItem/ProductItem';
import Category from './../../components/Category/Category';
import $ from 'jquery';
import { actFetchProductsRequest, actFetchCategoriesRequest, actAddCart, actSearch } from './../../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SearchPage extends Component {

    componentDidMount() {
        this.props.fetchAllCategories();
    }

    componentWillReceiveProps(nextProps) {
        var { products, categories, searchProducts } = nextProps;
        if (nextProps && nextProps.products.length === 0) {
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
        var { match } = this.props;
        if (match) {
        	var { text } = match.params;
        }
        if (products.length === categories.length && searchProducts.length === 0 && localStorage.count <2) {
        	localStorage.count = Number(localStorage.count) + 1;
        	products.map((productsEachCategory, index) => {
        		productsEachCategory.map((product, index) => {
        			this.props.addSearchProduct(product, text);
        		});
        	});
        }
    }

    onBuy = (product) => {
        this.props.addToCart(product);
    }

    render() {
        var { searchProducts } = this.props;
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
							            {/*--content_2 For Search Products--!*/}
							            <div className="contentText">
							                
							                {this.showTitle(searchProducts)}
							                
							                    <ProductLayout>							                    
							                    	{this.showProducts(searchProducts)}
							                    </ProductLayout>
							                
							            </div>
							            {/*--content_2 End--!*/}
							        </div>
							    </div>
							</div>
						</div>
		            </div>
		        </div>

            </Fragment>
        );
    }

    showTitle(searchProducts) {
    	if (searchProducts.length > 0) {
    		return(
    			<h1>Found {searchProducts.length} Products</h1>
			);
    	}
    	else return (
    			<h1>Product Not Found!</h1>
    		);
    }

    showProducts(searchProducts) {
        var result = null;
        if (searchProducts.length > 0) {
        	result = searchProducts.map((product, index) => {
    			return(
            		<ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onBuy={this.onBuy}
                	/>
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

const mapStateToProps = state => {
    return {
        products: state.products,
        categories: state.categories,
        searchProducts: state.searchProducts
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
        },
        addSearchProduct: (product, name) => {
        	dispatch(actSearch(product, name));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);