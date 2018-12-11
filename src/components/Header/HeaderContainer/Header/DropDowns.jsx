import React, { Component } from 'react';
import DropDown from './Dropdown/DropDown'

const dropDowns = (props) => {
  return(
    <div className="dropdown-bn wd-33 col-md-6 remove_PL col-xs-6">
      <div className="row">
        <DropDown items={props.dropDowns.languages} name='Language' />
        <DropDown items={props.dropDowns.currencies} name='Currency' clicked={props.changeCurrency} />
      </div>
    </div>
  )
}

export default dropDowns;
