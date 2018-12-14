import React, { Component, Fragment } from 'react';
import Search from './Search'

export default class MainHeader extends Component {

  render() {
    return (
      <div className="" style={{marginBottom: '30px'}}>
        <h1 className="page-header" style={{color: '#39BAF0', fontSize: '40px'}}>{this.props.sectionName}</h1>
        <Search 
          onchangeSearchStr={this.props.onchangeSearchStr} 
          onchangeSearchBar={this.props.onchangeSearchBar} 
          onClickSearchGo={this.props.onClickSearchGo}
          clearSearch={this.props.clearSearch} 
        />
        <div className="btn-toolbar mb-2 mb-md-0">
        </div>
      </div>
    );
  }
}
