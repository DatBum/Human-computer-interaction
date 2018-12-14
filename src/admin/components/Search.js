import React, { Component, Fragment } from 'react';

export default class MainHeader extends Component {

  handleSearch = () =>{
    this.props.onClickSearchGo(this.props.onchangeSearchStr);
  }

  handleClear = () =>{
    this.props.clearSearch();
  }
  handleChange = event =>{    
    this.props.onchangeSearchBar(event.target.value);
  }

  render() {
    return (
      <div className="Search col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="input-group">
          <input value={this.props.onchangeSearchStr} onChange={this.handleChange} type="text" className="form-control" placeholder="Search for..." />
          <span className="input-group-btn">
              <button onClick={this.handleSearch} className="btn btn-info" type="button">Find</button>
              <button onClick={this.handleClear} className="btn btn-warning" type="button">Clear</button>
          </span>
        </div>
      </div>
    );
  }
}
