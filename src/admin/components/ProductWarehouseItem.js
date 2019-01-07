import React, { Component, Fragment } from 'react';


export default class ProductWarehouseItem extends Component {

  render() {
    const {warehouseID} = this.props;
    return (
    	<option value={warehouseID}>{warehouseID}</option>
    );
  }
}
