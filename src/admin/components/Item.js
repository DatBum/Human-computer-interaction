import React, { Component } from 'react';

class Item extends Component {

  render() {
    const {item} = this.props;

    return (
    	<tr>
        {item}
      </tr>
    );
  }
}

export default Item;
