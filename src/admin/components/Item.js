import React, { Component } from 'react';

class Item extends Component {

  render() {
    const {item,index} = this.props;
    let contents = {
      ...item
    }
    var datas = [];
    const contentsFilter = Object.keys(contents).forEach(function eachKey(key) { 
      if(key !== 'img' && key !== 'id' && key !== 'password') {
        datas = [...datas,(contents[key])];
      }
    })
    const seedItem = datas.map((data,index)=> {
      return(<td key={index}>{data}</td>)
    });
    return (
    	<tr>
        <td>{index + 1}</td>
        {seedItem}
        <td>
          <button type="button" className="btn btn-warning">Edit</button>
          <button type="button" className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default Item;
