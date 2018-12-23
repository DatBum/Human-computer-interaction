import React, { Component } from 'react';

class ItemsTableHeader extends Component {

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
      if (header === 'createdAt') header = 'Ngày';
      if (header === 'type') header = 'Phiếu';
      if (header === 'quantity') header = 'Số lượng';
      if (header === 'warehouseID') header = 'Kho';
      if (header === 'typeBuy') header = 'Loại';
      if (header === 'productId') header = 'Mã SP';
      if (header === 'personCreated') header = 'Người Tạo';
      if (header === 'description') header = 'Ghi chú';
      if (header === 'price') header = 'Giá';
      if (header === 'categoryId') header = 'Loại Sản Phẩm';
      if (header === 'role') header = 'Chức Vụ';
      if (header === 'warehouseOut') header = 'Kho Xuất';
      if (header === 'typeOut') header = 'TT Xuất';
      if (header === 'typeIn') header = 'TT Nhập';
      if (header === 'warehouseIn') header = 'Kho Nhập';
      if (header === 'isBalance') header = 'Chênh';
      if (header === 'staffName') header = 'Nhân viên';
      return (<th key={header} className="text-center">{header}</th>);
    });
    return (
      <thead>
        <tr >
          <th className="text-center">STT</th>
          {toHeaderElem}
          <th className="text-center">Hành Động</th>
        </tr>
      </thead>
    );
  }
}

export default ItemsTableHeader;
