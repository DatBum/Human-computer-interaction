import React, { Component } from 'react';
import MainHeader from '../components/MainHeader';
import MainContent from '../components/MainContent';
import * as SideBarActions from '../actions/SideBarActions';
import * as MainActions from '../actions/MainActions';
import {actFetchCategoriesRequest} from './../../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Main extends Component {

  state = {
    name: '',
    username: '',
    password: '',
    passwordConfirm: '',
    role: 'User'
  }

  onChangeName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value
    })
  }

  onChangePasswordWordConfirm = event => {
    this.setState({
      passwordConfirm: event.target.value
    })
  }

  onChangeEmail = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit = () => {
    const { name, username, role , password, passwordConfirm } = this.state
    if(name !== '' && username !== '' && role !== '' && password === passwordConfirm) {
      const item = {
        name: name,
        username: username,
        role: role
      }
      this.props.actions.addItem(this.props.section.sectionName,item);
      alert("Adding user has been successed !")
      this.setState({
        name: '',
        username: '',
        password: '',
        passwordConfirm: '',
        role: 'User'
      });
    }
    else alert("Something wrong");
  }

  componentWillMount(){
    this.props.actions.actFetchItemsRequest(this.props.section.sectionName);
  }



	render() {
    let {section, actions, mainProps, categories} = this.props
    
    let itemsOrigin = section.items
    let items = [];
    const search = mainProps.searchStr.toLowerCase();

    const { name, username, role , password, passwordConfirm } = this.state
    const itemUser = {
        name: name,
        username: username,
        role: role,
        password: password,
        passwordConfirm: passwordConfirm
      }

    // SEARCH
    if(search.length > 0){
      itemsOrigin.forEach((item)=>{
        if (section.sectionName === 'Xuất nhập kho'){
          if(item.personCreated.toLowerCase().indexOf(search) != -1){
            items.push(item);
          }
        }
        else if (section.sectionName === 'Điều chuyển hàng hóa'){
          if (item.warehouseOut.toLowerCase().indexOf(search) != -1 || item.warehouseIn.toLowerCase().indexOf(search) != -1){
            items.push(item);
          }
        }
        else {
          if(item.name.toLowerCase().indexOf(search) != -1){
            items.push(item);
          }
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
          toggleForm={actions.toggleForm}
          isShowForm={mainProps.isShowForm}
          actFetchCategoriesRequest ={actions.actFetchCategoriesRequest}
          formSubmit={this.handleSubmit}
          nameChanged={this.onChangeName}
          emailChanged={this.onChangeEmail}
          passwordChanged={this.onChangePassword}
          passwordConfirmChanged={this.onChangePasswordWordConfirm}
          categories={categories}
          addItem={actions.addItem}
          itemUser={itemUser}
          // warehouses={warehouses}
        />
        <MainContent 
          toggleForm={actions.toggleForm} 
          deleteItem={actions.deleteItem}
          sectionName={section.sectionName} 
          items={items}
        />
      </div>
		);
	}
}

const mapStateToProps = state => {
    return {
      section: state.rootAdminReducer.sideBarReducers,
      categories: state.categories,
      mainProps: state.rootAdminReducer.mainReducers
    }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    actions: bindActionCreators({actFetchCategoriesRequest,...SideBarActions,...MainActions}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
