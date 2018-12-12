import React, { Component } from 'react';
import NavBar from '../containers/NavBar';
import SideBar from '../containers/SideBar';
import Main from './Main'
import '../css/admin.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <SideBar />
            <Main />
          </div>
        </div>
      </div>
    );
  }
}

export default AppAdmin;
