import React, { Component, Fragment } from 'react';
import Search from './Search'
import Form from './Form'

export default class MainHeader extends Component {

  handleAdd = () =>{
    this.props.toggleForm();
  }

  render() {
    let elemButton = <button type="button" onClick={this.handleAdd} className="btn btn-info">Add Item</button>
    let elemForm = null;
    if(this.props.isShowForm){
      elemButton = <button type="button" onClick={this.handleAdd} className="btn btn-danger">Close Form</button>
      elemForm = <Form />
    }
    return (
      <div className="row" style={{marginBottom: '30px'}}>
        <h1 className="page-header" style={{color: '#39BAF0', fontSize: '40px'}}>{this.props.sectionName}</h1>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <Search 
          onchangeSearchStr={this.props.onchangeSearchStr} 
          onchangeSearchBar={this.props.onchangeSearchBar} 
          onClickSearchGo={this.props.onClickSearchGo}
          clearSearch={this.props.clearSearch} 
        />
        <div className="row col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <p></p>
          {elemButton}
        </div>
        </div>
        {elemForm}
      </div>
    );
  }
}
