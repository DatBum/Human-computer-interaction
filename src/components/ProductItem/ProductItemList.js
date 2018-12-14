import React, { Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

class ProductItemList extends Component {

    onAddCart = (e, id) => {
        e.nativeEvent.stopImmediatePropagation();
        if (confirm('Bạn chắc chắn muốn mua?')) { //eslint-disable-line
            this.props.onBuy(id);
            localStorage.setItem(this.props.product.id, 1);
        }
    }

    render() {
        var { product } = this.props;
        return (
        	<Fragment>
            	<div className="product-layout product-list col-xs-12">
                    <div className="product-thumb">
                        <div className="image">
                            <Link to={`/product/${product.id}`}>
                                <img
                                    className="img-responsive"
                                    src={product.img}
                                    width={200}
                                    height={200}
                                />
                            </Link>
                        </div>
                        <div
                            className="product-details-box"
                            style={{ overflow: "hidden" }}
                        >
                            <div className="caption">
                                <h4 className="product_title">
                                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                                </h4>
                                <p>
                                    {product.description}
                                </p>
                                <p className="price">
                                    <span className="new_price">${product.price - 10}</span>
                                    <span className="old_price">${product.price}</span>
                                    <span className="price-tax">
                                        Ex Tax: ${product.price *75/100}
                                    </span>
                                </p>
                            </div>
                            {/*<div class="button-group">!*/}
                            <Link
                                className="btn book-btn btn-default reg_button"
                                to="/cart"
                                onClick={(e) => this.onAddCart(e, product)}
                            >
                                BUY NOW!
                            </Link>
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
