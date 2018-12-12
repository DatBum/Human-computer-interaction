import React, { Component } from 'react';
//import NavBar from '../containers/NavBar';
import SideBar from '../containers/SideBar';
import Main from './Main'
import '../css/admin.css';

class AppAdmin extends Component {
  render() {
    return (
        <div className="container-fluid">
          <div className="row">
            <SideBar />
            <Main />
          </div>
        </div>
    );
  }
}

export default AppAdmin;
