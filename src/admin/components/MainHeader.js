import React, { Component } from 'react';
import Search from './Search';
import FormUser from './FormUser';
import FormProduct from './FormProduct';
import FormTransport from './FormTransport';
import * as sectionNames from '../constants/SectionNames';


export default class MainHeader extends Component {

  handleAdd = () =>{
    this.props.toggleForm();
  }

  addItemForm = () =>{
    if(this.props.sectionName === sectionNames.USERS){
      return <FormUser formSubmit={this.props.formSubmit}
        nameChanged={this.props.nameChanged}
        emailChanged={this.props.emailChanged}
        passwordChanged={this.props.passwordChanged}
        passwordConfirmChanged={this.props.passwordConfirmChanged}
        itemUser={this.props.itemUser}
        />
    }
    else if(this.props.sectionName === sectionNames.PRODUCTS){
      return <FormProduct 
        actFetchCategoriesRequest={this.props.actFetchCategoriesRequest}
        categories={this.props.categories}
        addItem={this.props.addItem}
        sectionName={this.props.sectionName}
      />
    }
    else if(this.props.sectionName === sectionNames.TRANSPORT){
      return <FormTransport 
        addItem={this.props.addItem}
      />
    }
  }

  render() {
    let elemButton = <button type="button" onClick={this.handleAdd} className="btn btn-info">ADD ITEM</button>
    let elemForm = null;
    if(this.props.isShowForm){
      elemButton = <button type="button" onClick={this.handleAdd} className="btn btn-danger">CLOSE</button>
      elemForm = this.addItemForm();
    }
    return (
      <div className="row" style={{marginBottom: '30px'}}>
        <h1 className="page-header" style={{color: '#39BAF0', fontSize: '40px'}}>{this.props.sectionName}</h1>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <Search 
          onchangeSearchStr={this.props.onchangeSearchStr} 
          onchangeSearchBar={this.props.onchangeSearchBar} 
          onClickSearchGo={this.props.onClickSearchGo}
          clearSearch={this.props.clearSearch} 
        />
        <div className="row col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <p></p>
          {elemButton}
        </div>
        </div>
        {elemForm}
      </div>
    );
  }
}
