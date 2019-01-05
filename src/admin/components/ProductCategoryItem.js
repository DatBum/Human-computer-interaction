import React, { Component, Fragment } from 'react';


export default class ProductCategoryItem extends Component {

  render() {
    const {categoryName, onClickCategory, categoryId} = this.props;
    return (
      <li onClick={()=>onClickCategory(categoryId)}><a>{categoryName}</a></li>
    );
  }
}
