import React, { Component } from 'react';
import ProductItemCart from './../../components/ProductItem/ProductItemCart';
import { connect } from 'react-redux';
import { actDeleteCart } from './../../actions/index'; 
import { setNewSum } from '../../actions/HeaderActions';

class CartPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			sumSupport : 0
		};
	}

	componentDidMount(){
		this.setState({
			sumSupport: Number(localStorage.total)
    });
    this.props.setNewSum(Number(localStorage.total));
  }
  
	checkSubSum(sum){
    let newSum;
    newSum = (sum>0) ? Math.round(sum*0.8-2) : 0;
    return newSum;
	}

	onDelete = (id) => {
    this.props.DeleteProductFromCart(id);
	}
  
	onChangeTotal(){
		this.setState({
      sumSupport: Number(localStorage.total)
    });
    this.props.setNewSum(Number(localStorage.total));
	}
  
  render() {
    var { carts } = this.props;
    var { sumSupport } = this.state;
    	// console.log(carts);
      return (
        <div className="main-content">
			    <div className="container cart-block-style">
			        <div className="breadcrumbs">
			            <a href="/">
			                <i className="fa fa-home" />
			            </a>
			            <a href="#">Shopping Cart</a>
			        </div>
			        <div className="contentText">
			            <h1>Shopping Cart &nbsp;(0.00kg)</h1>
			        </div>
			        <form>
			            <div className="table-responsive margin-top">
			                <table className="table table-bordered">
			                    <thead>
			                        <tr>
			                            <td className="text-center" />
			                            <td className="text-left">PRODUCT NAME</td>
			                            <td className="text-left">MODEL</td>
			                            <td className="text-left">QUANTITY</td>
			                            <td className="text-right">UNIT PRICE</td>
			                            <td className="text-right">TOTAL</td>
			                        </tr>
			                    </thead>
			                    <tbody>
			                        {this.showProducts(carts)}
			                    </tbody>
			                </table>
			            </div>
			        </form>
			        <h2>What would you like to do next?</h2>
			        <p>
			            Choose if you have a discount code or reward points you want to use
			            or would like to estimate your delivery cost.
			        </p>
			        <div id="accordion" className="panel-group">
			            <div className="panel panel-default">
			                <div className="panel-heading">
			                    <h4 className="panel-title">
			                        <a
			                            data-parent="#accordion"
			                            data-toggle="collapse"
			                            className="accordion-toggle"
			                            href="#collapse-coupon"
			                            aria-expanded="true"
			                        >
			                            Use Coupon Code <i className="fa fa-caret-down" />
			                        </a>
			                    </h4>
			                </div>
			                <div
			                    className="panel-collapse collapse in"
			                    id="collapse-coupon"
			                    style={{}}
			                    aria-expanded="true"
			                >
			                    <div className="panel-body">
			                        <label
			                            htmlFor="input-coupon"
			                            className="col-sm-2 control-label"
			                        >
			                            Enter your coupon Code here
			                        </label>
			                        <div className="input-group">
			                            <input
			                                type="text"
			                                className="form-control"
			                                id="input-coupon"
			                                placeholder="Enter your coupon Code here"
			                                name="coupon"
			                            />
			                            <span className="input-group-btn">
			                                <input
			                                    type="button"
			                                    className="btn btn-primary"
			                                    id="button-coupon"
			                                    defaultValue="Apply Coupon"
			                                />
			                            </span>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="panel panel-default">
			                <div className="panel-heading">
			                    <h4 className="panel-title">
			                        <a
			                            data-parent="#accordion"
			                            data-toggle="collapse"
			                            className="accordion-toggle collapsed"
			                            href="#collapse-shipping"
			                            aria-expanded="false"
			                        >
			                            Estimate Shipping &amp; Taxes{" "}
			                            <i className="fa fa-caret-down" />
			                        </a>
			                    </h4>
			                </div>
			                <div
			                    className="panel-collapse collapse"
			                    id="collapse-shipping"
			                    style={{ height: "0px" }}
			                    aria-expanded="false"
			                >
			                    <div className="panel-body">
			                        <p>
			                            Enter your destination to get a shipping estimate.
			                        </p>
			                        <div className="form-horizontal">
			                            <div className="form-group required">
			                                <label
			                                    htmlFor="input-country"
			                                    className="col-sm-2 control-label"
			                                >
			                                    Country
			                                </label>
			                                <div className="col-sm-10">
			                                    <select
			                                        className="form-control"
			                                        id="input-country"
			                                        name="country_id"
			                                    >
			                                        <option value>
			                                            {" "}
			                                            --- Please Select ---{" "}
			                                        </option>
			                                        <option value={244}>India</option>
			                                        <option value={1}>Afghanistan</option>
			                                        <option value={2}>Albania</option>
			                                        <option value={3}>Algeria</option>
			                                        <option value={4}>
			                                            American Samoa
			                                        </option>
			                                        <option value={5}>Andorra</option>
			                                        <option value={6}>Angola</option>
			                                        <option value={7}>Anguilla</option>
			                                        <option value={8}>Antarctica</option>
			                                        <option value={9}>
			                                            Antigua and Barbuda
			                                        </option>
			                                        <option value={10}>Argentina</option>
			                                    </select>
			                                </div>
			                            </div>
			                            <div className="form-group required">
			                                <label
			                                    htmlFor="input-zone"
			                                    className="col-sm-2 control-label"
			                                >
			                                    Region / State
			                                </label>
			                                <div className="col-sm-10">
			                                    <select
			                                        className="form-control"
			                                        id="input-zone"
			                                        name="zone_id"
			                                    >
			                                        <option value>
			                                            {" "}
			                                            --- Please Select ---{" "}
			                                        </option>
			                                        <option value={3513}>Aberdeen</option>
			                                        <option value={3514}>
			                                            Aberdeenshire
			                                        </option>
			                                        <option value={3515}>Anglesey</option>
			                                    </select>
			                                </div>
			                            </div>
			                            <div className="form-group required">
			                                <label
			                                    htmlFor="input-postcode"
			                                    className="col-sm-2 control-label"
			                                >
			                                    Post Code
			                                </label>
			                                <div className="col-sm-10">
			                                    <input
			                                        type="text"
			                                        className="form-control"
			                                        id="input-postcode"
			                                        placeholder="Post Code"
			                                        name="postcode"
			                                    />
			                                </div>
			                            </div>
			                            <button
			                                className="btn btn-primary"
			                                id="button-quote"
			                                type="button"
			                            >
			                                Get Quotes
			                            </button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="panel panel-default">
			                <div className="panel-heading">
			                    <h4 className="panel-title">
			                        <a
			                            className="accordion-toggle"
			                            data-parent="#accordion"
			                            data-toggle="collapse"
			                            href="#collapse-voucher"
			                        >
			                            Use Gift Certificate{" "}
			                            <i className="fa fa-caret-down" />
			                        </a>
			                    </h4>
			                </div>
			                <div className="panel-collapse collapse" id="collapse-voucher">
			                    <div className="panel-body">
			                        <label
			                            htmlFor="input-voucher"
			                            className="col-sm-2 control-label"
			                        >
			                            Enter your gift certificate code here
			                        </label>
			                        <div className="input-group">
			                            <input
			                                type="text"
			                                className="form-control"
			                                id="input-voucher"
			                                placeholder="Enter your gift certificate code here"
			                                defaultValue
			                                name="voucher"
			                            />
			                            <span className="input-group-btn">
			                                <input
			                                    type="submit"
			                                    className="btn btn-primary"
			                                    id="button-voucher"
			                                    defaultValue="Apply Gift Certificate"
			                                />
			                            </span>{" "}
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			        <br />
			        <div className="row">
			            <div className="col-sm-4 col-sm-offset-8">
			                <strong style={{ fontSize: "30px", float: "right" }}>
			                    Pricing Details
			                </strong>
			                <table className="table table-bordered">
			                    <tbody>
			                        <tr>
			                            <td className="text-right">
			                                <strong>Sub-Total:</strong>
			                            </td>
			                            <td className="text-right">${this.checkSubSum(Number(localStorage.total))}</td>
			                        </tr>
			                        <tr>
			                            <td className="text-right">Coupon Code:</td>
			                            <td className="text-right">$0</td>
			                        </tr>
			                        <tr>
			                            <td className="text-right">Gift Voucher:</td>
			                            <td className="text-right">$0</td>
			                        </tr>
			                        <tr>
			                            <td className="text-right">Eco Tax (-2.00):</td>
			                            <td className="text-right">$2.00</td>
			                        </tr>
			                        <tr>
			                            <td className="text-right">VAT (20%):</td>
			                            <td className="text-right">{Math.round(Number(localStorage.total)*0.2)}</td>
			                        </tr>
			                        <tr>
			                            <td className="text-right">
			                                <strong>Order Total:</strong>
			                            </td>
			                            <td className="text-right">${Number(localStorage.total)}</td>
			                        </tr>
			                    </tbody>
			                </table>
			            </div>
			        </div>
			        <div className="buttons">
			            <div className="pull-left">
			                <a className="btn btn-default" href="/products">
			                    <i className="fa fa-caret-right" />
			                    &nbsp;Continue Shopping
			                </a>
			            </div>
			            <div className="pull-right">
			                <a className="btn btn-primary reg_button" href="/checkout">
			                    Checkout
			                </a>
			            </div>
			        </div>
			    </div>
			</div>
        );
    }

    showProducts(carts){
		var result = null;
	    if (carts.length > 0) {
	    	localStorage.total = 0;
	    	result = carts.map((product, index) => {
	    		localStorage.total = Number(localStorage.total) + (product.price * localStorage.getItem(product.id));
	            return(
	                <ProductItemCart
	                    key={index}
	                    product={product}
	                    index={index}
	                    onDelete={this.onDelete}
	                    onChangeTotal={this.onChangeTotal.bind(this)}
	                />
	            );                   
	        });
	    }
	    else {
			localStorage.clear();
    		localStorage.total = 0;
	    }
	    return result
	}
}

const mapStateToProps = state => {
    return {
        carts: state.carts,
    }
}

const mapDispatchToProps = (dispatch, props) => {
	return{
		DeleteProductFromCart: (id) => {
			dispatch(actDeleteCart(id));
    },
    setNewSum: sum => dispatch(setNewSum(sum))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
