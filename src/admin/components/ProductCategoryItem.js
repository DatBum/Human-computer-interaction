import React, { Component, Fragment } from 'react';


export default class ProductCategoryItem extends Component {

  render() {
    const {categoryName, onClickCategory, categoryId} = this.props;
    return (
      <option onClick={()=>onClickCategory(categoryId)}>{categoryName}</option>
    );
  }
}
