import React, { Component, Fragment } from 'react';


export default class ProductIdItem extends Component {

  render() {
    const {productName, productId} = this.props;
    return (
    	<option value={productId}>{productName}</option>
    );
  }
}
