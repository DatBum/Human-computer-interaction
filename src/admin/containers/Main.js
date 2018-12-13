import React, { Component } from 'react';
import MainHeader from '../components/MainHeader';
import MainContent from '../components/MainContent';
import * as MainActions from '../actions/MainActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Main extends Component {

  componentWillMount() {
    this.props.mainActions.actFetchItemsRequest(this.props.sectionName);
  }

	render() {
    const {sectionName, items} = this.props;
    console.log(items);
		return (
      <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <MainHeader sectionName={sectionName}/>
        <MainContent />
      </div>
		);
	}
}

const mapStateToProps = state => {
    return {
      sectionName: state.rootAdminReducer.sideBarReducers.sectionName,
      items: state.rootAdminReducer.mainReducers
    }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    mainActions: bindActionCreators(MainActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
