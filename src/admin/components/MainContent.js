import React, { Component } from 'react';
import ProductTableHeader from '../components/ProductTableHeader';
import Item from '../components/Item';

export default class MainContent extends Component {

	render() {
    const {items} = this.props;
    const elmtItems = items.map((item,index)=>
        <Item key={index} item={item} index={index}/>
      )

		return (
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <ProductTableHeader item={items[0]}/>
          <tbody className="text-center">
            {elmtItems}
          </tbody>
        </table>
      </div>
		);
	}
}



