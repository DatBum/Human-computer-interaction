import React, { Component } from 'react';
import MainHeader from '../components/MainHeader';
import MainContent from '../components/MainContent';
import * as SideBarActions from '../actions/SideBarActions';
import * as MainActions from '../actions/MainActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Main extends Component {

  componentWillMount(){
    this.props.actions.actFetchItemsRequest(this.props.section.sectionName);
  }



	render() {
    let {section, actions, mainProps} = this.props
    
    let itemsOrigin = section.items
    let items = [];
    const search = mainProps.searchStr.toLowerCase();
    // console.log(itemsOrigin)

    // SEARCH
    if(search.length > 0){
      itemsOrigin.forEach((item)=>{
        if(item.name.toLowerCase().indexOf(search) != -1){
          items.push(item);
        }
      });
    }
    else{
      // console.log(search.length);
      items = itemsOrigin;
      // console.log(items)
    }

		return (
      <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <MainHeader 
          onchangeSearchStr={mainProps.searchOnChange} 
          onchangeSearchBar={actions.handleSearchOnChange} 
          onClickSearchGo={actions.handleSearch} 
          clearSearch={actions.handleClearSearch}
          sectionName={section.sectionName}
        />
        <MainContent items={items}/>
      </div>
		);
	}
}

const mapStateToProps = state => {
    return {
      section: state.rootAdminReducer.sideBarReducers,
      mainProps: state.rootAdminReducer.mainReducers
    }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    actions: bindActionCreators({...SideBarActions,...MainActions}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
