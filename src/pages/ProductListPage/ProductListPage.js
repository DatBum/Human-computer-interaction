import React, { Component, Fragment } from 'react';
import ProductItemList from './../../components/ProductItem/ProductItemList';
import Category from './../../components/Category/Category';
import $ from 'jquery';
import { actFetchProductsRequest, actFetchCategoriesRequest } from './../../actions/index';
import { connect } from 'react-redux';

class ProductListPage extends Component {

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

    render() {
        var { products, categories } = this.props;
        return (
            <Fragment>
                <div id="site_content">
                    <div className="container">
                        <div className="row">
                            <Category />
                            <div className="col-md-9 col-sm-8 col-xs-12" id="content">
                                <div className="contentText">
                                    <div className="breadcrumbs">
                                        <a href="/">
                                            <i className="fa fa-home" />
                                        </a>
                                        <a href="#">Product List</a>
                                    </div>
                                    <h1>Lorem</h1>
                                    <div className="row">
                                        <div className="col-sm-2 col-xs-6">
                                            <img className="img-thumbnail" src="http://localhost:3000/images/img1.png" />
                                        </div>
                                        <div className="col-sm-10 col-xs-6">
                                            <p>Example of category description text</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <h3>Refine Search</h3>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <ul>
                                                <li>
                                                    <a href="#">Ab (0)</a>
                                                </li>
                                                <li>
                                                    <a href="#">AB-one (1)</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p>
                                        <a id="compare-total" href="#">
                                            Product Compare (0)
                                        </a>
                                    </p>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="btn-group hidden-xs">
                                                <a className="btn btn-default" id="list-view">
                                                    <i className="fa fa-th-list" />
                                                </a>
                                                <a
                                                    className="btn btn-default"
                                                    id="grid-view"
                                                    href="/products"
                                                >
                                                    <i className="fa fa-th" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-2 text-right txt-left">
                                            <label htmlFor="input-sort" className="control-label">
                                                Sort By:
                                            </label>
                                        </div>
                                        <div className="col-md-3 text-right">
                                            <select className="form-control" id="input-sort">
                                                <option defaultValue="selected">Default</option>
                                                <option>Name (Z - A)</option>
                                            </select>
                                        </div>
                                        <div className="col-md-1 text-right txt-left">
                                            <label htmlFor="input-limit" className="control-label">
                                                Show:
                                            </label>
                                        </div>
                                        <div className="col-md-2 text-right">
                                            <select className="form-control" id="input-limit">
                                                <option defaultValue="selected">15</option>
                                                <option>25</option>
                                                <option>50</option>
                                                <option>75</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row margin-top">
                                        {this.showProducts(products, categories)}
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 text-left" />
                                        <div className="col-sm-6 text-right">
                                            Showing 1 to 12 of 12 (1 Pages)
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

    showProducts(products, categories) {
        var result = null;
        if (products.length > 0 && products.length === categories.length) {
            result = products.map((productsEachCategory, index) => {
                return(
                    productsEachCategory.map((product, index) => {
                        return(
                            <ProductItemList
                                key={index}
                                product={product}
                                index={index}
                            />
                        );                   
                    })
                );
            });
            console.log(result);
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);