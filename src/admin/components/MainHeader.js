import React, { Component } from 'react';
import Search from './Search';
import FormUser from './FormUser';
import FormProduct from './FormProduct';
import FormTransport from './FormTransport';
import FilterUser from './FilterUser';
import * as sectionNames from '../constants/SectionNames';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '60%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default class MainHeader extends Component {

  state = {
    modalIsOpen: false,
    filterIsOpen: false
  };

  openModal = () => {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal= () => {
    // references are now sync'd and can be accessed.
  }
 
  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  openFilter = () => {
    this.setState({filterIsOpen: true})
  }

  closeFilter = () => {
    this.setState({filterIsOpen: false})
  }

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
        closeModal={this.closeModal}
        />
    }
    else if(this.props.sectionName === sectionNames.PRODUCTS){
      return <FormProduct 
        actFetchCategoriesRequest={this.props.actFetchCategoriesRequest}
        categories={this.props.categories}
        addItem={this.props.addItem}
        sectionName={this.props.sectionName}
        closeModal={this.closeModal}
      />
    }
    else if(this.props.sectionName === sectionNames.TRANSPORT){
      return <FormTransport 
        addItem={this.props.addItem}
        closeModal={this.closeModal}
      />
    }
  }

  showFilter = () => {
    if(this.props.sectionName === sectionNames.USERS){
      return <FilterUser
        />
    }
  }

  render() {
    let elemForm = null;
    let filterForm = null;
    let filterbtn = <button className="btn btn-info" onClick={this.openFilter}><b>FILTER</b></button> 
    if(this.state.modalIsOpen){
      elemForm = this.addItemForm();
    }
    if(this.state.filterIsOpen){
      filterForm = this.showFilter();
      filterbtn = <button className="btn btn-danger" onClick={this.closeFilter}><b>CLOSE FILTER</b></button> 
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
        </div>
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <span>
              <button className="btn btn-success" onClick={this.openModal}><b>ADD ITEM</b></button> 
              {filterbtn}
              <p></p>
              {filterForm}
            </span>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
        {elemForm}
        </Modal>
      </div>
    );
  }
}
