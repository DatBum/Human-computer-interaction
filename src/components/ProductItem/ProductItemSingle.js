import React, { Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return({
    currency: state.HeaderReducers.selectedCurrency
  })
}
class ProductItemSingle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        };
    }

    onAddCart = (e, id) => {
        e.nativeEvent.stopImmediatePropagation();
        if (confirm('Bạn chắc chắn muốn mua?')) { //eslint-disable-line
            this.props.onBuy(id);
            localStorage.setItem(this.props.product.id, this.state.quantity);
        }
    }

    onChange = (e) => {
        var target = e.target;
        var { value } = target;
        const re = /^[1-9\b]+$/;
        if (value === '' || re.test(value)) {
            this.setState({
                quantity: value
            });
        }
        else alert('Bạn đã nhập sai giá trị!');
    }

    getRate = (currency) => {
      switch(currency) {
        case 'VND': return 16000;
        case 'AUD': return 1.4;
        case 'USD': return 1;
      }
    }

    render() {
        const rate = this.getRate(this.props.currency);
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
                                <h2>{this.props.currency}{product.price * rate}</h2>
                            </li>
                            <li>Ex Tax: {this.props.currency}{product.price * rate * 75/100}</li>
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
                                    onChange={this.onChange}
                                />
                                <input type="hidden" defaultValue={49} name="product_id" />
                                <br />
                                <Link 
                                    to={`/cart`} 
                                    className="btn btn-primary btn-lg btn-block reg_button"
                                    onClick={(e) => this.onAddCart(e, product)}
                                >
                                    <i className="fa fa-shopping-cart" /> BUY NOW!
                                </Link>
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

export default connect(mapStateToProps, null)(ProductItemSingle);
