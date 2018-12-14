import React, { Component } from 'react';
import ItemsTableHeader from '../components/ItemsTableHeader';
import Item from '../components/Item';

export default class MainContent extends Component {

	render() {
    const {items} = this.props;
    const elmtItems = items.map((item,index)=>
      <Item deleteItem={this.props.deleteItem} sectionName={this.props.sectionName} key={index} item={item} index={index}/>
    )

		return (
      <div className="panel panel-default">
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <ItemsTableHeader item={items[0]}/>
            <tbody className="text-center">
              {elmtItems}
            </tbody>
          </table>
        </div>
      </div>
		);
	}
}



