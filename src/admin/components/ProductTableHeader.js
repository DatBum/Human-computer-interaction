import React, { Component } from 'react';

class ProductTableHeader extends Component {

  render() {
    let {item} = this.props;
    let itemKeys = {
      ...item
    }
    let headers = Object.keys(itemKeys).filter((key)=>{
      if(key==='img' || key === 'id'|| key === 'password') return false;
        else return true;
    });
    const toHeaderElem = headers.map(header=>{
      return (<th className="text-center">{header}</th>);
    });
    return (
      <thead>
        <tr >
          <th className="text-center">STT</th>
          {toHeaderElem}
          <th className="text-center">Action</th>
        </tr>
      </thead>
    );
  }
}

export default ProductTableHeader;
