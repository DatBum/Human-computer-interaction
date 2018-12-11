import React, { Component} from 'react';
import CompanyName from './Header/CompanyName'
import Cart from './Header/Cart'
import LoginButtons from './Header/LoginButtons';
import DropDowns from './Header/DropDowns'

class HeaderContainer extends Component {
  state = {
    dropDowns: {
      languages: ['English', 'Vietnamese', 'Japanese', 'Chinese'],
      currencies: ['VND', 'USD', 'AUD']
    }
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <CompanyName/>
          <div className="col-md-4 col-md-offset-4 col-sm-offset-2  col-sm-6 col-xs-12">
            <div id="top_right">
              <Cart/>
              <div id="bottom_right">
                <div className="row">
                  <LoginButtons/> 
                  <DropDowns dropDowns={this.state.dropDowns}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderContainer;
