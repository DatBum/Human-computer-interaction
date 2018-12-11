import React, { Component, Fragment} from 'react';

class ProductItem extends Component {
    render() {
        return (
        	<Fragment>
            	<ul>
                    <li className="li_product_title">
                        <div className="product_title">
                            <a href="/product/1">
                                Lorem Ipsum
                            </a>
                        </div>
                    </li>
                    <li className="li_product_image">
                        <div className="image">
                            <a href="/product/1">
                                <img
                                    src="http://localhost:3000/images/d1.jpg"
                                    className="img-responsive"
                                    width={200}
                                    height={200}
                                    alt=""
                                />
                            </a>
                        </div>
                    </li>
                    <li className="li_product_price">
                        <span className="old_price1" />
                        <span className="new_price1">
                            €134.00
                        </span>
                        <span className="saving1" />
                    </li>
                    <li />
                    <li className="li_product_desc">
                        <div className="caption">
                            <p>
                                Lorem Ipsum is simply dummy text
                                of the printing
                            </p>
                        </div>
                    </li>
                    <li className="li_product_buy_button">
                        <a
                            className="btn btn-default"
                            id="but"
                            href="/cart"
                            role="button"
                        >
                            Buy Now!
                        </a>
                        <div className="pull-right">
                            <button
                                type="button"
                                className="btn btn-primary wish_button"
                            >
                                <i className="fa fa-heart" />
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary wish_button"
                            >
                                <i className="fa fa-exchange" />
                            </button>
                        </div>
                    </li>
                </ul>

            </Fragment>
        );
    }
}

export default ProductItem;