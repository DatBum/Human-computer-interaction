import React, { Component} from 'react';
import CompanyName from './Header/CompanyName'
import Cart from './Header/Cart'
import LoginButtons from './Header/LoginButtons';
import DropDowns from './Header/DropDowns'
import { connect } from 'react-redux';
import { changeSelectedCurrency } from '../../../actions/HeaderActions'

const mapStateToProps = state => {
  return {
    dropDowns: state.HeaderReducers.dropDowns,
    selectedCurrency: state.HeaderReducers.selectedCurrency,
    cartProducts: state.carts,
    cartSum: state.HeaderReducers.cartSum,
    loggedIn: state.LoginFormReducer.loggedIn,
    user: state.LoginFormReducer.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeCurrency: currency => dispatch(changeSelectedCurrency(currency))
  }
}

class ConnectedHeaderContainer extends Component {
  // state = {
  //   dropDowns: {
  //     languages: ['English', 'Vietnamese', 'Japanese', 'Chinese'],
  //     currencies: ['VND', 'USD', 'AUD']
  //   }
  // }

  render() {
    return(
      <div className="container">
        <div className="row">
          <CompanyName/>
          <div className="col-md-4 col-md-offset-4 col-sm-offset-2  col-sm-6 col-xs-12">
            <div id="top_right">
              {/* <Cart/> */}
              <Cart selectedCurrency={this.props.selectedCurrency} products={this.props.cartProducts}
                sum={this.props.cartSum}
              />
              <div id="bottom_right">
                <div className="row">
                  <LoginButtons loggedIn={this.props.loggedIn} user={this.props.user}/>
                  {/* <DropDowns dropDowns={this.state.dropDowns}/> */}
                  <DropDowns dropDowns={this.props.dropDowns} changeCurrency={this.props.changeCurrency}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(ConnectedHeaderContainer);

export default HeaderContainer;
