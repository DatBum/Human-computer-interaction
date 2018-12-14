import React, { Component } from 'react';
import Product from '../components/Product';
import Item from '../components/Item';

export default class MainContent extends Component {

	render() {
    const items = this.props.items;
    const elmtItems = items.map((item,index)=>
      <Item key={index} item={item} index={index}/>
      )

		return (
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <tbody>
            {elmtItems}
          </tbody>
        </table>
      </div>
		);
	}
}



