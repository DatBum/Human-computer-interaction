import React, { Component } from 'react';
import * as SectionNames from '../constants/SectionNames'

class Item extends Component {

  handleDeleteItem = (e) => () =>{
    this.props.deleteItem(this.props.sectionName,this.props.item);
  }

  handleEdit = () => {
    this.props.toggleForm();
  }

  render() {
    const {sectionName, item, index} = this.props;
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
            <button onClick={this.handleEdit} id={item.id} type="button" className="btn btn-warning">Edit</button>
            <button onClick={this.handleDeleteItem()} type="button" className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default Item;
