import React, { Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
    render() {
        var { product, index } = this.props;
        // console.log(product);
        return (
        	<Fragment>
                <div className="product-layout  col-md-4 col-sm-6 col-xs-12">
                    <div className="product-thumb-height">
                        <div className="product-thumb transition">
                        	<ul>
                                <li className="li_product_title">
                                    <div className="product_title">
                                        <Link to={`/product/${product.id}`}>
                                            {product.name}
                                        </Link>
                                    </div>
                                </li>
                                <li className="li_product_image">
                                    <div className="image">
                                        <Link to={`/product/${product.id}`}>
                                            <img
                                                src={product.img}
                                                className="img-responsive"
                                                width={200}
                                                height={200}
                                                alt=""
                                            />
                                        </Link>
                                    </div>
                                </li>
                                <li className="li_product_price">
                                    <span className="old_price1" />
                                    <span className="new_price1">
                                        €{product.price}
                                    </span>
                                    <span className="saving1" />
                                </li>
                                <li />
                                <li className="li_product_desc">
                                    <div className="caption">
                                        <p>
                                            {product.description}
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
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default ProductItem;