import React, { Component } from 'react';
import MainHeader from '../components/MainHeader';
import MainContent from '../components/MainContent';
import * as MainActions from '../actions/MainActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import Item from '../components/Item';

class Main extends Component {

	render() {
    const {section} = this.props;

		return (
      <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <MainHeader sectionName={section.sectionName}/>
        <MainContent items={section.items}/>
      </div>
		);
	}
}

const mapStateToProps = state => {
    return {
      section: state.rootAdminReducer.sideBarReducers,
    }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
