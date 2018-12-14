import React, { Component } from 'react';

class Item extends Component {

  render() {
    const {item} = this.props;
    const {index} = this.props;

    return (
    	<tr>
        <td className="text-center">{index + 1}</td>
        <td>{item.name}</td>
        <td>
          <button type="button" className="btn btn-warning">Edit</button>
          <button type="button" className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default Item;
