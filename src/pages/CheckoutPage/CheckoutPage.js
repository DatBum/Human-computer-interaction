import React, { Component, Fragment } from 'react';

class CheckoutPage extends Component {
    render() {
        return (
            <Fragment>
			    <div className="main-content">
			        <div className="container checkout">
			            <div className="breadcrumbs">
			                <a href="/">
			                    <i className="fa fa-home" />
			                </a>
			                <a href="/checkout">Checkout</a>
			            </div>
			            <h2 className="text-center text-uppercase text-bold">checkout</h2>
			            <hr className="small-line" />
			            <div id="accordion" className="panel-group margin-top">
			                <div className="panel panel-default">
			                    <div className="panel-heading">
			                        <h4 className="panel-title">
			                            <a
			                                className="accordion-toggle"
			                                data-parent="#accordion"
			                                data-toggle="collapse"
			                                href="#collapse-checkout-option"
			                            >
			                                Step 1: Checkout Options{" "}
			                                <i className="fa fa-caret-down" />
			                            </a>
			                        </h4>
			                    </div>
			                    <div
			                        id="collapse-checkout-option"
			                        className="panel-collapse collapse"
			                        aria-expanded="false"
			                    >
			                        <div className="panel-body">
			                            <div className="row">
			                                <div className="col-sm-6">
			                                    <h2>New Customer</h2>
			                                    <p>Checkout Options:</p>
			                                    <div className="radio">
			                                        <label>
			                                            <input
			                                                type="radio"
			                                                defaultChecked="checked"
			                                                defaultValue="register"
			                                                name="account"
			                                            />
			                                            Register Account
			                                        </label>
			                                    </div>
			                                    <div className="radio">
			                                        <label>
			                                            <input
			                                                type="radio"
			                                                defaultValue="guest"
			                                                name="account"
			                                            />
			                                            Guest Checkout
			                                        </label>
			                                    </div>
			                                    <p>
			                                        By creating an account you will be able
			                                        to shop faster, be up to date on an
			                                        order's status, and keep track of the
			                                        orders you have previously made.
			                                    </p>
			                                    <input
			                                        type="button"
			                                        className="btn btn-primary"
			                                        data-loading-text="Loading..."
			                                        id="button-account"
			                                        defaultValue="Continue"
			                                    />
			                                </div>
			                                <div className="col-sm-6">
			                                    <h2>Returning Customer</h2>
			                                    <p>I am a returning customer</p>
			                                    <div className="form-group">
			                                        <label
			                                            htmlFor="input-email"
			                                            className="control-label"
			                                        >
			                                            E-Mail
			                                        </label>
			                                        <input
			                                            type="text"
			                                            className="form-control"
			                                            id="input-email"
			                                            placeholder="E-Mail"
			                                            defaultValue
			                                            name="email"
			                                        />
			                                    </div>
			                                    <div className="form-group">
			                                        <label
			                                            htmlFor="input-password"
			                                            className="control-label"
			                                        >
			                                            Password
			                                        </label>
			                                        <input
			                                            type="password"
			                                            className="form-control"
			                                            id="input-password"
			                                            placeholder="Password"
			                                            defaultValue
			                                            name="password"
			                                        />
			                                        <br />
			                                        <a href="#">Forgot Password</a>
			                                    </div>
			                                    <input
			                                        type="button"
			                                        className="btn btn-primary"
			                                        data-loading-text="Loading..."
			                                        id="button-login"
			                                        defaultValue="Login"
			                                    />
			                                </div>
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
			                                href="#collapse-payment-address"
			                            >
			                                Step 2: Account &amp; Billing Details{" "}
			                                <i className="fa fa-caret-down" />
			                            </a>
			                        </h4>
			                    </div>
			                    <div
			                        className="panel-collapse collapse in"
			                        id="collapse-payment-address"
			                        style={{ height: "auto" }}
			                    >
			                        <div className="panel-body">
			                            <div className="row">
			                                <div className="col-sm-6">
			                                    <fieldset id="account">
			                                        <legend>Your Personal Details</legend>
			                                        <div
			                                            style={{ display: "none" }}
			                                            className="form-group"
			                                        >
			                                            <label className="control-label">
			                                                Customer Group
			                                            </label>
			                                            <div className="radio">
			                                                <label>
			                                                    <input
			                                                        type="radio"
			                                                        defaultChecked="checked"
			                                                        defaultValue={1}
			                                                        name="customer_group_id"
			                                                    />
			                                                    Default
			                                                </label>
			                                            </div>
			                                        </div>
			                                        <div className="form-group required">
			                                            <label
			                                                htmlFor="input-payment-firstname"
			                                                className="control-label"
			                                            >
			                                                First Name
			                                            </label>
			                                            <input
			                                                type="text"
			                                                className="form-control"
			                                                id="input-payment-firstname"
			                                                placeholder="First Name"
			                                                defaultValue
			                                                name="firstname"
			                                            />
			                                        </div>
			                                        <div className="form-group required">
			                                            <label
			                                                htmlFor="input-payment-lastname"
			                                                className="control-label"
			                                            >
			                                                Last Name
			                                            </label>
			                                            <input
			                                                type="text"
			                                                className="form-control"
			                                                id="input-payment-lastname"
			                                                placeholder="Last Name"
			                                                defaultValue
			                                                name="lastname"
			                                            />
			                                        </div>
			                                        <div className="form-group required">
			                                            <label
			                                                htmlFor="input-payment-email"
			                                                className="control-label"
			                                            >
			                                                E-Mail
			                                            </label>
			                                            <input
			                                                type="text"
			                                                className="form-control"
			                                                id="input-payment-email"
			                                                placeholder="E-Mail"
			                                                defaultValue
			                                                name="email"
			                                            />
			                                        </div>
			                                        <div className="form-group required">
			                                            <label
			                                                htmlFor="input-payment-telephone"
			                                                className="control-label"
			                                            >
			                                                Telephone
			                                            </label>
			                                            <input
			                                                type="text"
			                                                className="form-control"
			                                                id="input-payment-telephone"
			                                                placeholder="Telephone"
			                                                defaultValue
			                                                name="telephone"
			                                            />
			                                        </div>
			                                        <div className="form-group">
			                                            <label
			                                                htmlFor="input-payment-fax"
			                                                className="control-label"
			                                            >
			                                                Fax
			                                            </label>
			                                            <input
			                                                type="text"
			                                                className="form-control"
			                                                id="input-payment-fax"
			                                                placeholder="Fax"
			                                                defaultValue
			                                                name="fax"
			                                            />
			                                        </div>
			                                    </fieldset>
			                                    <fieldset>
			                                        <legend>Your Password</legend>
			                                        <div className="form-group required">
			                                            <label
			                                                htmlFor="input-payment-password"
			                                                className="control-label"
			                                            >
			                                                Password
			                                            </label>
			                                            <input
			                                                type="password"
			                                                className="form-control"
			                                                id="input-payment-password"
			                                                placeholder="Password"
			                                                defaultValue
			                                                name="password"
			                                            />
			                                        </div>
			                                        <div className="form-group required">
			                                            <label
			                                                htmlFor="input-payment-confirm"
			                                                className="control-label"
			                                            >
			                                                Password Confirm
			                                            </label>
			                                            <input
			                                                type="password"
			                                                className="form-control"
			                                                id="input-payment-confirm"
			                                                placeholder="Password Confirm"
			                                                defaultValue
			                                                name="confirm"
			                                            />
			                                        </div>
			                                    </fieldset>
			                                </div>
			                                <div className="col-sm-6">
			                                    <fieldset id="address" className="required">
			                                        <legend>Your Address</legend>
			                                        <div className="form-group">
			                                            <label
			                                                htmlFor="input-payment-company"
			                                                className="control-label"
			                                            >
			                                                Company
			                                            </label>
			                                            <input
			                                                type="text"
			                                                className="form-control"
			                                                id="input-payment-company"
			                                                placeholder="Company"
			                                                defaultValue
			                                                name="company"
			                                            />
			                                        </div>
			                                        <div className="form-group required">
			                                            <label
			                                                htmlFor="input-payment-address-1"
			                                                className="control-label"
			                                            >
			                                                Address 1
			                                            </label>
			                                            <input
			                                                type="text"
			                                                className="form-control"
			                                                id="input-payment-address-1"
			                                                placeholder="Address 1"
			                                                defaultValue
			                                                name="address_1"
			                                            />
			                                        </div>
			                                        <div className="form-group">
			                                            <label
			                                                htmlFor="input-payment-address-2"
			                                                className="control-label"
			                                            >
			                                                Address 2
			                                            </label>
			                                            <input
			                                                type="text"
			                                                className="form-control"
			                                                id="input-payment-address-2"
			                                                placeholder="Address 2"
			                                                defaultValue
			                                                name="address_2"
			                                            />
			                                        </div>
			                                        <div className="form-group required">
			                                            <label
			                                                htmlFor="input-payment-city"
			                                                className="control-label"
			                                            >
			                                                City
			                                            </label>
			                                            <input
			                                                type="text"
			                                                className="form-control"
			                                                id="input-payment-city"
			                                                placeholder="City"
			                                                defaultValue
			                                                name="city"
			                                            />
			                                        </div>
			                                        <div className="form-group required">
			                                            <label
			                                                htmlFor="input-payment-postcode"
			                                                className="control-label"
			                                            >
			                                                Post Code
			                                            </label>
			                                            <input
			                                                type="text"
			                                                className="form-control"
			                                                id="input-payment-postcode"
			                                                placeholder="Post Code"
			                                                defaultValue
			                                                name="postcode"
			                                            />
			                                        </div>
			                                        <div className="form-group required">
			                                            <label
			                                                htmlFor="input-payment-country"
			                                                className="control-label"
			                                            >
			                                                Country
			                                            </label>
			                                            <select
			                                                className="form-control"
			                                                id="input-payment-country"
			                                                name="country_id"
			                                            >
			                                                <option value>
			                                                    {" "}
			                                                    --- Please Select ---{" "}
			                                                </option>
			                                                <option value={1}>
			                                                    Afghanistan
			                                                </option>
			                                                <option value={2}>
			                                                    Albania
			                                                </option>
			                                                <option value={3}>
			                                                    Algeria
			                                                </option>
			                                                <option value={4}>
			                                                    American Samoa
			                                                </option>
			                                                <option value={5}>
			                                                    Andorra
			                                                </option>
			                                                <option value={6}>
			                                                    Angola
			                                                </option>
			                                                <option value={7}>
			                                                    Anguilla
			                                                </option>
			                                            </select>
			                                        </div>
			                                        <div className="form-group required">
			                                            <label
			                                                htmlFor="input-payment-zone"
			                                                className="control-label"
			                                            >
			                                                Region / State
			                                            </label>
			                                            <select
			                                                className="form-control"
			                                                id="input-payment-zone"
			                                                name="zone_id"
			                                            >
			                                                <option value>
			                                                    {" "}
			                                                    --- Please Select ---{" "}
			                                                </option>
			                                                <option value={3513}>
			                                                    Aberdeen
			                                                </option>
			                                                <option value={3514}>
			                                                    Aberdeenshire
			                                                </option>
			                                                <option value={3515}>
			                                                    Anglesey
			                                                </option>
			                                                <option value={3516}>
			                                                    Angus
			                                                </option>
			                                                <option value={3517}>
			                                                    Argyll and Bute
			                                                </option>
			                                                <option value={3518}>
			                                                    Bedfordshire
			                                                </option>
			                                                <option value={3519}>
			                                                    Berkshire
			                                                </option>
			                                                <option value={3520}>
			                                                    Blaenau Gwent
			                                                </option>
			                                                <option value={3521}>
			                                                    Bridgend
			                                                </option>
			                                            </select>
			                                        </div>
			                                    </fieldset>
			                                </div>
			                            </div>
			                            <div className="checkbox">
			                                <label htmlFor="newsletter">
			                                    <input
			                                        type="checkbox"
			                                        id="newsletter"
			                                        defaultValue={1}
			                                        name="newsletter"
			                                    />
			                                    I wish to subscribe to the PrintStore online
			                                    store newsletter.
			                                </label>
			                            </div>
			                            <div className="checkbox">
			                                <label>
			                                    <input
			                                        type="checkbox"
			                                        defaultChecked="checked"
			                                        defaultValue={1}
			                                        name="shipping_address"
			                                    />
			                                    My delivery and billing addresses are the
			                                    same.
			                                </label>
			                            </div>
			                            <div className="buttons clearfix">
			                                <div className="pull-right">
			                                    I have read and agree to the{" "}
			                                    <a className="agree" href="#">
			                                        <b>Privacy Policy</b>
			                                    </a>{" "}
			                                    &nbsp;
			                                    <input
			                                        type="checkbox"
			                                        defaultValue={1}
			                                        name="agree"
			                                        style={{ verticalAlign: "text-bottom" }}
			                                    />
			                                    <input
			                                        type="button"
			                                        className="btn btn-primary"
			                                        data-loading-text="Loading..."
			                                        id="button-register"
			                                        defaultValue="Continue"
			                                    />
			                                </div>
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
			                                href="#collapse-shipping-address"
			                                aria-expanded="true"
			                            >
			                                Step 3: Delivery Details{" "}
			                                <i className="fa fa-caret-down" />
			                            </a>
			                        </h4>
			                    </div>
			                    <div
			                        id="collapse-shipping-address"
			                        className="panel-collapse collapse in"
			                        aria-expanded="true"
			                        style={{}}
			                    >
			                        <div className="panel-body">
			                            <form className="form-horizontal">
			                                <div className="form-group required">
			                                    <label
			                                        htmlFor="input-shipping-firstname"
			                                        className="col-sm-2 control-label"
			                                    >
			                                        First Name
			                                    </label>
			                                    <div className="col-sm-10">
			                                        <input
			                                            type="text"
			                                            className="form-control"
			                                            id="input-shipping-firstname"
			                                            placeholder="First Name"
			                                            defaultValue="mm"
			                                            name="firstname"
			                                        />
			                                    </div>
			                                </div>
			                                <div className="form-group required">
			                                    <label
			                                        htmlFor="input-shipping-lastname"
			                                        className="col-sm-2 control-label"
			                                    >
			                                        Last Name
			                                    </label>
			                                    <div className="col-sm-10">
			                                        <input
			                                            type="text"
			                                            className="form-control"
			                                            id="input-shipping-lastname"
			                                            placeholder="Last Name"
			                                            defaultValue="mm"
			                                            name="lastname"
			                                        />
			                                    </div>
			                                </div>
			                                <div className="form-group">
			                                    <label
			                                        htmlFor="input-shipping-company"
			                                        className="col-sm-2 control-label"
			                                    >
			                                        Company
			                                    </label>
			                                    <div className="col-sm-10">
			                                        <input
			                                            type="text"
			                                            className="form-control"
			                                            id="input-shipping-company"
			                                            placeholder="Company"
			                                            defaultValue
			                                            name="company"
			                                        />
			                                    </div>
			                                </div>
			                                <div className="form-group required">
			                                    <label
			                                        htmlFor="input-shipping-address-1"
			                                        className="col-sm-2 control-label"
			                                    >
			                                        Address 1
			                                    </label>
			                                    <div className="col-sm-10">
			                                        <input
			                                            type="text"
			                                            className="form-control"
			                                            id="input-shipping-address-1"
			                                            placeholder="Address 1"
			                                            defaultValue="aaaa"
			                                            name="address_1"
			                                        />
			                                    </div>
			                                </div>
			                                <div className="form-group">
			                                    <label
			                                        htmlFor="input-shipping-address-2"
			                                        className="col-sm-2 control-label"
			                                    >
			                                        Address 2
			                                    </label>
			                                    <div className="col-sm-10">
			                                        <input
			                                            type="text"
			                                            className="form-control"
			                                            id="input-shipping-address-2"
			                                            placeholder="Address 2"
			                                            defaultValue
			                                            name="address_2"
			                                        />
			                                    </div>
			                                </div>
			                                <div className="form-group required">
			                                    <label
			                                        htmlFor="input-shipping-city"
			                                        className="col-sm-2 control-label"
			                                    >
			                                        City
			                                    </label>
			                                    <div className="col-sm-10">
			                                        <input
			                                            type="text"
			                                            className="form-control"
			                                            id="input-shipping-city"
			                                            placeholder="City"
			                                            defaultValue="aaaaa"
			                                            name="city"
			                                        />
			                                    </div>
			                                </div>
			                                <div className="form-group required">
			                                    <label
			                                        htmlFor="input-shipping-postcode"
			                                        className="col-sm-2 control-label"
			                                    >
			                                        Post Code
			                                    </label>
			                                    <div className="col-sm-10">
			                                        <input
			                                            type="text"
			                                            className="form-control"
			                                            id="input-shipping-postcode"
			                                            placeholder="Post Code"
			                                            defaultValue={41523}
			                                            name="postcode"
			                                        />
			                                    </div>
			                                </div>
			                                <div className="form-group required">
			                                    <label
			                                        htmlFor="input-shipping-country"
			                                        className="col-sm-2 control-label"
			                                    >
			                                        Country
			                                    </label>
			                                    <div className="col-sm-10">
			                                        <select
			                                            className="form-control"
			                                            id="input-shipping-country"
			                                            name="country_id"
			                                        >
			                                            <option value>
			                                                {" "}
			                                                --- Please Select ---{" "}
			                                            </option>
			                                            <option value={244}>
			                                                Aaland Islands
			                                            </option>
			                                            <option value={1}>
			                                                Afghanistan
			                                            </option>
			                                            <option value={2}>Albania</option>
			                                            <option value={3}>Algeria</option>
			                                            <option value={4}>
			                                                American Samoa
			                                            </option>
			                                            <option value={5}>Andorra</option>
			                                            <option value={6}>Angola</option>
			                                        </select>
			                                    </div>
			                                </div>
			                                <div className="form-group required">
			                                    <label
			                                        htmlFor="input-shipping-zone"
			                                        className="col-sm-2 control-label"
			                                    >
			                                        Region / State
			                                    </label>
			                                    <div className="col-sm-10">
			                                        <select
			                                            className="form-control"
			                                            id="input-shipping-zone"
			                                            name="zone_id"
			                                        >
			                                            <option value>
			                                                {" "}
			                                                --- Please Select ---{" "}
			                                            </option>
			                                            <option value={3513}>
			                                                Aberdeen
			                                            </option>
			                                            <option value={3514}>
			                                                Aberdeenshire
			                                            </option>
			                                            <option value={3515}>
			                                                Anglesey
			                                            </option>
			                                            <option value={3516}>Angus</option>
			                                            <option value={3517}>
			                                                Argyll and Bute
			                                            </option>
			                                        </select>
			                                    </div>
			                                </div>
			                                <div className="buttons">
			                                    <div className="pull-right">
			                                        <input
			                                            type="button"
			                                            className="btn btn-primary"
			                                            id="button-guest-shipping"
			                                            defaultValue="Continue"
			                                        />
			                                    </div>
			                                </div>
			                            </form>
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
			                                href="#collapse-shipping-method"
			                            >
			                                Step 4: Delivery Method{" "}
			                                <i className="fa fa-caret-down" />
			                            </a>
			                        </h4>
			                    </div>
			                    <div
			                        id="collapse-shipping-method"
			                        className="panel-collapse collapse in"
			                        aria-expanded="true"
			                        style={{}}
			                    >
			                        <div className="panel-body">
			                            <p>
			                                Please select the preferred shipping method to
			                                use on this order.
			                            </p>
			                            <p>
			                                <strong>Flat Rate</strong>
			                            </p>
			                            <div className="radio">
			                                <label>
			                                    <input
			                                        type="radio"
			                                        defaultChecked="checked"
			                                        defaultValue="flat.flat"
			                                        name="shipping_method"
			                                    />
			                                    Flat Shipping Rate - $8.00
			                                </label>
			                            </div>
			                            <p>
			                                <strong>Add Comments About Your Order</strong>
			                            </p>
			                            <p>
			                                <textarea
			                                    className="form-control"
			                                    rows={8}
			                                    name="comment"
			                                    defaultValue={""}
			                                />
			                            </p>
			                            <div className="buttons">
			                                <div className="pull-right">
			                                    <input
			                                        type="button"
			                                        className="btn btn-primary"
			                                        id="button-shipping-method"
			                                        defaultValue="Continue"
			                                    />
			                                </div>
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
			                                href="#collapse-payment-method"
			                                aria-expanded="true"
			                            >
			                                Step 5: Payment Method{" "}
			                                <i className="fa fa-caret-down" />
			                            </a>
			                        </h4>
			                    </div>
			                    <div
			                        id="collapse-payment-method"
			                        className="panel-collapse collapse in"
			                        aria-expanded="true"
			                        style={{}}
			                    >
			                        <div className="panel-body">
			                            <p>
			                                Please select the preferred payment method to
			                                use on this order.
			                            </p>
			                            <div className="radio">
			                                <label>
			                                    <input
			                                        type="radio"
			                                        defaultChecked="checked"
			                                        defaultValue="cod"
			                                        name="payment_method"
			                                    />
			                                    Cash On Delivery{" "}
			                                </label>
			                            </div>
			                            <p>
			                                <strong>Add Comments About Your Order</strong>
			                            </p>
			                            <p>
			                                <textarea
			                                    className="form-control"
			                                    rows={8}
			                                    name="comment"
			                                    defaultValue={""}
			                                />
			                            </p>
			                            <div className="buttons">
			                                <div className="pull-right">
			                                    I have read and agree to the{" "}
			                                    <a className="agree" href="#">
			                                        <b>Terms &amp; Conditions</b>
			                                    </a>{" "}
			                                    <input
			                                        type="checkbox"
			                                        defaultValue={1}
			                                        name="agree"
			                                    />
			                                    &nbsp;
			                                    <input
			                                        type="button"
			                                        className="btn btn-primary"
			                                        id="button-payment-method"
			                                        defaultValue="Continue"
			                                    />
			                                </div>
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
			                                href="#collapse-checkout-confirm"
			                                aria-expanded="true"
			                            >
			                                Step 6: Confirm Order{" "}
			                                <i className="fa fa-caret-down" />
			                            </a>
			                        </h4>
			                    </div>
			                    <div
			                        id="collapse-checkout-confirm"
			                        className="panel-collapse collapse in"
			                        aria-expanded="true"
			                        style={{}}
			                    >
			                        <div className="panel-body">
			                            <div className="table-responsive">
			                                <table className="table table-bordered table-hover">
			                                    <thead>
			                                        <tr>
			                                            <td className="text-left">
			                                                Product Name
			                                            </td>
			                                            <td className="text-left">Model</td>
			                                            <td className="text-right">
			                                                Quantity
			                                            </td>
			                                            <td className="text-right">
			                                                Unit Price
			                                            </td>
			                                            <td className="text-right">
			                                                Total
			                                            </td>
			                                        </tr>
			                                    </thead>
			                                    <tbody>
			                                        <tr>
			                                            <td className="text-left">
			                                                <a href="#">demo product</a>
			                                            </td>
			                                            <td className="text-left">
			                                                Product 6
			                                            </td>
			                                            <td className="text-right">1</td>
			                                            <td className="text-right">
			                                                $242.00
			                                            </td>
			                                            <td className="text-right">
			                                                $242.00
			                                            </td>
			                                        </tr>
			                                    </tbody>
			                                    <tfoot>
			                                        <tr>
			                                            <td
			                                                className="text-right"
			                                                colSpan={4}
			                                            >
			                                                <strong>Sub-Total:</strong>
			                                            </td>
			                                            <td className="text-right">
			                                                $200.00
			                                            </td>
			                                        </tr>
			                                        <tr>
			                                            <td
			                                                className="text-right"
			                                                colSpan={4}
			                                            >
			                                                Coupon Code:
			                                            </td>
			                                            <td className="text-right">$0</td>
			                                        </tr>
			                                        <tr>
			                                            <td
			                                                className="text-right"
			                                                colSpan={4}
			                                            >
			                                                Gift Voucher:
			                                            </td>
			                                            <td className="text-right">$0</td>
			                                        </tr>
			                                        <tr>
			                                            <td
			                                                className="text-right"
			                                                colSpan={4}
			                                            >
			                                                Flat Shipping Rate:
			                                            </td>
			                                            <td className="text-right">
			                                                $5.00
			                                            </td>
			                                        </tr>
			                                        <tr>
			                                            <td
			                                                className="text-right"
			                                                colSpan={4}
			                                            >
			                                                Eco Tax (-2.00):
			                                            </td>
			                                            <td className="text-right">
			                                                $4.00
			                                            </td>
			                                        </tr>
			                                        <tr>
			                                            <td
			                                                className="text-right"
			                                                colSpan={4}
			                                            >
			                                                VAT (20%):
			                                            </td>
			                                            <td className="text-right">
			                                                $41.00
			                                            </td>
			                                        </tr>
			                                        <tr>
			                                            <td
			                                                className="text-right"
			                                                colSpan={4}
			                                            >
			                                                <strong>Order Total:</strong>
			                                            </td>
			                                            <td className="text-right">
			                                                $250.00
			                                            </td>
			                                        </tr>
			                                    </tfoot>
			                                </table>
			                            </div>
			                            <div className="buttons">
			                                <div className="pull-right">
			                                    <input
			                                        type="button"
			                                        className="btn btn-primary"
			                                        id="button-confirm"
			                                        defaultValue="Confirm Order"
			                                    />
			                                </div>
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
}

export default CheckoutPage;