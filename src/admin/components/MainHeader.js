import React, { Component, Fragment } from 'react';
import Search from './Search'

export default class MainHeader extends Component {

  render() {
    return (
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center" style={{marginBottom: '30px'}}>
        <h1 className="page-header">{this.props.sectionName}</h1>
        <Search 
          onchangeSearchStr={this.props.onchangeSearchStr} 
          onchangeSearchBar={this.props.onchangeSearchBar} 
          onClickSearchGo={this.props.onClickSearchGo}
          clearSearch={this.props.clearSearch} 
        />
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group mr-2">
            <button className="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar" />
            This week
          </button>
        </div>
      </div>
    );
  }
}
