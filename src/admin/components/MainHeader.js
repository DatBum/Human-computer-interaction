import React, { Component } from 'react';

export default class MainHeader extends Component {

  render() {
    return (
    	<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3">
        <h1>{this.props.sectionName}</h1>
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
