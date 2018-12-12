import React, { Component, Fragment} from 'react';

class ProductItemSingle extends Component {
    render() {
        var { product } = this.props;
        return (
        	<Fragment>
            	<div className="row">
                    <div className="col-sm-6">
                        <ul className="thumbnails">
                            <li>
                                <a href="#" className="thumbnail fix-box">
                                    <img className="changeimg" src={product.img} />
                                </a>
                            </li>
                            <li className="image-additional">
                                <a title="Dianabol" className="thumbnail">
                                    <img className="galleryimg" src={product.img} />
                                </a>
                            </li>
                            <li className="image-additional">
                                <a title="Proviron" className="thumbnail">
                                    <img className="galleryimg" src={product.img} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <div className="btn-group">
                            <button className="btn btn-default mr_5" type="button">
                                <i className="fa fa-heart" />
                            </button>
                            <button className="btn btn-default" type="button">
                                <i className="fa fa-exchange" />
                            </button>
                        </div>
                        <h1 style={{ color: "#39baf0" }}>{product.name}</h1>
                        <ul className="list-unstyled product-section">
                            <li>
                                <span>Product Code:</span> {product.id}
                            </li>
                            <li>
                                <span>Reward Points:</span> 1000
                            </li>
                            <li>
                                <span>Availability:</span>{" "}
                                <span className="check-stock">Pre-Order</span>
                            </li>
                        </ul>
                        <ul className="list-unstyled">
                            <li>
                                <h2>€{product.price}</h2>
                            </li>
                            <li>Ex Tax: €{product.price * 75/100}</li>
                        </ul>
                        <div id="product">
                            <div className="form-group">
                                <label htmlFor="input-quantity" className="control-label">
                                    Qty
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="input-quantity"
                                    size={2}
                                    defaultValue={1}
                                    name="quantity"
                                />
                                <input type="hidden" defaultValue={49} name="product_id" />
                                <br />
                                <a
                                    className="btn btn-primary btn-lg btn-block reg_button"
                                    href="/cart"
                                >
                                    <i className="fa fa-shopping-cart" /> BUY NOW!
                                </a>
                            </div>
                        </div>
                        <div className="rating">
                            <p>
                                <span className="fa fa-stack">
                                    <i className="fa fa-star-o fa-stack-1x" />
                                </span>
                                <span className="fa fa-stack">
                                    <i className="fa fa-star-o fa-stack-1x" />
                                </span>
                                <span className="fa fa-stack">
                                    <i className="fa fa-star-o fa-stack-1x" />
                                </span>
                                <span className="fa fa-stack">
                                    <i className="fa fa-star-o fa-stack-1x" />
                                </span>
                                <span className="fa fa-stack">
                                    <i className="fa fa-star-o fa-stack-1x" />
                                </span>
                                <a>0 reviews</a> / <a>Write a review</a>
                            </p>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <ul className="nav nav-tabs">
                            <li>
                                <a
                                    data-toggle="tab"
                                    href="#tab-description"
                                    aria-expanded="false"
                                >
                                    Description
                                </a>
                            </li>
                            <li className="active">
                                <a
                                    data-toggle="tab"
                                    href="#tab-review"
                                    aria-expanded="true"
                                >
                                    Reviews (0)
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div id="tab-description" className="tab-pane">
                                <div className="row ">
                                    <p>
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                            <div id="tab-review" className="tab-pane active">
                                <form id="form-review" className="form-horizontal">
                                    <h2>Write a review</h2>
                                    <div className="form-group required">
                                        <div className="col-sm-12">
                                            <label
                                                htmlFor="input-name"
                                                className="control-label"
                                            >
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="input-name"
                                                name="name"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <div className="col-sm-12">
                                            <label
                                                htmlFor="input-review"
                                                className="control-label"
                                            >
                                                Your Review
                                            </label>
                                            <textarea
                                                className="form-control"
                                                id="input-review"
                                                rows={5}
                                                name="text"
                                                defaultValue={""}
                                            />
                                            <div className="help-block">
                                                <span className="text-danger">Note:</span>{" "}
                                                HTML is not translated!
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <div className="col-sm-12">
                                            <label className="control-label">Rating</label>
                                            &nbsp;&nbsp;&nbsp; Bad&nbsp;
                                            <input
                                                type="radio"
                                                defaultValue={1}
                                                name="rating"
                                            />
                                            &nbsp;
                                            <input
                                                type="radio"
                                                defaultValue={2}
                                                name="rating"
                                            />
                                            &nbsp;
                                            <input
                                                type="radio"
                                                defaultValue={3}
                                                name="rating"
                                            />
                                            &nbsp;
                                            <input
                                                type="radio"
                                                defaultValue={4}
                                                name="rating"
                                            />
                                            &nbsp;
                                            <input
                                                type="radio"
                                                defaultValue={5}
                                                name="rating"
                                            />
                                            &nbsp;Good
                                        </div>
                                    </div>
                                    <div className="buttons clearfix">
                                        <div className="pull-right">
                                            <button
                                                className="btn btn-primary reg_button"
                                                id="button-review"
                                                type="button"
                                            >
                                                <i className="fa fa-caret-right" />
                                                &nbsp; Continue
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ProductItemSingle;