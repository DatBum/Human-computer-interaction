import React, { Component, Fragment } from 'react';

export default class Search extends Component {

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
      <Fragment>
        <div className="">
          <input value={this.props.onchangeSearchStr} onChange={this.handleChange} type="text" className="form-control" placeholder="Search for..." />
          <p></p>
          <span className="">
              <button onClick={this.handleSearch} className="btn btn-info" type="button"><b>FIND</b></button>
              <button onClick={this.handleClear} className="btn btn-warning" type="button"><b>CLEAR</b></button>
          </span>
        </div>
      </Fragment>
    );
  }
}
