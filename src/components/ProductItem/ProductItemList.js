import React, { Component, Fragment} from 'react';

class ProductItemList extends Component {
    render() {
        return (
        	<Fragment>
            	<div className="product-layout product-list col-xs-12">
                    <div className="product-thumb">
                        <div className="image">
                            <a href="/product/1">
                                <img
                                    className="img-responsive"
                                    src="http://localhost:3000/images/d26.jpg"
                                    width={200}
                                    height={200}
                                />
                            </a>
                        </div>
                        <div
                            className="product-details-box"
                            style={{ overflow: "hidden" }}
                        >
                            <div className="caption">
                                <h4 className="product_title">
                                    <a href="/product/1">Lorem small</a>
                                </h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry....
                                </p>
                                <p className="price">
                                    <span className="new_price">€110.00</span>
                                    <span className="old_price">€122.00</span>
                                    <span className="price-tax">
                                        Ex Tax: €90.00
                                    </span>
                                </p>
                            </div>
                            {/*<div class="button-group">!*/}
                            <a
                                className="btn book-btn btn-default reg_button"
                                href="/cart"
                            >
                                BUY NOW!
                            </a>
                            <div className="pull-right">
                                <button
                                    data-toggle="tooltip"
                                    type="button"
                                    className="btn wish_button btn-default reg_button"
                                >
                                    <i className="fa fa-heart" />
                                </button>
                                <button
                                    data-toggle="tooltip"
                                    type="button"
                                    className="btn wish_button btn-default reg_button"
                                >
                                    <i className="fa fa-exchange" />
                                </button>
                            </div>
                            {/*</div>!*/}
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ProductItemList;