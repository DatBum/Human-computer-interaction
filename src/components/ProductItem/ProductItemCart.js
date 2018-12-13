import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class ProductItemCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: localStorage.getItem(this.props.product.id)
        };
    }

    onDelete = (id) => {
    	if (confirm('Bạn chắc chắn muốn xóa?')) { //eslint-disable-line
            this.props.onDelete(id);
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

    render() {
        var { product } = this.props;
        var { quantity } = this.state;
        return (
            <tr>
                <td className="text-center">
                    <Link to={`product/${product.id}`}>
                        <img
                            title="ana"
                            src={product.img}
                            style={{
                                width: "100px",
                                height: "80px"
                            }}
                        />
                    </Link>
                </td>
                <td className="text-left">
                    <a href="#">{product.name}</a>
                    <br />
                    <small>Select: Blue</small>
                    <br />
                    <small>Reward Points: 200</small>
                </td>
                <td className="text-left">
                    <br />
                    {product.categoryId}
                </td>
                <td className="text-left">
                    <br />
                    <div
                        style={{ maxWidth: "200px" }}
                        className="input-group btn-block"
                    >
                        <input
                            type="text"
                            className="form-control input-sm"
                            size={1}
                            defaultValue={localStorage.getItem(product.id)}
                            onChange={this.onChange}
                        />
                        <span className="input-group-btn">
                          {/*  <button
                                className="btn btn-primary"
                                type="submit"
                                data-original-title="Update"
                            >
                                <i className="fa fa-refresh" />
                            </button>*/}
                            <button
                                className="btn btn-danger"
                                type="button"
                                data-original-title="Remove"
                                onClick={() => this.onDelete(product.id)}
                            >
                                <i className="fa fa-times-circle" />
                            </button>
                        </span>
                    </div>
                </td>
                <td className="text-right">
                    <br />
                    ${product.price}
                </td>
                <td className="text-right">
                    <br />
                    ${product.price * quantity}
                </td>
            </tr>
        );
    }
}

export default ProductItemCart;