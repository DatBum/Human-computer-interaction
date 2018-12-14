import React, { Component } from 'react';

class Item extends Component {

  render() {
    const {key} = this.props;

    return (
    	<th>{}</th>
    );
  }
}

export default Item;
