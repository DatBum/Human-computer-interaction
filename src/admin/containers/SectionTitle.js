import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SectionTitleActions from '../actions/SectionTitleActions';

class SectionTitle extends Component {

  render() {
    const { sectionName, sectiontitle, actions } = this.props;
    return (
    	<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3">
        <h1>{sectionName}</h1>
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

function mapStateToProps(state) {
    return {
        sectionName: state.rootAdminReducer.sideBarReducers.sectionName,
        sectiontitle: state.sectionTitleReducers
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(SectionTitleActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionTitle);
