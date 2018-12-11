import React, { Component, Fragment} from 'react';
import HeaderContainer from './HeaderContainer/HeaderContainer';
import NavBarContainer from './NavBarContainer/NavBarContainer';

class Header extends Component {
  render() {
      return (
        <Fragment>
        <HeaderContainer/>
        <NavBarContainer/>
        </Fragment>
      );
  }
}

export default Header;
