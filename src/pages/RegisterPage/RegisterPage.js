import React, { Component, Fragment } from 'react';
import ListGroup from './../../components/ListGroup/ListGroup';

class RegisterPage extends Component {
    render() {
        return (
            <div id="site_content">
			    <div className="container">
			        <div className="row">
			            <ListGroup />
			            <div className="col-sm-9" id="content">
			                {" "}
			                <div className="breadcrumbs">
			                    <a href="/">
			                        <i className="fa fa-home" />
			                    </a>
			                    <a href="#">Register</a>
			                </div>
			                <h1>My Account Information</h1>
			                <p>
			                    {" "}
			                    <small>
			                        <strong className="define_note" />
			                    </small>
			                    If you already have an account with us, please login at the
			                    <a href="/login">login page</a>.
			                </p>
			                <form className="form-horizontal">
			                    <div className="contentText">
			                        <fieldset id="account">
			                            <h1>Your Personal Details</h1>
			                            <div
			                                style={{ display: "none" }}
			                                className="form-group required"
			                            >
			                                <label className="col-sm-2 control-label">
			                                    Customer Group
			                                </label>
			                                <div className="col-sm-10">
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
			                            </div>
			                            <div className="form-group required">
			                                <label
			                                    htmlFor="input-firstname"
			                                    className="col-sm-2 control-label"
			                                >
			                                    First Name
			                                </label>
			                                <div className="col-sm-10">
			                                    <input
			                                        type="text"
			                                        className="form-control"
			                                        id="input-firstname"
			                                        placeholder="First Name"
			                                        defaultValue
			                                        name="firstname"
			                                    />
			                                </div>
			                            </div>
			                            <div className="form-group required">
			                                <label
			                                    htmlFor="input-lastname"
			                                    className="col-sm-2 control-label"
			                                >
			                                    Last Name
			                                </label>
			                                <div className="col-sm-10">
			                                    <input
			                                        type="text"
			                                        className="form-control"
			                                        id="input-lastname"
			                                        placeholder="Last Name"
			                                        defaultValue
			                                        name="lastname"
			                                    />
			                                </div>
			                            </div>
			                            <div className="form-group required">
			                                <label
			                                    htmlFor="input-email"
			                                    className="col-sm-2 control-label"
			                                >
			                                    E-Mail
			                                </label>
			                                <div className="col-sm-10">
			                                    <input
			                                        type="email"
			                                        className="form-control"
			                                        id="input-email"
			                                        placeholder="E-Mail"
			                                        defaultValue
			                                        name="email"
			                                    />
			                                </div>
			                            </div>
			                            <div className="form-group required">
			                                <label
			                                    htmlFor="input-telephone"
			                                    className="col-sm-2 control-label"
			                                >
			                                    Telephone
			                                </label>
			                                <div className="col-sm-10">
			                                    <input
			                                        type="tel"
			                                        className="form-control"
			                                        id="input-telephone"
			                                        placeholder="Telephone"
			                                        defaultValue
			                                        name="telephone"
			                                    />
			                                </div>
			                            </div>
			                            <div className="form-group">
			                                <label
			                                    htmlFor="input-fax"
			                                    className="col-sm-2 control-label"
			                                >
			                                    Fax
			                                </label>
			                                <div className="col-sm-10">
			                                    <input
			                                        type="text"
			                                        className="form-control"
			                                        id="input-fax"
			                                        placeholder="Fax"
			                                        defaultValue
			                                        name="fax"
			                                    />
			                                </div>
			                            </div>
			                        </fieldset>
			                        <fieldset id="address">
			                            <h1>Your Address</h1>
			                            <div className="form-group">
			                                <label
			                                    htmlFor="input-company"
			                                    className="col-sm-2 control-label"
			                                >
			                                    Company
			                                </label>
			                                <div className="col-sm-10">
			                                    <input
			                                        type="text"
			                                        className="form-control"
			                                        id="input-company"
			                                        placeholder="Company"
			                                        defaultValue
			                                        name="company"
			                                    />
			                                </div>
			                            </div>
			                            <div className="form-group required">
			                                <label
			                                    htmlFor="input-address-1"
			                                    className="col-sm-2 control-label"
			                                >
			                                    Address 1
			                                </label>
			                                <div className="col-sm-10">
			                                    <input
			                                        type="text"
			                                        className="form-control"
			                                        id="input-address-1"
			                                        placeholder="Address 1"
			                                        defaultValue
			                                        name="address_1"
			                                    />
			                                </div>
			                            </div>
			                            <div className="form-group">
			                                <label
			                                    htmlFor="input-address-2"
			                                    className="col-sm-2 control-label"
			                                >
			                                    Address 2
			                                </label>
			                                <div className="col-sm-10">
			                                    <input
			                                        type="text"
			                                        className="form-control"
			                                        id="input-address-2"
			                                        placeholder="Address 2"
			                                        defaultValue
			                                        name="address_2"
			                                    />
			                                </div>
			                            </div>
			                            <div className="form-group required">
			                                <label
			                                    htmlFor="input-city"
			                                    className="col-sm-2 control-label"
			                                >
			                                    City
			                                </label>
			                                <div className="col-sm-10">
			                                    <input
			                                        type="text"
			                                        className="form-control"
			                                        id="input-city"
			                                        placeholder="City"
			                                        defaultValue
			                                        name="city"
			                                    />
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
			                                        defaultValue
			                                        name="postcode"
			                                    />
			                                </div>
			                            </div>
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
			                                        <option value={3516}>Angus</option>
			                                        <option value={3517}>
			                                            Argyll and Bute
			                                        </option>
			                                        <option value={3518}>
			                                            Bedfordshire
			                                        </option>
			                                    </select>
			                                </div>
			                            </div>
			                        </fieldset>
			                        <fieldset>
			                            <h1>Your Password</h1>
			                            <div className="form-group required">
			                                <label
			                                    htmlFor="input-password"
			                                    className="col-sm-2 control-label"
			                                >
			                                    Password
			                                </label>
			                                <div className="col-sm-10">
			                                    <input
			                                        type="password"
			                                        className="form-control"
			                                        id="input-password"
			                                        placeholder="Password"
			                                        defaultValue
			                                        name="password"
			                                    />
			                                </div>
			                            </div>
			                            <div className="form-group required">
			                                <label
			                                    htmlFor="input-confirm"
			                                    className="col-sm-2 control-label"
			                                >
			                                    Password Confirm
			                                </label>
			                                <div className="col-sm-10">
			                                    <input
			                                        type="password"
			                                        className="form-control"
			                                        id="input-confirm"
			                                        placeholder="Password Confirm"
			                                        defaultValue
			                                        name="confirm"
			                                    />
			                                </div>
			                            </div>
			                        </fieldset>
			                        <fieldset>
			                            <h1>Newsletter</h1>
			                            <div className="form-group">
			                                <label className="col-sm-2 control-label">
			                                    Subscribe
			                                </label>
			                                <div className="col-sm-10">
			                                    <label className="radio-inline">
			                                        <input
			                                            type="radio"
			                                            defaultValue={1}
			                                            name="newsletter"
			                                        />
			                                        Yes
			                                    </label>
			                                    <label className="radio-inline">
			                                        <input
			                                            type="radio"
			                                            defaultChecked="checked"
			                                            defaultValue={0}
			                                            name="newsletter"
			                                        />
			                                        No
			                                    </label>
			                                </div>
			                            </div>
			                        </fieldset>
			                        <div className="buttons">
			                            <div className="pull-right">
			                                I have read and agree to the{" "}
			                                <a className="agree" href="#">
			                                    <b>Privacy Policy</b>
			                                </a>{" "}
			                                <input
			                                    type="checkbox"
			                                    defaultValue={1}
			                                    name="agree"
			                                />
			                                &nbsp;
			                                <input
			                                    type="submit"
			                                    className="btn btn-primary reg_button"
			                                    defaultValue="Continue"
			                                />
			                            </div>
			                        </div>
			                    </div>
			                </form>
			            </div>
			        </div>
			    </div>
			</div>
        );
    }
}

export default RegisterPage;