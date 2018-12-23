import React, { Component, Fragment } from 'react';


export default class ProductCategoryItem extends Component {

  render() {
    const {categoryName} = this.props;
    return (
      <li><a>{categoryName}</a></li>
    );
  }
}
