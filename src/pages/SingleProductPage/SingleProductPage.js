import React, { Component, Fragment } from 'react';
import ProductLayout from './../../components/ProductLayout/ProductLayout';
import ProductItem from './../../components/ProductItem/ProductItem';
import Category from './../../components/Category/Category';
import ProductItemSingle from './../../components/ProductItem/ProductItemSingle';
import $ from 'jquery';
import { actFetchCategoriesRequest, actFetchProductsRequest, actAddCart } from './../../actions/index';
import { connect } from 'react-redux';

class SingleProductPage extends Component {

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
        var { products, categories, match } = this.props;
        var id = 0;
        if (match) {
            id = match.params.id;
        }
        return (
            <Fragment>
                <div id="site_content">
                    <div className="container">
                        <div className="row">
                            <Category />
                            <div className="col-md-9 col-sm-8 col-xs-12" id="content">
                                <div className="breadcrumbs">
                                    <a href="/">
                                        <i className="fa fa-home" />
                                    </a>
                                    <a>Lorem</a>
                                </div>
                                    {this.showProducts(products, categories, id)}
                                <div className="rel-product">
                                    <div className="infoBoxHeading">
                                        <a>Related Product</a>
                                    </div>
                                    <div className="row product-layout_width">
                                        <ProductLayout>                                             
                                            {this.showProducts(products, categories, 0)}
                                        </ProductLayout>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

    showProducts(products, categories, id) {
        var result = null;
        if (id === 0) {
            var dem = 0;
            if (products.length > 0 && products.length === categories.length) {
                result = products.map((productsEachCategory, index) => {
                    return(
                        productsEachCategory.map((product, index) => {
                            if (dem < 3) {
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
        } else {
            if (products.length > 0 && products.length === categories.length) {
                products.map((productsEachCategory, index) => {
                    productsEachCategory.map((product, index) => {
                        if (product.id === id)
                            result = (<ProductItemSingle
                                            key={index}
                                            product={product}
                                            index={index}
                                            onBuy={this.onBuy}
                                        />)
                    })
                });
            }
        }
        return result;
    }

}

$("document").ready(function() {

    $(".galleryimg").on("click", function() {
        var src = $(this).attr('src');
        console.log(src)
        $(".changeimg").attr('src', src);
    });
});

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

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductPage);